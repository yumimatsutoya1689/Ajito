import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Info, UtensilsCrossed } from 'lucide-react';

interface HokkaidoSetProps {
  onAddToCart: () => void;
}

export function HokkaidoExperienceSet({ onAddToCart }: HokkaidoSetProps) {
  const setContents = [
    { name: 'All-You-Can-Drink (100 min)', desc: 'Unlimited drinks for 100 minutes' },
    { name: 'Ramen Salad', desc: 'Hokkaido original noodle salad' },
    { name: 'Zangi (Hokkaido Fried Chicken)', desc: 'Local style Japanese fried chicken' },
    { name: 'Lamb Sashimi', desc: 'Hokkaido is famous for lamb dishes' },
    { name: 'Deep-Fried Daikon', desc: 'Our original crispy fried radish' },
    { name: 'Chicken with Wasabi (Toriwasa)', desc: 'A traditional Japanese dish' },
    { name: 'French Fries', desc: 'Classic crispy potato fries' },
    { name: 'Yakitori Assortment', desc: '3 skewers per person' },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] text-white shadow-2xl border border-[#BC002D]/30"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#BC002D] rounded-full blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#BC002D] rounded-full blur-[100px] opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative p-6 sm:p-10">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          
          {/* Left Column: Title & Price */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#BC002D]/20 border border-[#BC002D]/50 text-[#FF6B6B] text-sm font-bold tracking-widest uppercase mb-2">
              Highly Recommended
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FFA500] leading-tight">
              HOKKAIDO<br className="hidden sm:block" /> EXPERIENCE SET
            </h2>
            
            <p className="text-xl text-gray-300 font-medium">
              All-You-Can-Drink included / 100 minutes
            </p>
            
            <div className="pt-4 pb-2">
              <div className="inline-flex items-baseline gap-2">
                <span className="text-6xl font-bold text-white">¥6,000</span>
                <span className="text-gray-400">/ person</span>
              </div>
            </div>
            
            <button 
              onClick={onAddToCart}
              className="w-full sm:w-auto px-10 py-4 text-lg font-bold text-[#1A1A1A] bg-gradient-to-r from-[#FFD700] to-[#FFA500] rounded-full hover:scale-105 transition-transform shadow-[0_0_30px_rgba(255,215,0,0.3)]"
            >
              Add to Order
            </button>
            
            <div className="flex items-start gap-2 text-xs text-gray-400 mt-4 max-w-md mx-auto lg:mx-0 text-left">
              <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <p>*Some dishes may contain raw ingredients. Please ask our staff if you have allergies or dietary restrictions.</p>
            </div>
          </div>
          
          {/* Right Column: Menu Items */}
          <div className="flex-1 w-full bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2 border-b border-white/10 pb-3">
              <UtensilsCrossed className="w-5 h-5 text-[#FFD700]" />
              Set Contents
            </h3>
            
            <ul className="space-y-3">
              {setContents.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#BC002D] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-gray-100">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}
