import React from "react";
import { MapPin, DollarSign } from "lucide-react";

const JobsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white px-8 py-10 font-sans">
      {/* Header */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Job Matcher & Airline Ranking
        </h1>
        <p className="text-gray-500 mb-8">
          Discover airlines and positions perfectly matched to your profile
        </p>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10">
          <div className="flex-1 bg-indigo-100 p-3 rounded-lg flex flex-wrap gap-3">
            <button className="px-4 py-1.5 rounded-lg bg-indigo-600 text-white text-sm font-medium">
              All Positions
            </button>
            <button className="px-4 py-1.5 rounded-lg bg-indigo-200 text-gray-700 text-sm font-medium hover:bg-indigo-300">
              Flight Attendant
            </button>
            <button className="px-4 py-1.5 rounded-lg bg-indigo-200 text-gray-700 text-sm font-medium hover:bg-indigo-300">
              Cabin Crew
            </button>
          </div>

          <div className="flex-1 bg-indigo-100 p-3 rounded-lg flex flex-wrap gap-3">
            <button className="px-4 py-1.5 rounded-lg bg-fuchsia-700 text-white text-sm font-medium">
              Best Match
            </button>
            <button className="px-4 py-1.5 rounded-lg bg-indigo-200 text-gray-700 text-sm font-medium hover:bg-indigo-300">
              Highest Salary
            </button>
            <button className="px-4 py-1.5 rounded-lg bg-indigo-200 text-gray-700 text-sm font-medium hover:bg-indigo-300">
              Top Rated
            </button>
          </div>
        </div>

        {/* Job Cards */}
        <div className="space-y-6">
          {/* Emirates Airlines */}
          <div className="flex justify-between items-start bg-rose-100 border border-rose-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div>
              <h2 className="text-lg font-bold text-gray-800">Emirates Airlines</h2>
              <p className="text-sm font-medium text-gray-600">Flight Attendant</p>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <MapPin size={14} className="mr-1" /> Dubai, UAE
                <span className="mx-3">•</span>
                <DollarSign size={14} className="mr-1" /> $3,500–$4,500
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {["Customer Service", "Safety Procedures", "Languages"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-rose-200 text-gray-700 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-right">
              <p className="text-3xl font-extrabold text-gray-800">92%</p>
              <p className="text-sm text-gray-500">Match Score</p>
            </div>
          </div>

          {/* Singapore Airlines */}
          <div className="flex justify-between items-start bg-rose-100 border border-rose-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div>
              <h2 className="text-lg font-bold text-gray-800">Singapore Airlines</h2>
              <p className="text-sm font-medium text-gray-600">Cabin Crew</p>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <MapPin size={14} className="mr-1" /> Singapore
                <span className="mx-3">•</span>
                <DollarSign size={14} className="mr-1" /> $3,800–$4,800
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {["Service Excellence", "Multilingual", "Customer Service"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-rose-200 text-gray-700 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-right">
              <p className="text-3xl font-extrabold text-gray-800">90%</p>
              <p className="text-sm text-gray-500">Match Score</p>
            </div>
          </div>

          {/* Qatar Airways */}
          <div className="flex justify-between items-start bg-rose-100 border border-rose-200 rounded-xl p-6 shadow-sm hover:shadow-md transition">
            <div>
              <h2 className="text-lg font-bold text-gray-800">Qatar Airways</h2>
              <p className="text-sm font-medium text-gray-600">Cabin Crew</p>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <MapPin size={14} className="mr-1" /> Doha, Qatar
                <span className="mx-3">•</span>
                <DollarSign size={14} className="mr-1" /> $3,200–$4,200
              </div>

              <div className="flex flex-wrap gap-2 mt-3">
                {["Hospitality", "Emergency Response", "Multilingual"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-rose-200 text-gray-700 text-xs px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="text-right">
              <p className="text-3xl font-extrabold text-gray-800">88%</p>
              <p className="text-sm text-gray-500">Match Score</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsPage;