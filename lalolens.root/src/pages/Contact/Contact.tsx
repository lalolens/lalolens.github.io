// src/components/Contact.tsx
import React from 'react';
import './Contact.css';

// Import your logo images (use correct paths for your logo files)
import emailLogo from '../../assets/material-icons/mail.svg'; // Replace with actual path to your email logo
import linkedinLogo from '../../assets/social-icons/linkedIn-logo.png'; // Replace with actual path to your LinkedIn logo
import githubLogo from '../../assets/social-icons/github-logo.svg'; // Replace with actual path to your GitHub logo


const Contact: React.FC = () => {
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <p>
        I'm always open to discussing new opportunities, innovative ideas, or potential collaborations. Feel free to reach out via email or connect with me on LinkedIn and GitHub.
      </p>
      <div className="contact__logos">
        <a href="mailto:elaloglens@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={emailLogo} alt="Email" className="contact__logo mail_logo" />
        </a>
        <a href="https://www.linkedin.com/in/eduardo-guzman-818a6a166/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinLogo} alt="LinkedIn" className="contact__logo" />
        </a>
        <a href="https://github.com/lalolens" target="_blank" rel="noopener noreferrer">
          <img src={githubLogo} alt="GitHub" className="contact__logo" />
        </a>
      </div>
    </section>

  );
};

export default Contact;
