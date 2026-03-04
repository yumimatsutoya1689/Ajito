import React from 'react';
import { MenuItem } from '../data';
import { motion, AnimatePresence } from 'motion/react';
import { X, Trash2 } from 'lucide-react';

interface CartItem extends MenuItem {
  quantity: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export function CartModal({ isOpen, onClose, cartItems, onRemoveItem, onClearCart }: CartModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="w-full max-w-md h-full bg-[#F9F6F0] shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-[#E5E0D8] bg-white">
              <h2 className="text-2xl font-serif text-[#1A1A1A] font-bold">Your Order</h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-500 transition-colors rounded-full hover:bg-gray-200 hover:text-gray-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <p className="text-lg">Your cart is empty.</p>
                  <p className="text-sm mt-2">Add some delicious items to get started!</p>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-900 text-sm">{item.name}</h4>
                      <p className="text-xs text-gray-500">{item.japaneseName}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm font-medium text-[#BC002D]">Qty: {item.quantity}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => onRemoveItem(item.id)}
                      className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 bg-white border-t border-[#E5E0D8] space-y-4">
                <button 
                  onClick={onClearCart}
                  className="w-full py-3 text-sm font-bold text-gray-600 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
                >
                  Clear All
                </button>
                <div className="bg-[#BC002D]/10 border border-[#BC002D]/20 rounded-xl p-5 text-center shadow-sm">
                  <p className="text-[#BC002D] font-bold text-lg mb-2">Ready to order?</p>
                  <p className="text-[#1A1A1A] font-medium leading-relaxed">
                    Please call our staff and show them this screen to place your order.
                  </p>
                  <div className="mt-3 pt-3 border-t border-[#BC002D]/20">
                    <p className="text-sm text-gray-600 font-medium">
                      ご注文の際は、お近くのスタッフに<br/>この画面をお見せください。
                    </p>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
