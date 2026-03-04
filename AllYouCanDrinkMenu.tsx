import React from 'react';
import { motion } from 'motion/react';

const aycdData = [
  {
    category: 'Beer',
    items: ['Sapporo Classic']
  },
  {
    category: 'Sour',
    items: ['Lemon', 'Grape', 'Lime', 'Salt Plum', 'Pineapple', 'Mikan', 'Kiwi', 'Peach', 'Aloe', 'Acerola', 'Mango', 'Grapefruit', 'Shikuwasa', 'Calpis']
  },
  {
    category: 'Cocktail',
    items: ['Cassis Orange', 'Koo Nyang', 'Malibu Coke', 'Kahlua Milk', 'Fuzzy Navel', 'Kitty', 'Operator']
  },
  {
    category: 'Whisky',
    items: ['Highball', 'With water', 'Coke highball', 'Ginger Highball', 'On the Rocks']
  },
  {
    category: 'Sake',
    items: ['Cold', 'Hot']
  },
  {
    category: 'Shochu',
    items: ['With Hot Water', 'Oolong High', 'With water', 'Green Tea High', 'On the Rock', 'Jasmine High']
  },
  {
    category: 'Soft Drink',
    items: ['Oolong Tea', 'Apple Juice', 'Green Tea', 'Orange Juice', 'Jasmine Tea', 'Calpis Soda', 'Coke', 'Ginger Ale', 'Calpis', 'Grapefruit Juice']
  },
  {
    category: 'Wine',
    items: ['Red wine', 'White wine', 'Plum wine']
  }
];

export function AllYouCanDrinkMenu() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl px-4 py-6 mx-auto"
    >
      <div className="mb-8 text-center bg-white p-6 rounded-2xl shadow-sm border border-[#E5E0D8]">
        <h2 className="text-3xl font-serif font-bold text-[#BC002D] mb-4">All you can drink</h2>
        <div className="inline-block bg-[#F9F6F0] border border-[#E5E0D8] rounded-xl p-6 text-[#1A1A1A]">
          <p className="text-xl font-bold mb-2">100min <span className="text-sm font-normal text-gray-500">【 LO. 10 min before 】</span></p>
          <p className="text-2xl font-bold">¥1,782 <span className="text-sm font-normal text-gray-500">【 ¥1,980 incl. tax 】</span></p>
          <div className="mt-4 pt-4 border-t border-[#E5E0D8] text-sm text-gray-600 text-left">
            <p>※ Please order at least 2 food items per person.</p>
            <p className="ml-4">2 skewers count as 1 item.</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {aycdData.map((section) => (
          <div key={section.category} className="bg-white rounded-2xl shadow-sm border border-[#E5E0D8] overflow-hidden">
            <div className="bg-[#1A1A1A] text-white py-3 px-4 text-center">
              <h3 className="text-lg font-serif font-bold tracking-wider">{section.category}</h3>
            </div>
            <div className="p-5">
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                {section.items.map(item => (
                  <li key={item} className="text-sm text-gray-700 flex items-start gap-2 leading-tight">
                    <span className="w-1.5 h-1.5 bg-[#BC002D] rounded-full mt-1.5 flex-shrink-0"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
