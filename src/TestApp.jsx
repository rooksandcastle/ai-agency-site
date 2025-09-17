import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const HomePage = () => (
  <div style={{ padding: '20px', backgroundColor: 'blue', color: 'white', minHeight: '100vh' }}>
    <h1>HOME PAGE WORKS!</h1>
    <Link to="/test" style={{ color: 'yellow' }}>Go to Test Page</Link>
  </div>
);

const TestPageSimple = () => (
  <div style={{ padding: '20px', backgroundColor: 'red', color: 'white', minHeight: '100vh' }}>
    <h1>TEST PAGE WORKS!</h1>
    <Link to="/" style={{ color: 'yellow' }}>Go to Home Page</Link>
  </div>
);

const TestApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<TestPageSimple />} />
      </Routes>
    </Router>
  );
};

export default TestApp;