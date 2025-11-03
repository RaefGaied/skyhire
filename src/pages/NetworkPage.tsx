// pages/NetworkPage.tsx
import React from "react";
import Layout from "../components/Layout";
import { Search, MessageCircle, Check, X } from "lucide-react";

const NetworkPage: React.FC = () => {
  return (
    <Layout>
      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-semibold mb-2">Networking Platform</h1>
          <p className="text-gray-600 mb-6">
            Connect with aviation professionals, mentors and recruiters
          </p>

          {/* Search Bar */}
          <div className="relative mb-6">
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search professionals..."
              className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
            />
          </div>

          {/* Tabs */}
          <div className="flex space-x-6 border-b mb-6">
            <button className="pb-2 border-b-2 border-indigo-500 text-indigo-600 font-semibold">
              My Connections (2)
            </button>
            <button className="pb-2 text-gray-500 hover:text-indigo-600">
              Discover (3)
            </button>
          </div>

          {/* Connections List */}
          <div className="space-y-4">
            <div className="bg-gray-50 border rounded-xl p-4 flex items-center justify-between hover:shadow-sm">
              <div>
                <p className="font-semibold">Sarah Jhonson</p>
                <p className="text-sm text-gray-500">Senior Flight Attendant</p>
                <p className="text-xs text-gray-400">✈️ Emirates Airlines</p>
              </div>
              <button className="flex items-center gap-1 bg-indigo-500 text-white px-3 py-1.5 rounded-lg hover:bg-indigo-600">
                <MessageCircle size={16} /> Message
              </button>
            </div>

            <div className="bg-gray-50 border rounded-xl p-4 flex items-center justify-between hover:shadow-sm">
              <div>
                <p className="font-semibold">James Wilson</p>
                <p className="text-sm text-gray-500">Flight Attendant</p>
                <p className="text-xs text-gray-400">✈️ Singapore Airlines</p>
              </div>
              <button className="flex items-center gap-1 bg-indigo-500 text-white px-3 py-1.5 rounded-lg hover:bg-indigo-600">
                <MessageCircle size={16} /> Message
              </button>
            </div>
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-72 bg-white border-l p-6 flex flex-col gap-6">
          <div className="bg-indigo-50 rounded-xl p-4">
            <h2 className="font-semibold mb-3">Your Networks</h2>
            <p className="text-sm">
              Total Connections: <b>48</b>
            </p>
            <p className="text-sm">
              Active Connections: <b>2</b>
            </p>
            <p className="text-sm text-red-600">
              Pending Requests: <b>12</b>
            </p>
          </div>

          <div>
            <h2 className="font-semibold mb-3">Connection Requests</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-gray-50 border rounded-lg p-3">
                <span className="font-medium">David Brown</span>
                <div className="flex gap-2">
                  <button className="bg-green-500 p-1.5 rounded text-white hover:bg-green-600">
                    <Check size={14} />
                  </button>
                  <button className="bg-red-500 p-1.5 rounded text-white hover:bg-red-600">
                    <X size={14} />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center bg-gray-50 border rounded-lg p-3">
                <span className="font-medium">Jackson Wilson</span>
                <div className="flex gap-2">
                  <button className="bg-green-500 p-1.5 rounded text-white hover:bg-green-600">
                    <Check size={14} />
                  </button>
                  <button className="bg-red-500 p-1.5 rounded text-white hover:bg-red-600">
                    <X size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </Layout>
  );
};

export default NetworkPage;