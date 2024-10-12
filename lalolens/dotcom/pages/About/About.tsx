// src/components/MainContent/MainContentComponent.tsx
/**
 * MainContentComponent.tsx
 * Represents the main content to be displayed in the Main Content pane.
 */

import React, { useRef } from 'react';


// import useScrollHandler from '../../hooks/useScollHandler';

import './About.css'; // Import the CSS file for styling
import '../MainContent.css';

const About: React.FC = () => {
  // const containerRef = useRef<HTMLDivElement>(null);
  // useScrollHandler(containerRef);

  return (
    <main className="main-container">
      <div className="main-content">
      <div className="about">
        <h1>About Me</h1>

      <h2>The Vision Behind Lalolens</h2>
      <p>
        Lalolens is more than just a showcase; it's an expression of my journey as a software engineer who constantly pushes the boundaries of technology. This platform reflects my passion for designing innovative solutions, my dedication to excellence, and my commitment to driving impactful change in the tech industry. Through Lalolens, I aim to share the experiences, projects, and insights that have defined my career, offering a glimpse into how I approach challenges and create solutions that are both advanced and user-centric.
      </p>

      <h2>Who I Am</h2>
      <p>
        I'm Eduardo, a software engineer passionate about developing advanced, impactful solutions. My expertise lies in designing and deploying innovative systems that elevate performance, security, and scalability. With a strong focus on AI integration, cloud technologies, and leading development initiatives, I'm committed to shaping the future of technology.
      </p>
      <h2>Education</h2>
      <p>
        <strong>California State University Sacramento</strong> - Sacramento, CA<br />
        <span><em>B.S. Computer Science - Programming</em> (Graduated May 2023)</span>
        <p>Graduated in May 2023 with a strong foundation in software engineering, data structures, algorithms, and system design. Coursework included advanced programming, AI, OpenGL grpahics programming, cloud computing, and web development, equipping me with the skills necessary to excel in modern software and full-stack development.</p>

      </p>

      <h2>Certifications</h2>
      <ul>
        <li><strong>Microsoft Certified:</strong> Azure AI Engineer Associate (In Progress)</li>
        <p>Gaining advanced skills in designing, implementing, and integrating AI solutions using Microsoft Azure's AI services, focusing on delivering scalable and secure AI applications.</p>
        <li><strong>AWS Certified Solutions Architect - Associate (SAA-C03):</strong> (In Progress)</li>
        <p>Developing a comprehensive understanding of architecting and deploying applications on AWS, focusing on creating resilient, high-performing, and cost-optimized cloud solutions.</p>
      </ul>

      <h2>Technical Expertise</h2>
      <p>
        <strong>Programming Languages:</strong> Python, Java, C++, C, JavaScript (TypeScript, HTML5, CSS), SQL, NoSQL
      </p>
      <p>
        <strong>Frameworks & Libraries:</strong> React.js, Node.js, Next.js, React Native, Django, Flask, Vite
      </p>
      <p>
        <strong>Cloud & DevOps:</strong> Azure DevOps, Azure Cloud Services (AI Services, OpenAI, Functions, Container Registry, Cosmos DB, Front Door, Virtual Networking), Docker, Kubernetes, GitHub Actions
      </p>
      <p>
        <strong>Databases:</strong> PostgreSQL, CosmosDB, MongoDB, DynamoDB
      </p>
      <p>
        <strong>Data & Analytics:</strong> Snowflake, Tableau, Google Analytics, Data Visualization
      </p>
      <p>
        <strong>Tools & Methodologies:</strong> Git, GitHub, Figma, REST API Development, Agile Methodologies, Clean Architecture, Test-Driven Development (TDD)
      </p>
      <p>
        <strong>Languages:</strong> Fluent in English and Spanish
      </p>
    </div>
      </div>
    </main>
  );
};

export default About;
