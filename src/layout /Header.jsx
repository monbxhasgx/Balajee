import React from 'react';
import { Search, Menu} from 'lucide-react';
import logo from '../assets/Product/balajeelogo.png';

const Header = () => {
  return (
    <header className="bg-black text-white px-6 py-4 flex items-center justify-between">
      {/* Left: Search Box */}
      
      <div className="w-72 h-10 bg-zinc-500/40 rounded-2xl flex items-center px-4">
      {/* Search icon */}
      <Search className="text-white mr-2" size={18} />

      <input
        type="text"
        placeholder="Search Here"
        className="bg-transparent outline-none text-white/70 text-sm placeholder-white/70 w-full"
      />
    </div>

      {/* Center: Logo + Company Name + Nav Links */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <img src={logo} alt="Logo" className="h-8 w-8 object-contain" />
          <h1 className="text-lg font-bold">Balajee Home Appliances</h1>
        </div>

            
        <nav className="flex space-x-6 text-sm justify-center">
          <a href="#" className="hover:text-gray-400">Products</a>
          <a href="#" className="hover:text-gray-400">About Us</a>
          <a href="#" className="hover:text-gray-400">Photo Gallery</a>
          <a href="#" className="hover:text-gray-400">Manufacturing</a>
          <a href="#" className="hover:text-gray-400">Contact Us</a>
        </nav>
      </div>

      {/* Right: View Catalogue Button */}
      <div>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          View Catalogue
        </button>
      </div>
    </header>
  );
};

export default Header;
