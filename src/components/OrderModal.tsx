import React, { useState } from 'react';
import { 
  X, 
  ShoppingBag, 
  MessageSquare, 
  CheckCircle2, 
  Truck, 
  CreditCard, 
  MapPin, 
  User, 
  Phone,
  Printer,
  ShieldAlert
} from 'lucide-react';
import { CartItem, OrderFormState, SavedOrder, CompanyInfo, CustomerUser } from '../types';
import { COMPANY_INFO, DISTRICTS_LIST } from '../data/companyData';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderPlaced: (order: SavedOrder) => void;
  companyInfo?: CompanyInfo;
  customer?: CustomerUser | null;
}

export const OrderModal: React.FC<OrderModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderPlaced,
  companyInfo: passedCompany,
  customer,
}) => {
  const activeCompany = passedCompany || COMPANY_INFO;

  const [formData, setFormData] = useState<OrderFormState>({
    customerName: customer?.fullName || '',
    mobileNumber: customer?.phone || (customer?.loginIdentifier && !customer.loginIdentifier.includes('@') ? customer.loginIdentifier : ''),
    whatsappNumber: customer?.phone || '',
    fullAddress: customer?.address || '',
    district: customer?.district ? customer.district.split(' ')[0] : 'Rangpur',
    deliveryOption: 'Haragach Local Delivery',
    paymentMethod: 'Cash on Delivery (COD)',
    notes: '',
  });

  const [confirmedOrder, setConfirmedOrder] = useState<SavedOrder | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const deliveryFee = 
    formData.deliveryOption === 'Haragach Local Delivery' ? 50 :
    formData.deliveryOption === 'Rangpur City Express' ? 100 : 150;

  const totalAmount = subtotal + deliveryFee;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.customerName.trim()) errs.customerName = 'Customer name is required';
    if (!formData.mobileNumber.trim()) {
      errs.mobileNumber = 'Mobile number is required';
    } else if (!/^[0-9+]{11,14}$/.test(formData.mobileNumber.replace(/\s+/g, ''))) {
      errs.mobileNumber = 'Please provide a valid 11-digit mobile number';
    }
    if (!formData.fullAddress.trim()) errs.fullAddress = 'Detailed delivery address is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Build the WhatsApp message payload as instructed
  const buildWhatsAppOrderMessage = (orderId?: string) => {
    const lines = [
      `*NEW CCTV ORDER - SHAMIM TECH SOLUTION*`,
      `----------------------------------------`,
      `*Order ID:* ${orderId || 'PENDING-STS'}`,
      `*Customer Name:* ${formData.customerName}`,
      `*Mobile Number:* ${formData.mobileNumber}`,
      `*WhatsApp Number:* ${formData.whatsappNumber || formData.mobileNumber}`,
      `*District:* ${formData.district}`,
      `*Full Address:* ${formData.fullAddress}`,
      `*Delivery Method:* ${formData.deliveryOption} (৳${deliveryFee})`,
      `*Payment Method:* ${formData.paymentMethod}`,
      `----------------------------------------`,
      `*ORDER DETAILS:*`,
    ];

    items.forEach((item, index) => {
      lines.push(
        `${index + 1}. *${item.product.name}*`,
        `   • Qty: ${item.quantity} | Unit Price: ৳${item.product.price.toLocaleString('en-US')}`,
        `   • Line Total: ৳${(item.product.price * item.quantity).toLocaleString('en-US')}`
      );
    });

    lines.push(
      `----------------------------------------`,
      `*Subtotal:* ৳${subtotal.toLocaleString('en-US')}`,
      `*Delivery Fee:* ৳${deliveryFee}`,
      `*TOTAL ORDER AMOUNT:* ৳${totalAmount.toLocaleString('en-US')}`,
      formData.notes ? `*Customer Notes:* ${formData.notes}` : '',
      `----------------------------------------`,
      `_Please confirm my order and installation schedule. Thank you!_`
    );

    return encodeURIComponent(lines.filter(Boolean).join('\n'));
  };

  // 1. "Place Order" standard workflow
  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const newOrderId = `STS-${Date.now().toString().slice(-6)}`;
    const newOrder: SavedOrder = {
      ...formData,
      customerId: customer?.id,
      orderId: newOrderId,
      items: [...items],
      subtotal,
      deliveryFee,
      totalAmount,
      orderDate: new Date().toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'Confirmed'
    };

    onOrderPlaced(newOrder);
    setConfirmedOrder(newOrder);
  };

  // 2. "Order via WhatsApp" workflow
  const handleOrderViaWhatsApp = () => {
    if (!validate()) return;

    const tempOrderId = `STS-WA-${Date.now().toString().slice(-5)}`;
    const waUrl = `https://wa.me/${activeCompany.whatsappInternational}?text=${buildWhatsAppOrderMessage(tempOrderId)}`;
    
    // Save order locally too
    const newOrder: SavedOrder = {
      ...formData,
      customerId: customer?.id,
      orderId: tempOrderId,
      items: [...items],
      subtotal,
      deliveryFee,
      totalAmount,
      orderDate: new Date().toLocaleDateString('en-GB'),
      status: 'Pending'
    };
    onOrderPlaced(newOrder);

    // Open WhatsApp
    window.open(waUrl, '_blank');
    setConfirmedOrder(newOrder);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl my-6 rounded-2xl bg-gradient-to-b from-[#0a1226] to-[#040814] border border-cyan-500/40 p-5 sm:p-8 shadow-2xl text-slate-100 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {confirmedOrder ? (
          /* Order Confirmation Screen */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <span className="text-xs uppercase tracking-widest font-tech font-bold text-cyan-400">
                Order Received Successfully!
              </span>
              <h2 className="text-2xl font-black text-white font-tech mt-1">
                Thank You, {confirmedOrder.customerName}!
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-md mx-auto">
                Your order <span className="font-mono text-cyan-400 font-bold">#{confirmedOrder.orderId}</span> has been logged. Technician Shamim will contact your mobile to arrange delivery & installation.
              </p>
            </div>

            {/* Receipt Box */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-left text-xs space-y-3">
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Delivery Address:</span>
                <span className="font-semibold text-right text-slate-200">{confirmedOrder.fullAddress}, {confirmedOrder.district}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Contact Number:</span>
                <span className="font-mono font-semibold text-cyan-400">{confirmedOrder.mobileNumber}</span>
              </div>
              <div className="flex justify-between border-b border-slate-800 pb-2">
                <span className="text-slate-400">Payment Option:</span>
                <span className="font-semibold text-slate-200">{confirmedOrder.paymentMethod}</span>
              </div>
              <div className="flex justify-between font-bold text-sm text-white pt-1">
                <span>Total Payable:</span>
                <span className="text-cyan-400 font-mono text-base">৳ {confirmedOrder.totalAmount.toLocaleString('en-US')}</span>
              </div>
            </div>

            {/* WhatsApp Resend or Direct Call */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsappInternational}?text=${buildWhatsAppOrderMessage(confirmedOrder.orderId)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-xs sm:text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Send to WhatsApp (01865321530)</span>
              </a>

              <button
                onClick={onClose}
                className="flex-1 py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs sm:text-sm cursor-pointer"
              >
                Done / Back to Shop
              </button>
            </div>
          </div>
        ) : (
          /* Order Placement Form */
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider font-tech">
                <ShoppingBag className="w-4 h-4" />
                <span>Checkout & Order Placement</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white font-tech mt-1">
                Place Your Security Equipment Order
              </h2>
              <p className="text-xs text-slate-400 mt-0.5">
                Quick dispatch from Haragach, Rangpur. All orders include technician testing.
              </p>
            </div>

            {/* Customer Status Banner */}
            {customer ? (
              <div className="mb-4 p-3 rounded-xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-cyan-300">
                  <User className="w-4 h-4 text-cyan-400" />
                  <span>
                    লগইন একাউন্ট: <strong className="text-white">{customer.fullName}</strong> ({customer.phone || customer.email || customer.district})
                  </span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                  Auto-filled
                </span>
              </div>
            ) : null}

            {/* Order Items Preview summary */}
            <div className="mb-5 p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs space-y-2">
              <div className="font-bold text-slate-300 font-tech uppercase text-[11px] border-b border-slate-800 pb-1">
                Selected Products ({items.length} item{items.length > 1 ? 's' : ''}):
              </div>
              <div className="max-h-28 overflow-y-auto space-y-1.5 pr-1">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="flex justify-between items-center text-[11px]">
                    <span className="text-slate-300 truncate max-w-[220px]">
                      {product.name} (x{quantity})
                    </span>
                    <span className="font-mono text-cyan-400 font-bold">
                      ৳ {(product.price * quantity).toLocaleString('en-US')}
                    </span>
                  </div>
                ))}
              </div>
              <div className="pt-2 border-t border-slate-800 flex justify-between font-bold text-xs text-white">
                <span>Subtotal:</span>
                <span className="text-cyan-400 font-mono">৳ {subtotal.toLocaleString('en-US')}</span>
              </div>
            </div>

            {/* Form Fields */}
            <form onSubmit={handlePlaceOrder} className="space-y-4">
              
              {/* Customer Name */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Customer Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    placeholder="e.g. Md. Ashraful Islam"
                    className="w-full bg-slate-900 text-sm text-white rounded-xl pl-9 pr-3 py-2 border border-slate-700 focus:border-cyan-400 focus:outline-none"
                  />
                  <User className="w-4 h-4 text-cyan-400 absolute left-3 top-2.5" />
                </div>
                {errors.customerName && <p className="text-red-400 text-[11px] mt-0.5">{errors.customerName}</p>}
              </div>

              {/* Mobile Number & WhatsApp Number */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={formData.mobileNumber}
                      onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                      placeholder="01XXXXXXXXX"
                      className="w-full bg-slate-900 text-sm text-white rounded-xl pl-9 pr-3 py-2 border border-slate-700 focus:border-cyan-400 focus:outline-none"
                    />
                    <Phone className="w-4 h-4 text-cyan-400 absolute left-3 top-2.5" />
                  </div>
                  {errors.mobileNumber && <p className="text-red-400 text-[11px] mt-0.5">{errors.mobileNumber}</p>}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    WhatsApp Number
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      placeholder="Optional (if different from mobile)"
                      className="w-full bg-slate-900 text-sm text-white rounded-xl pl-9 pr-3 py-2 border border-slate-700 focus:border-cyan-400 focus:outline-none"
                    />
                    <MessageSquare className="w-4 h-4 text-emerald-400 absolute left-3 top-2.5" />
                  </div>
                </div>
              </div>

              {/* District & Delivery Options */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    District *
                  </label>
                  <select
                    value={formData.district}
                    onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                    className="w-full bg-slate-900 text-sm text-white rounded-xl px-3 py-2 border border-slate-700 focus:border-cyan-400 focus:outline-none cursor-pointer"
                  >
                    {DISTRICTS_LIST.map((dist) => (
                      <option key={dist} value={dist} className="bg-slate-900 text-white">
                        {dist}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Delivery Option *
                  </label>
                  <select
                    value={formData.deliveryOption}
                    onChange={(e) => setFormData({ ...formData, deliveryOption: e.target.value as any })}
                    className="w-full bg-slate-900 text-sm text-white rounded-xl px-3 py-2 border border-slate-700 focus:border-cyan-400 focus:outline-none cursor-pointer"
                  >
                    <option value="Haragach Local Delivery">Haragach Local Delivery (৳50)</option>
                    <option value="Rangpur City Express">Rangpur City Express (৳100)</option>
                    <option value="Courier Delivery (Bangladesh)">Courier Delivery (Sundarban/SA Paribahan) (৳150)</option>
                  </select>
                </div>
              </div>

              {/* Full Address */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Full Address (Village/Area, Road, House / Landmark) *
                </label>
                <div className="relative">
                  <textarea
                    rows={2}
                    required
                    value={formData.fullAddress}
                    onChange={(e) => setFormData({ ...formData, fullAddress: e.target.value })}
                    placeholder="e.g. Haragach Bazar Main Road, Near Rangpur Thana, Haragach"
                    className="w-full bg-slate-900 text-sm text-white rounded-xl pl-9 pr-3 py-2 border border-slate-700 focus:border-cyan-400 focus:outline-none"
                  />
                  <MapPin className="w-4 h-4 text-cyan-400 absolute left-3 top-2.5" />
                </div>
                {errors.fullAddress && <p className="text-red-400 text-[11px] mt-0.5">{errors.fullAddress}</p>}
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1">
                  Payment Method *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  {[
                    'Cash on Delivery (COD)',
                    'bKash',
                    'Nagad',
                    'Bank Transfer'
                  ].map((method) => (
                    <button
                      type="button"
                      key={method}
                      onClick={() => setFormData({ ...formData, paymentMethod: method as any })}
                      className={`p-2 rounded-xl text-center font-semibold border transition-all cursor-pointer ${
                        formData.paymentMethod === method
                          ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500 shadow-sm'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {method}
                    </button>
                  ))}
                </div>
              </div>

              {/* Total Calculation Display */}
              <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/30 flex items-center justify-between text-xs sm:text-sm">
                <div>
                  <span className="text-slate-400 block text-[11px]">Subtotal: ৳{subtotal.toLocaleString('en-US')} + Delivery: ৳{deliveryFee}</span>
                  <span className="text-white font-bold">Total Order Amount:</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-cyan-400 font-tech">
                  ৳ {totalAmount.toLocaleString('en-US')}
                </div>
              </div>

              {/* Required Action Buttons: "Place Order" AND "Order via WhatsApp" */}
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                
                {/* Place Order Button */}
                <button
                  type="submit"
                  id="place-order-submit-btn"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(6,182,212,0.35)] transition-all cursor-pointer active:scale-98"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Place Order</span>
                </button>

                {/* Order via WhatsApp Button */}
                <button
                  type="button"
                  onClick={handleOrderViaWhatsApp}
                  id="order-via-whatsapp-btn"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-bold text-sm shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all cursor-pointer active:scale-98"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Order via WhatsApp (01865321530)</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center pt-1">
                Technician Shamim will personally inspect and test hardware before dispatch.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
