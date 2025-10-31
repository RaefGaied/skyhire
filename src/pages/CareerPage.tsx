// pages/CareerPage.tsx
import React from 'react';
import Layout from '../components/Layout';

const CareerPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Career Guide</h2>
        <div className="bg-white p-8 rounded-lg shadow-sm text-center">
          <p className="text-gray-600">Career Guide - Coming Soon</p>
        </div>
      </div>
    </Layout>
  );
};

export default CareerPage;