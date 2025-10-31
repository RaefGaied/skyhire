// App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CVPage from './pages/CVPage';
import InterviewPage from './pages/InterviewPage';
import JobsPage from './pages/JobsPage';
import NetworkPage from './pages/NetworkPage';
import CareerPage from './pages/CareerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/cv" element={<CVPage />} />
        <Route path="/interview" element={<InterviewPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/network" element={<NetworkPage />} />
        <Route path="/career" element={<CareerPage />} />
      </Routes>
    </Router>
  );
}

export default App;