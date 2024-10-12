// src/components/MainContent/MainContentComponent.tsx
/**
 * MainContentComponent.tsx
 * Represents the main content to be displayed in the Main Content pane.
 */

import React from 'react';
import { Link } from 'react-router-dom';

import profilePic from '../../assets/profile.jpg'; // Ensure you have a profile picture in this path
import './Home.css'; // Import the CSS file for styling
import '../MainContent.css';

import  Playground  from '@lalolens/playground/Playground';




const Hero: React.FC = () => {
  return (
    <>
    <div className="hero">
      <img src={profilePic} alt="Your Name" className="profile-pic hero__img" />
      <h1 className="hero__heading">Designing the Foundation for Innovation</h1>
      <p className="hero__body">
      <Playground />
      Hi, I'm Eduardo, and this is my personal platform where I bring to life the projects, innovations, and achievements that define my journey in technology. Lalolens is a reflection of my drive to innovate solutions in the world of technology, offering a unique lens into my approach to problem-solving and creativity within the IT landscape. Join me as we push the boundaries, transform ideas into reality, and make a lasting impact.
      </p>
    </div>
    </>
  );
}

const GetInTouch: React.FC = () => {
  return (
    <>
    <div className="interactive-container">
    <Link
      to="/contact"
      className="interactive-button"
      aria-label="Contact Us"
    >
      Get in Touch
    </Link>
    <Link
      to="/projects"
      className="interactive-button"
      aria-label="View Projects"
    >
      View Projects
    </Link>
    </div>
    </>
  );
}


const Home: React.FC = () => {
  return (
    <main className="main-container">
      <div className="main-content">
      <div className="home">
        <Hero />
        <GetInTouch />
      </div>
      </div>
    </main>
  );
};


export default Home;
