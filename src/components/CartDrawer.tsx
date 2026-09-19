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
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-gradient-to-b from-[#091124] to-[#040814] border-l border-cyan-500/30 text-slate-100 flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-cyan-950/80 flex items-center justify-between bg-slate-900/60">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-cyan-400" />
              <h2 className="text-lg font-bold font-tech text-white">
                Your Shopping Cart
              </h2>
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-cyan-950 text-cyan-300 border border-cyan-500/40">
                {items.reduce((sum, item) => sum + item.quantity, 0)} items
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-slate-400">
                <ShoppingBag className="w-16 h-16 text-slate-700 mb-3" />
                <h3 className="text-base font-bold text-white font-tech">Your cart is empty</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-xs">
                  Browse our high-quality CCTV cameras, DVR/NVR recorders, hard disks, and security accessories.
                </p>
                <button
                  onClick={onClose}
                  className="mt-5 px-5 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-xs cursor-pointer shadow-md hover:bg-cyan-400 transition-all"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex gap-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-900/60 transition-all"
                >
                  {/* Thumbnail */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden bg-slate-950 shrink-0 border border-slate-800">
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
                        <h4 className="text-xs font-bold text-white line-clamp-1 font-tech">
                          {product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(product.id)}
                          className="text-slate-500 hover:text-red-400 transition-colors p-1 cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[11px] text-cyan-400 font-semibold font-tech">
                        ৳ {product.price.toLocaleString('en-US')}
                      </span>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between pt-2">
                      <div className="flex items-center border border-slate-700 rounded-lg bg-slate-950 px-1 py-0.5">
                        <button
                          onClick={() => onUpdateQuantity(product.id, -1)}
                          className="p-1 text-slate-400 hover:text-white cursor-pointer"
                          title="Decrease"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="px-2.5 text-xs font-bold font-mono text-white">
                          {quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, 1)}
                          className="p-1 text-slate-400 hover:text-white cursor-pointer"
                          title="Increase"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <span className="text-xs font-bold text-slate-200 font-mono">
                        ৳ {(product.price * quantity).toLocaleString('en-US')}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout button */}
          {items.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-cyan-950/80 bg-slate-900/90 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>Subtotal</span>
                  <span className="font-mono font-semibold text-white">
                    ৳ {subtotal.toLocaleString('en-US')}
                  </span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Estimated Delivery</span>
                  <span className="text-cyan-400 font-semibold">Calculated at checkout</span>
                </div>
                <div className="border-t border-slate-800 pt-2 flex justify-between text-sm font-bold text-white">
                  <span>Total Amount</span>
                  <span className="text-base font-black text-cyan-400 font-tech">
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
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm transition-all shadow-[0_0_20px_rgba(6,182,212,0.35)] cursor-pointer"
                >
                  <span>Proceed to Order</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <button
                    onClick={onClearCart}
                    className="hover:text-red-400 underline cursor-pointer"
                  >
                    Clear Cart
                  </button>
                  <span className="flex items-center gap-1 text-slate-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
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
