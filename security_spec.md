# Security Specification for Shamim Tech Solution

## 1. Data Invariants
- Products in the catalog must have a unique alphanumeric/hyphen ID, valid title/name, category, positive price, and valid image URI.
- The product catalog is publicly queryable and viewable by any customer or guest without login (`allow read: if true`).
- Only verified Admin account (`shamimtech2020@gmail.com` or registered admins in `/admins/{uid}`) can create, edit, or delete product entries in Firestore.
- Document mutations must enforce strict size bounds (preventing resource exhaustion / denial of wallet attacks).

## 2. Dirty Dozen Payloads Handled
1. **Unauthenticated Write**: An unauthenticated request attempts to create `/products/hack-prod`. REJECTED by `isAdmin()`.
2. **Missing Required Fields**: Payload missing `price` or `image`. REJECTED by `isValidProduct` `keys().hasAll(...)`.
3. **Negative Price**: Payload with `price: -500`. REJECTED by `price >= 0`.
4. **Massive Name String**: Payload with 10,000 character string in `name`. REJECTED by `size() <= 250`.
5. **Path Traversal / Malformed ID**: Document ID containing invalid special characters. REJECTED by `isValidId`.
6. **Non-Admin Privilege Escalation**: Regular user trying to write to `/admins/{uid}` with `role: "Super Admin"`. REJECTED by email validation rule.
7. **Arbitrary Collection Write**: Attempting to write to arbitrary root paths. REJECTED by default deny-all rule.
8. **Spoofed Email Write**: Unverified email attempting admin operations. REJECTED by `request.auth.token.email_verified == true`.
9. **Invalid Type for Price**: Price submitted as string `"1500"`. REJECTED by `data.price is number`.
10. **Image Exceeding Limit**: Image string greater than 500,000 bytes. REJECTED by `size() <= 500000`.
11. **Malicious Delete**: Public guest attempting `deleteDoc(doc(db, 'products', 'real-id'))`. REJECTED by `isAdmin()`.
12. **Zombie Document Update**: Non-admin attempting to alter price or name of existing product. REJECTED by `isAdmin()`.
