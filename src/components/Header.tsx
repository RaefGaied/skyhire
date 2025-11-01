// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* On a déplacé le logo dans le sidebar, donc on peut mettre un message de bienvenue */}
          <div className="text-gray-600 font-montessart">
            Welcome to your aviation career dashboard
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-primary font-montessart transition-colors">
              Login
            </button>
            <button className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors font-montessart font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;