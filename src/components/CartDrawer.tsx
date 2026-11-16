import React from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  ShieldCheck,
  Phone
} from 'lucide-react';
import { CartItem } from '../types';
import { COMPANY_INFO } from '../data/companyData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onProceedToOrder: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onProceedToOrder,
}) => {
  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity, 
    0
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#1F2937]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 w-full max-w-full flex justify-end">
        
<div className="w-full max-w-sm h-full min-w-0 bg-white border-l border-[#DCE7F2] text-[#1F2937] flex flex-col shadow-xl">
          
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-[#DCE7F2] flex items-center justify-between bg-[#F7FAFC]">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#123A70]" />
              <h2 className="text-lg font-bold font-tech text-[#1F2937]">
                Your Shopping Cart
              </h2>
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[#EFF5FB] text-[#123A70] border border-[#DCE7F2]">
                {items.reduce((sum, item) => sum + item.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white border border-[#DCE7F2] text-[#4B5563] hover:text-[#1F2937] hover:bg-[#EFF5FB] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-[#4B5563]">
                <ShoppingBag className="w-16 h-16 text-[#DCE7F2] mb-3" />
                <h3 className="text-base font-bold text-[#1F2937] font-tech">Your cart is empty</h3>
                <p className="text-xs text-[#64748B] mt-1 max-w-xs">
                  Browse our high-quality CCTV cameras, DVR/NVR recorders, hard disks, and security accessories.
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 px-5 py-2.5 rounded-xl bg-[#123A70] hover:bg-[#1A4B8C] text-white font-bold text-xs cursor-pointer shadow-xs transition-all"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-3 p-3 rounded-xl bg-[#F7FAFC] border border-[#DCE7F2] hover:border-[#123A70]/45 transition-all"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-white shrink-0 border border-[#DCE7F2]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-1">
                        <h4 className="text-xs font-bold text-[#1F2937] line-clamp-1 font-tech">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(product.id)}
                          className="text-[#64748B] hover:text-red-500 transition-colors p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[11px] text-[#123A70] font-semibold font-tech">
                        {(product.priceType === 'contact' || product.isContactForPrice) ? (
                          <span className="text-[#123A70] font-bold">Contact for Price</span>
                        ) : (
                          `৳ ${product.price.toLocaleString('en-US')}`
                        )}
                      </span>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-[#DCE7F2] rounded-lg bg-white px-1 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(product.id, -1)}
                          className="p-1 text-[#4B5563] hover:text-[#1F2937] cursor-pointer"
                          title="Decrease"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold font-mono text-[#1F2937]">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, 1)}
                          className="p-1 text-[#4B5563] hover:text-[#1F2937] cursor-pointer"
                          title="Increase"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-[#1F2937] font-mono">
                        {(product.priceType === 'contact' || product.isContactForPrice) ? (
                          <span className="text-[#123A70] font-bold">Price on Contact</span>
                        ) : (
                          `৳ ${(product.price * quantity).toLocaleString('en-US')}`
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout button */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-[#DCE7F2] bg-[#F7FAFC] space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-[#4B5563]">
                  <span>Subtotal</span>
                  <span className="font-mono font-semibold text-[#1F2937]">
                    ৳ {subtotal.toLocaleString('en-US')}
                  </span>
                </div>
                <div className="flex justify-between text-[#64748B]">
                  <span>Estimated Delivery</span>
                  <span className="text-[#123A70] font-semibold">Calculated at checkout</span>
                </div>
                <div className="border-t border-[#DCE7F2] pt-2 flex justify-between text-sm font-bold text-[#1F2937]">
                  <span>Total Amount</span>
                  <span className="text-base font-black text-[#123A70] font-tech">
                    ৳ {subtotal.toLocaleString('en-US')}
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    onClose();
                    onProceedToOrder();
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#12733D] hover:bg-[#106637] active:bg-[#106637] text-white font-bold text-sm transition-all shadow-sm cursor-pointer"
                >
                  <span>Proceed to Order</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between text-[11px] text-[#64748B] pt-1">
                  <button
                    onClick={onClearCart}
                    className="hover:text-red-500 underline cursor-pointer"
                  >
                    Clear Cart
                  </button>
                  <span className="flex items-center gap-1 text-[#4B5563]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#123A70]" />
                    Verified STS Order Support
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
