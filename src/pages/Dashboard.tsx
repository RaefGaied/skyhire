// pages/Dashboard.tsx
import React from 'react';
import Layout from '../components/Layout';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'CV Score', value: '85%', color: 'text-primary' },
    { label: 'Interviews Completed', value: '12', color: 'text-secondary' },
    { label: 'Job Matches', value: '8', color: 'text-accent' },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-primary font-emirates">Dashboard</h2>
        
        {/* Stats Cards alignées avec le sidebar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white p-5 rounded-xl shadow-lg border border-gray-100">
              <h3 className="font-montessart text-gray-600 mb-2 text-sm">{stat.label}</h3>
              <p className={`text-3xl font-bold ${stat.color} font-emirates`}>{stat.value}</p>
            </div>
          ))}
        </div>
        
        {/* Welcome Section réduite */}
        <div className="bg-gradient-to-r from-primary to-secondary p-6 rounded-xl shadow-lg text-white mb-6">
          <h3 className="text-xl font-bold mb-3 font-emirates">Welcome to SkyHire!</h3>
          <p className="font-montessart text-white text-opacity-90">
            Your premier aviation career platform. Upload your CV, practice with AI interviews, 
            and discover exclusive flight opportunities.
          </p>
        </div>

        {/* Quick Actions alignées */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-100">
            <h4 className="font-semibold text-primary mb-3 font-montessart text-sm">Quick Actions</h4>
            <div className="space-y-2">
              <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-secondary transition-colors font-montessart text-sm">
                Upload Your CV
              </button>
              <button className="w-full border border-primary text-primary py-2 rounded-lg hover:bg-primary hover:text-white transition-colors font-montessart text-sm">
                Start Interview Practice
              </button>
            </div>
          </div>
          
          <div className="bg-white p-5 rounded-xl shadow-lg border border-gray-100">
            <h4 className="font-semibold text-primary mb-3 font-montessart text-sm">Recent Activity</h4>
            <div className="space-y-1 text-xs text-gray-600 font-montessart">
              <p>✅ CV analyzed - 85% score</p>
              <p>✅ Interview completed - 92%</p>
              <p>🔄 3 new job matches</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;