// pages/CVPage.tsx
import React, { useState } from 'react';
import Layout from '../components/Layout';
import { FiUpload, FiTrendingUp, FiChevronDown } from 'react-icons/fi';
import { AiFillFilePdf } from 'react-icons/ai';
import { FaFileWord } from 'react-icons/fa';

const CVPage: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) setFile(files[0]);
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const roadmapSteps = [
    'Improve Language Skills',
    'Add Certifications',
    'Build Network',
    'Practice Interviews',
  ];

  return (
    <Layout>
      <div className="w-full px-10 py-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-emirates font-bold text-black mb-3">
            CV Reader & Career Roadmap
          </h1>
          <p className="text-gray-600 font-montessart text-lg">
            Upload your CV for AI-powered analysis and personalized career guidance
          </p>
        </div>

        {/* Main row: two cards equal height */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-10">
          {/* Upload Card */}
          <div
            onDrop={handleDrop}
            onDragOver={(e) => e.preventDefault()}
            className="flex-1 flex flex-col justify-between rounded-2xl border-2 border-dashed border-[#dccfe8] p-8 bg-white shadow-lg min-h-[460px]"
          >
            {/* top area with icon and texts */}
            <div className="flex flex-col items-center">
              {/* big upload icon inside a soft square like capture */}
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-white/60 border border-gray-200 mb-6 shadow-sm">
                <FiUpload className="text-4xl text-[#423772]" />
              </div>

              <h3 className="text-2xl font-emirates text-black mb-2">Upload your CV</h3>
              <p className="text-gray-600 font-montessart mb-2 text-center">
                Drag and drop your CV or click to browse
              </p>
              <p className="text-gray-500 font-montessart text-sm mb-6">(PDF, DOC, DOCX)</p>

              {/* choose file button with icons */}
              <input
                id="file-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileSelect}
                className="hidden"
              />
              <label
                htmlFor="file-upload"
                className="inline-flex items-center gap-3 px-6 py-2 rounded-lg cursor-pointer text-white font-montessart font-medium bg-[#423772] hover:bg-[#312456] transition-colors"
              >
                <span>Choose file...</span>
                <span className="flex items-center gap-2">
                  <AiFillFilePdf className="text-[18px]" />
                  <FaFileWord className="text-[18px]" />
                </span>
              </label>
            </div>

            {/* bottom area: file selected / analyze */}
            <div className="mt-6">
              {file ? (
                <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
                  <p className="text-green-700 font-montessart font-medium text-sm">
                    ✅ Selected: {file.name}
                  </p>
                  <button className="mt-3 bg-green-600 text-white px-4 py-1 rounded-md font-montessart text-sm hover:bg-green-700 transition">
                    Analyze CV
                  </button>
                </div>
              ) : (
                <div className="mt-2 text-center text-sm text-gray-500 font-montessart">
                  <span>Or drop your CV anywhere in the box</span>
                </div>
              )}
            </div>
          </div>

          {/* Career Roadmap Card */}
          <div className="flex-1 relative bg-[#f5f3f6] rounded-2xl shadow-lg border border-gray-200 p-8 min-h-[460px]">
            {/* top title with icon */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <FiTrendingUp className="text-3xl text-[#423772]" />
              <h3 className="text-2xl font-emirates text-black">Career roadmap</h3>
            </div>

            {/* roadmap layout: left vertical timeline + right content */}
            <div className="relative flex gap-6">
              {/* vertical timeline container */}
              <div className="w-14 flex flex-col items-center">
                {/* arrow at top */}
                <div className="w-6 h-6 flex items-center justify-center">
                  {/* small decorative arrow (using rotated chevron) */}
                  <FiChevronDown className="text-[#423772] text-lg rotate-180" />
                </div>

                {/* vertical line */}
                <div className="flex-1 w-[2px] bg-[#d5cfe3] mx-auto" />

                {/* arrow at bottom */}
                <div className="w-6 h-6 flex items-center justify-center">
                  <FiChevronDown className="text-[#423772] text-lg" />
                </div>
              </div>

              {/* items stacked aligned to the line */}
              <div className="flex-1 space-y-5 py-1">
                {roadmapSteps.map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4">
                    {/* square number badge (like capture) */}
                    <div className="w-9 h-9 flex items-center justify-center rounded-md bg-[#423772] text-white font-bold text-sm">
                      {idx + 1}
                    </div>

                    {/* step text box */}
                    <div className="flex-1 bg-white rounded-lg border border-gray-200 p-3">
                      <p className="font-montessart text-gray-800">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* subtle footer note or CTA if needed */}
            <div className="absolute bottom-6 left-8 right-8">
              <p className="text-xs text-gray-500 text-center font-montessart">
                Follow these steps to strengthen your candidacy — practice interviews and
                build certifications for best results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CVPage;
