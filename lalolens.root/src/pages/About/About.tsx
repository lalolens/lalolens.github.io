// src/components/MainContent/MainContentComponent.tsx
/**
 * MainContentComponent.tsx
 * Represents the main content to be displayed in the Main Content pane.
 */

import React from 'react';
import './About.css'; // Import the CSS file for styling
import '../MainContent.css';

const About: React.FC = () => {
  return (
    <main className="main-container">
      <div className="main-content">
      <div className="about">
      <h1>About Me</h1>

      <h2>Professional Summary</h2>
      <p>
        As a Software Engineer at Covered California, I specialize in architecting and deploying cutting-edge solutions that enhance system performance, security, and scalability. My work involves integrating advanced AI technologies, optimizing cloud infrastructures, and leading development teams to success.
      </p>

      <h2>Education</h2>
      <p>
        <strong>California State University Sacramento</strong> - Sacramento, CA<br />
        <em>B.S. Computer Science - Programming</em>
      </p>

      <h2>Certifications</h2>
      <ul>
        <li><strong>Microsoft Certified:</strong> Azure AI Engineer Associate (In Progress)</li>
        <li><strong>AWS Certified Solutions Architect - Associate (SAA-C03):</strong> (In Progress)</li>
      </ul>

      <h2>Technical Expertise</h2>
      <p><strong>Programming Languages:</strong> Python, Java, C++, JavaScript (TypeScript, HTML5, CSS), SQL</p>
      <p><strong>Frameworks & Libraries:</strong> React.js, Node.js, Next.js, React Native, Flask, Django</p>
      <p><strong>Cloud & DevOps:</strong> Azure DevOps, Azure Cloud Services, Docker, Kubernetes, GitHub Actions</p>
      <p><strong>Databases:</strong> PostgreSQL, CosmosDB, MongoDB, DynamoDB</p>
      <p><strong>Data & Analytics:</strong> Snowflake, Tableau, Google Analytics</p>
      <p><strong>Tools & Methodologies:</strong> Git, Figma, REST API Development, Agile, TDD</p>
      <p><strong>Languages:</strong> Fluent in English and Spanish</p>
    </div>
      </div>
    </main>
  );
};

export default About;
