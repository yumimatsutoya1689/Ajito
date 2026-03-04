import React from 'react';
import { MenuItem } from '../data';
import { motion } from 'motion/react';

interface MenuItemCardProps {
  key?: React.Key;
  item: MenuItem;
  onAddToCart: (item: MenuItem) => void;
}

export function MenuItemCard({ item, onAddToCart }: MenuItemCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col overflow-hidden transition-shadow bg-white border border-gray-100 shadow-sm rounded-2xl hover:shadow-md"
    >
      <div className="flex flex-col flex-grow p-5">
        <div className="flex items-start justify-between gap-4 mb-2">
          <div>
            <h3 className="text-xl font-bold text-gray-900 leading-tight">{item.name}</h3>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-sm font-medium text-[#BC002D]">{item.romaji}</span>
              <span className="text-xs text-gray-500">{item.japaneseName}</span>
            </div>
          </div>
          <div className="text-lg font-bold text-gray-900 whitespace-nowrap">
            ¥{item.price}
          </div>
        </div>
        
        {item.description && (
          <p className="mt-2 text-sm leading-relaxed text-gray-600 flex-grow">
            {item.description}
          </p>
        )}
        
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {item.tags.map(tag => (
              <span key={tag} className="px-2 py-1 text-xs font-semibold tracking-wider text-gray-600 uppercase rounded-md bg-gray-100">
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
            <span className="text-xs text-gray-400 font-mono">ID: {item.id.toUpperCase()}</span>
            <button 
              onClick={() => onAddToCart(item)}
              className="px-4 py-2 text-sm font-medium text-white transition-colors bg-[#1A1A1A] rounded-full hover:bg-[#BC002D]"
            >
              Add to Order
            </button>
        </div>
      </div>
    </motion.div>
  );
}
