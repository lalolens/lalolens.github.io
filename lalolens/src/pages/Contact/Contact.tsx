// src/components/Contact.tsx
import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section className="contact">
      <h1>Contact Me</h1>
      <p>
        I'm always open to discussing new opportunities, innovative ideas, or potential collaborations. Feel free to reach out via email or connect with me on LinkedIn and GitHub.
      </p>
      <p>
        <a href="mailto:elaloglens@gmail.com" target="_blank"><strong>Email</strong></a>
        <a href="https://www.linkedin.com/in/eduardo-guzman-818a6a166/" target="_blank"><strong>LinkedIn</strong></a>
        <a href="https://github.com/lalolens" target="_blank"><strong>GitHub</strong></a>
      </p>
    </section>
  );
};

export default Contact;
