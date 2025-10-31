// components/Header.tsx
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary">SkyHire</h1>
            <p className="ml-2 text-gray-600">Your Career Takes Off Here</p>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-primary">Login</button>
            <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;