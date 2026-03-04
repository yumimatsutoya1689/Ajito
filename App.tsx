import React, { useState } from 'react';
import { categories, menuItems, MenuItem } from './data';
import { MenuItemCard } from './components/MenuItemCard';
import { IzakayaGuide } from './components/IzakayaGuide';
import { CartModal } from './components/CartModal';
import { AllYouCanDrinkMenu } from './components/AllYouCanDrinkMenu';
import { HokkaidoExperienceSet } from './components/HokkaidoExperienceSet';
import { Info, Menu, Search, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [view, setView] = useState<'food' | 'drink' | 'aycd'>('food');
  const [activeCategory, setActiveCategory] = useState(categories.find(c => c.type === 'food')?.id || '');
  const [isGuideOpen, setIsGuideOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  const [cartItems, setCartItems] = useState<(MenuItem & { quantity: number })[]>([]);

  const handleViewChange = (newView: 'food' | 'drink' | 'aycd') => {
    setView(newView);
    setSearchQuery('');
    if (newView === 'food') {
      setActiveCategory(categories.find(c => c.type === 'food')?.id || '');
    } else if (newView === 'drink') {
      setActiveCategory(categories.find(c => c.type === 'drink')?.id || '');
    }
  };

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const handleAddSetToCart = () => {
    const setItem: MenuItem = {
      id: 'set1',
      categoryId: 'set',
      name: 'Hokkaido Experience Set',
      japaneseName: '北海道満喫セット',
      romaji: 'Hokkaido Mankitsu Set',
      description: 'All-You-Can-Drink (100 min) + 7 local dishes',
      price: 6000,
      imageUrl: '',
      tags: ['Recommended', 'Set Menu']
    };
    handleAddToCart(setItem);
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const currentCategories = categories.filter(c => c.type === view);

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = item.categoryId === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.romaji.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (searchQuery) return matchesSearch;
    return matchesCategory;
  });

  const activeCategoryData = categories.find(c => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-[#F9F6F0] font-sans text-[#1A1A1A]">
      {/* Header */}
      <header className="sticky top-0 z-40 bg-[#F9F6F0]/90 backdrop-blur-md border-b border-[#E5E0D8]">
        <div className="max-w-5xl px-4 mx-auto">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                <img src="./logo.png" alt="味扉 Ajito" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display='none'; }} />
              </div>
              <h1 className="text-xl font-serif font-bold tracking-tight">味扉 Ajito</h1>
            </div>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setIsGuideOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-[#BC002D] bg-[#BC002D]/10 rounded-full hover:bg-[#BC002D]/20 transition-colors"
              >
                <Info className="w-4 h-4" />
                <span className="hidden sm:inline">Enjoy our Izakaya</span>
              </button>
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-gray-600 transition-colors rounded-full hover:bg-gray-200"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItemCount > 0 && (
                  <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-[#BC002D] rounded-full">
                    {cartItemCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex justify-center pb-4 overflow-x-auto scrollbar-hide">
            <div className="inline-flex bg-gray-200 rounded-full p-1 min-w-max">
              <button
                onClick={() => handleViewChange('food')}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm font-bold transition-colors ${view === 'food' ? 'bg-white text-[#1A1A1A] shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Food Menu
              </button>
              <button
                onClick={() => handleViewChange('drink')}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm font-bold transition-colors ${view === 'drink' ? 'bg-white text-[#1A1A1A] shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
              >
                Drink Menu
              </button>
              <button
                onClick={() => handleViewChange('aycd')}
                className={`px-4 sm:px-6 py-2 rounded-full text-sm font-bold transition-colors ${view === 'aycd' ? 'bg-white text-[#1A1A1A] shadow-sm' : 'text-gray-500 hover:text-gray-900'}`}
              >
                All You Can Drink
              </button>
            </div>
          </div>
          
          {/* Search Bar */}
          {(view === 'food' || view === 'drink') && (
            <div className="pb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search menu (e.g., chicken, beer, edamame)..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#E5E0D8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#BC002D]/50 focus:border-[#BC002D] transition-all shadow-sm text-sm"
                />
              </div>
            </div>
          )}
        </div>
      </header>

      {view === 'food' || view === 'drink' ? (
        <main className="max-w-5xl px-4 py-6 mx-auto">
          
          {view === 'food' && !searchQuery && (
            <HokkaidoExperienceSet onAddToCart={handleAddSetToCart} />
          )}

          {!searchQuery && (
            <>
              {/* Category Navigation */}
              <div className="mb-8 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
                <div className="flex gap-2 min-w-max">
                  {currentCategories.map((category) => {
                    const Icon = category.icon;
                    const isActive = activeCategory === category.id;
                    return (
                      <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.id)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all ${
                          isActive 
                            ? 'bg-[#1A1A1A] text-white shadow-md' 
                            : 'bg-white text-gray-600 border border-[#E5E0D8] hover:border-gray-400 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-[#BC002D]' : 'text-gray-400'}`} />
                        {category.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Category Header */}
              <div className="mb-6">
                <h2 className="text-3xl font-serif font-bold text-[#1A1A1A]">{activeCategoryData?.name}</h2>
                {activeCategoryData?.description && (
                  <p className="mt-2 text-gray-600">{activeCategoryData.description}</p>
                )}
              </div>
            </>
          )}

          {searchQuery && (
            <div className="mb-6">
              <h2 className="text-xl font-medium text-gray-600">
                Search results for "{searchQuery}"
              </h2>
            </div>
          )}

          {/* Menu Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <MenuItemCard key={item.id} item={item} onAddToCart={handleAddToCart} />
              ))}
            </div>
          ) : (
            <div className="py-20 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 mb-4 bg-gray-100 rounded-full">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">No items found</h3>
              <p className="mt-1 text-gray-500">Try adjusting your search terms.</p>
            </div>
          )}
        </main>
      ) : (
        <AllYouCanDrinkMenu />
      )}

      {/* Footer */}
      <footer className="bg-[#1A1A1A] text-white py-12 mt-12">
        <div className="max-w-5xl px-4 mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden">
              <img src="./logo.png" alt="味扉 Ajito" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.style.display='none'; }} />
            </div>
            <span className="text-xl font-serif font-bold tracking-widest uppercase">味扉 Ajito</span>
          </div>
          <p className="text-sm text-gray-400 mb-6">Authentic Japanese Dining Experience</p>
          <div className="flex justify-center gap-6 text-sm text-gray-400">
            <span>5:00 p.m~3:00 a.m.( L.O. 2:00)</span>
            <span>•</span>
            <span>English Menu Available</span>
          </div>
        </div>
      </footer>

      <IzakayaGuide isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
      <CartModal 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
