// src/App.tsx
/**
 * App.tsx
 * Main application file wrapped with GlobalProvider to manage global state.
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects' 
import { GlobalProvider } from './context/GlobalContext';

// import  Playground  from '@lalolens/playground/Playground';
import  Playground  from '../packages/playground/src/Playground';

import './App.css';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/playground" element={<Playground />} />
            {/* Add more routes as needed */}
          </Routes>
        </Layout>
      </Router>
    </GlobalProvider>
  );
};

export default App;
