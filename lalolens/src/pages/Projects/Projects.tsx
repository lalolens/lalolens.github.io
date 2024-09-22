// src/components/Projects.tsx
import React from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AI-Powered Document Accessibility Analyzer',
    description:
      'Developed a multithreaded Python application to automate the accessibility analysis of thousands of PDF documents. Leveraged Azure Blob Storage and multiprocessing to significantly reduce processing time, enhancing compliance with accessibility standards and optimizing resource utilization.',
  },
  {
    id: 2,
    title: 'Secure Internal AI Chat Platform',
    description:
      'Engineered a high-performance AI chat interface using Flask and React, integrating OpenAI technologies. Implemented advanced security measures including AES encryption and Azure Key Vault to protect sensitive data, ensuring compliance with privacy regulations and enhancing internal communication capabilities.',
  },
  {
    id: 3,
    title: 'Cloud-Based File Management System',
    description:
      'Built a custom file upload and management tool using Express.js and Azure Blob Storage, seamlessly integrated into the existing CMS. Implemented full CRUD capabilities with robust authentication and authorization, improving user productivity by centralizing file editing and management.',
  },
  {
    id: 4,
    title: 'Enterprise Network Security Enhancement',
    description:
      'Configured and deployed Azure Front Door with Azure Virtual Network to secure critical backend services and databases. Enhanced load balancing and traffic management across web applications, improving scalability and responsiveness while ensuring compliance with industry security standards.',
  },
  {
    id: 5,
    title: 'Website Modernization for Board Communications',
    description:
      'Led the redesign and modernization of a key organizational website using Jekyll, integrating automated page generation and custom plugins. Customized the CMS to enable non-technical users to maintain the site effortlessly, improving site aesthetics, functionality, and long-term maintainability.',
    link: 'https://board.coveredca.com',
  },
  {
    id: 6,
    title: 'Main Website Revamp Serving Millions',
    description:
      'Contributed to the redesign of the main organizational website, serving millions annually. Integrated dynamic APIs into a static Jekyll framework to deliver real-time data. Optimized performance and security using Azure services, ensuring high availability and robust protection, enhancing user experience and trust.',
    link: 'https://www.coveredca.com',
  },
  {
    id: 7,
    title: 'Geolocation-Based Service Finder',
    description:
      'Developed an innovative tool using React and Google Geolocation APIs to enable users to efficiently find nearby services. Integrated an interactive map with dynamic markers and advanced filtering options, enhancing user engagement and accessibility with responsive design and thorough testing.',
    link: 'https://www.coveredca.com/support/find-an-enroller/',
  },
  {
    id: 8,
    title: 'User Assistance Integration',
    description:
      'Created an embedded form using React and Node.js to connect users with service providers. Implemented secure data collection and validation, integrating with external APIs for reliable data exchange. Streamlined the user onboarding process, ensuring data integrity and compliance with privacy regulations.',
    link: 'https://www.coveredca.com/help-on-demand/',
  },
  {
    id: 9,
    title: 'E-Commerce Platform: Tip for the Trip',
    description:
      'Led backend integration and CI/CD automation for an e-commerce platform using Django REST and Heroku. Developed a secure API, integrated Cloudinary for scalable image storage, and enhanced the admin portal with Google Analytics for actionable insights. Streamlined deployment processes, improving efficiency and reducing downtime.',
    link: 'https://www.tipforthetrip.com',
  },
];

const Projects: React.FC = () => {
  return (
    <section className="projects">
      <h1>Professional Projects</h1>
      {projects.map((project) => (
        <div key={project.id} className="project">
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </div>
      ))}
    </section>
  );
};

export default Projects;
