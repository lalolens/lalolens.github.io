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
// import ChatInterface from '../packages/chat/src/ChatInterface';
// // import  { Chat }  from '@lalolens/chat';

import './App.css';
import Assistant from './pages/Assistant/Assistant';


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
            <Route path="/assistant" element={<Assistant />} />
            {/* Add more routes as needed */}
          </Routes>
        </Layout>
      </Router>
    </GlobalProvider>
  );
};

export default App;
