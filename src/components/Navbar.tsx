import React from 'react';
import { Menu, Search, ShoppingCart, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../store/cartStore';

export default function Navbar() {
  const items = useCartStore((state) => state.items);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-600 lg:hidden">
              <Menu size={24} />
            </button>
            <Link to="/" className="text-2xl font-bold text-blue-600 ml-2">
              TechVenta
            </Link>
          </div>

          <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/auth" className="p-2 rounded-full hover:bg-gray-100">
              <User size={20} className="text-gray-600" />
            </Link>
            <Link to="/cart" className="p-2 rounded-full hover:bg-gray-100 relative">
              <ShoppingCart size={20} className="text-gray-600" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}