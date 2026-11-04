import { 
  collection, 
  doc, 
  getDocs, 
  setDoc, 
  deleteDoc, 
  onSnapshot, 
  query 
} from 'firebase/firestore';
import { ref, uploadBytes, uploadString, getDownloadURL } from 'firebase/storage';
import { db, storage, handleFirestoreError, OperationType } from './config';
import { Product } from '../types';
import { INITIAL_PRODUCTS } from '../data/companyData';

const PRODUCTS_COLLECTION = 'products';

// Upload product image file or base64 to Firebase Storage and return permanent URL
export async function uploadProductImageToStorage(
  fileOrBase64: File | string, 
  productId: string
): Promise<string> {
  try {
    const timestamp = Date.now();
    const cleanId = productId.replace(/[^a-zA-Z0-9_-]/g, '') || 'prod';

    if (typeof fileOrBase64 === 'string') {
      const trimmed = fileOrBase64.trim();
      // If it's already a hosted URL (http/https), return directly
      if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
        return trimmed;
      }
      
      // If it's a data URL, upload to Firebase Storage
      if (trimmed.startsWith('data:image/')) {
        try {
          const extension = trimmed.substring('data:image/'.length, trimmed.indexOf(';')) || 'jpg';
          const storageRef = ref(storage, `products/${cleanId}_${timestamp}.${extension}`);
          await uploadString(storageRef, trimmed, 'data_url');
          const downloadUrl = await getDownloadURL(storageRef);
          return downloadUrl;
        } catch (storageErr) {
          console.warn('Firebase Storage uploadString notice (using direct URI fallback):', storageErr);
          return trimmed;
        }
      }
      return trimmed;
    } else {
      // It's a File object from input
      try {
        const fileExt = fileOrBase64.name.split('.').pop() || 'jpg';
        const storageRef = ref(storage, `products/${cleanId}_${timestamp}.${fileExt}`);
        await uploadBytes(storageRef, fileOrBase64);
        const downloadUrl = await getDownloadURL(storageRef);
        return downloadUrl;
      } catch (storageErr) {
        console.warn('Firebase Storage uploadBytes notice (reading as data URL fallback):', storageErr);
        return new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.readAsDataURL(fileOrBase64);
        });
      }
    }
  } catch (error) {
    console.error('Failed to process image upload:', error);
    return typeof fileOrBase64 === 'string' ? fileOrBase64 : '';
  }
}

// Ensure clean product object for Firestore (strip undefined, validate numeric fields)
function sanitizeProductForFirestore(product: Product): Record<string, any> {
  const clean: Record<string, any> = {
    id: String(product.id || `prod-${Date.now()}`),
    name: String(product.name || '').trim(),
    category: String(product.category || 'Other Accessories'),
    brand: String(product.brand || 'STS').trim(),
    price: Number(product.price) || 0,
    priceType: product.priceType || (product.isContactForPrice ? 'contact' : 'fixed'),
    isContactForPrice: Boolean(product.isContactForPrice),
    specs: String(product.specs || '').trim(),
    description: String(product.description || '').trim(),
    inStock: product.inStock !== false,
    isActive: product.isActive !== false,
    image: String(product.image || '').trim(),
    features: Array.isArray(product.features) ? product.features : [],
    rating: Number(product.rating) || 5.0,
    warranty: String(product.warranty || '').trim(),
    modelNumber: String(product.modelNumber || '').trim(),
    updatedAt: new Date().toISOString()
  };

  if (product.originalPrice !== undefined && product.originalPrice !== null) {
    clean.originalPrice = Number(product.originalPrice);
  }
  if (product.regularPrice !== undefined && product.regularPrice !== null) {
    clean.regularPrice = Number(product.regularPrice);
  }
  if (product.badge) {
    clean.badge = String(product.badge).trim();
  }
  if (product.isPopular !== undefined) {
    clean.isPopular = Boolean(product.isPopular);
  }
  if (product.reviewsCount !== undefined) {
    clean.reviewsCount = Number(product.reviewsCount);
  }

  return clean;
}

// Fetch all products from Firestore
export async function getProductsFromFirestore(): Promise<Product[]> {
  try {
    const productsRef = collection(db, PRODUCTS_COLLECTION);
    const snapshot = await getDocs(productsRef);
    if (snapshot.empty) {
      return [];
    }
    const items: Product[] = [];
    snapshot.forEach(docSnap => {
      items.push({ ...(docSnap.data() as Product), id: docSnap.id });
    });
    return items;
  } catch (error) {
    console.error('Error fetching products from Firestore:', error);
    handleFirestoreError(error, OperationType.GET, PRODUCTS_COLLECTION);
  }
}

// Seed initial catalog into Firestore if collection is empty
export async function seedInitialProductsIfEmpty(): Promise<Product[]> {
  try {
    const existing = await getProductsFromFirestore();
    if (existing.length > 0) {
      return existing;
    }

    console.log('Seeding initial products catalog into Firebase Firestore...');
    const seededProducts: Product[] = [];
    for (const prod of INITIAL_PRODUCTS) {
      try {
        const sanitized = sanitizeProductForFirestore(prod);
        await setDoc(doc(db, PRODUCTS_COLLECTION, sanitized.id), sanitized);
        seededProducts.push(sanitized as Product);
      } catch (e) {
        console.warn(`Could not seed product ${prod.id}:`, e);
      }
    }
    return seededProducts.length > 0 ? seededProducts : INITIAL_PRODUCTS;
  } catch (err) {
    console.warn('Initial seeding note:', err);
    return INITIAL_PRODUCTS;
  }
}

// Subscribe to realtime product changes
export function subscribeToProducts(
  onUpdate: (products: Product[]) => void,
  onError?: (error: Error) => void
): () => void {
  const productsQuery = query(collection(db, PRODUCTS_COLLECTION));
  
  return onSnapshot(
    productsQuery,
    (snapshot) => {
      const items: Product[] = [];
      snapshot.forEach(docSnap => {
        items.push({ ...(docSnap.data() as Product), id: docSnap.id });
      });
      onUpdate(items);
    },
    (error) => {
      console.error('Error in products realtime subscription:', error);
      if (onError) onError(error);
      handleFirestoreError(error, OperationType.LIST, PRODUCTS_COLLECTION);
    }
  );
}

// Add or update a product in Firestore permanently
export async function saveProductToFirestore(product: Product): Promise<Product> {
  const sanitized = sanitizeProductForFirestore(product);
  const docRef = doc(db, PRODUCTS_COLLECTION, sanitized.id);
  
  try {
    await setDoc(docRef, sanitized, { merge: true });
    return sanitized as Product;
  } catch (error) {
    console.error(`Failed to save product ${sanitized.id} to Firestore:`, error);
    handleFirestoreError(error, OperationType.WRITE, `${PRODUCTS_COLLECTION}/${sanitized.id}`);
  }
}

// Delete a product from Firestore permanently
export async function deleteProductFromFirestore(productId: string): Promise<boolean> {
  const docRef = doc(db, PRODUCTS_COLLECTION, productId);
  try {
    await deleteDoc(docRef);
    return true;
  } catch (error) {
    console.error(`Failed to delete product ${productId} from Firestore:`, error);
    handleFirestoreError(error, OperationType.DELETE, `${PRODUCTS_COLLECTION}/${productId}`);
  }
}
