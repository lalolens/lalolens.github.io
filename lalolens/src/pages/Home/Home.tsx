// src/components/Home.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Home.css';
import profilePic from '../../assets/profile.jpg'; // Ensure you have a profile picture in this path

const Home: React.FC = () => {
  const location = useLocation();
  return (
    <section className="home">
      <img src={profilePic} alt="Your Name" className="profile-pic" />
      <h1>Driving Innovation Through Technology</h1>
      <p>
        I'm a dedicated Software Engineer with a passion for developing scalable and secure software solutions. With expertise in AI integration, cloud computing, and full-stack development, I transform complex challenges into innovative outcomes. Let's collaborate to bring ideas to life.
      </p>
      
      <Link
            to="/contact"
            className="cta-button"
            aria-label="Contact Us"
          >
            Get in Touch
          </Link>
    </section>
  );
};

export default Home;
