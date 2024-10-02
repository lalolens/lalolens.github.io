// src/components/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import profilePic from '../../assets/profile.jpg'; // Ensure you have a profile picture in this path

const Hero: React.FC = () => {
  return (
    <>
      <div className="hero">
        <img src={profilePic} alt="Eduardo" className="profile-pic hero__img" />
        <h1 className="hero__heading">Creating the Blueprint for Modern Innovation</h1>
        <p className="hero__body">
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
          aria-label="Contact Me"
        >
          Get in Touch
        </Link>
        <Link
          to="/projects"
          className="interactive-button"
          aria-label="Check out my projects."
        >
          View Projects
        </Link>
      </div>
    </>
  );
}

const Home: React.FC = () => {
  return (
    <section className="home">
      <Hero />
      <GetInTouch />
    </section>
  );
};

export default Home;
