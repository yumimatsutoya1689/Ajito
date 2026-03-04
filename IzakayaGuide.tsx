import React from 'react';
import { Info, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function IzakayaGuide({ isOpen, onClose }: GuideModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="relative w-full max-w-lg bg-[#F9F6F0] rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center justify-between p-6 border-b border-[#E5E0D8]">
              <h2 className="text-2xl font-serif text-[#1A1A1A] flex items-center gap-2">
                <Info className="w-6 h-6 text-[#BC002D]" />
                Enjoy our Izakaya
              </h2>
              <button
                onClick={onClose}
                className="p-2 text-gray-500 transition-colors rounded-full hover:bg-gray-200 hover:text-gray-900"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6 overflow-y-auto max-h-[60vh] text-[#333]">
              <section>
                <h3 className="text-lg font-bold text-[#BC002D] mb-2">1. The "Otoshi" (Table Charge)</h3>
                <p className="text-sm leading-relaxed">
                  When you sit down, you will be served a small appetizer called an <strong>Otoshi</strong>. 
                  This acts as a seating charge of <strong className="text-[#BC002D]">¥440 per person</strong> and is a standard custom in Japan. Think of it as a cover charge that comes with a snack!
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-[#BC002D] mb-2">2. Sharing is Caring</h3>
                <p className="text-sm leading-relaxed">
                  Unlike Western dining where everyone orders their own main dish, Izakaya food is meant to be shared. 
                  Order a few dishes at a time for the table, and use the small plates (torizara) provided to serve yourself.
                </p>
              </section>

              <section>
                <h3 className="text-lg font-bold text-[#BC002D] mb-2">3. "Sumimasen!" (Excuse me!)</h3>
                <p className="text-sm leading-relaxed">
                  Don't wait for the server to come to you. When you are ready to order, raise your hand slightly and call out <strong>"Sumimasen!"</strong> (Excuse me). 
                  Some tables might have a call button to press instead.
                </p>
              </section>
            </div>
            
            <div className="p-4 bg-[#E5E0D8] text-center">
              <p className="font-serif text-lg text-[#1A1A1A] italic">"Kanpai!" (Cheers!)</p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
