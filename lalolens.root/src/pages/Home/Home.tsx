// src/components/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import profilePic from '../../assets/profile.jpg'; // Ensure you have a profile picture in this path


const Hero: React.FC = () => {
  return (
    <>
    <div className="hero">
      <img src={profilePic} alt="Your Name" className="profile-pic hero__img" />
      <h1 className="hero__heading">Driving Innovation Through Technology</h1>
      <p className="hero__body">
        I am a dedicated Software Engineer with a passion for developing scalable and secure software solutions. With expertise in AI integration, cloud computing, and full-stack development, I transform complex challenges into innovative outcomes. Let's collaborate to bring ideas to life.
      </p>
    </div>
    </>
  );
}

const GetInTouch: React.FC = () => {
  return (
    <>
    <Link
      to="/contact"
      className="cta-button"
      aria-label="Contact Us"
    >
      Get in Touch
    </Link>
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
