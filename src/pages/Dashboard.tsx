// pages/Dashboard.tsx
import React from 'react';
import Layout from '../components/Layout';

const Dashboard: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-600">CV Score</h3>
            <p className="text-3xl font-bold text-primary">85%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-600">Interviews Completed</h3>
            <p className="text-3xl font-bold text-secondary">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold text-gray-600">Job Matches</h3>
            <p className="text-3xl font-bold text-accent">8</p>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-4">Welcome to SkyHire!</h3>
          <p className="text-gray-600">
            Your aviation career platform. Upload your CV, practice interviews, and discover flight opportunities.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;