// src/pages/DesignDemo.tsx
import React from 'react';
import './DesignDemo.css'; // Import the corresponding CSS file

const DesignDemo: React.FC = () => {
  return (
    <div className="design-demo" id="main-content">
      <div className="design-demo__container design-demo__bg_light design-demo__color_dark">
        <h1>Design Demo Page</h1>
        <p>
          Welcome to the Design Demo Page. This section showcases how text can be presented within
          containers that have subtle shadows and backgrounds, enhancing readability against a
          darker, carbon-gray matte background.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
          eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Fusce erat odio,
          sollicitudin vel erat vel, interdum mattis neque.
        </p>
        <div className="design-demo__additional-content">
          <h2>Subheading Example</h2>
          <p>
            This is an example of a subheading within the same container. The background and shadow
            ensure that all text remains easily readable without direct text shadows.
          </p>
        </div>
        {/* Add more content as needed */}
      </div>
      <div className="design-demo__container design-demo__bg_dark design-demo__color_light">
        <h1>Design Demo Page</h1>
        <p>
          Welcome to the Design Demo Page. This section showcases how text can be presented within
          containers that have subtle shadows and backgrounds, enhancing readability against a
          darker, carbon-gray matte background.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
          eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Fusce erat odio,
          sollicitudin vel erat vel, interdum mattis neque.
        </p>
        <div className="design-demo__additional-content">
          <h2>Subheading Example</h2>
          <p>
            This is an example of a subheading within the same container. The background and shadow
            ensure that all text remains easily readable without direct text shadows.
          </p>
        </div>
        {/* Add more content as needed */}
      </div>
      <div className="design-demo__container design-demo__bg_light design-demo__color_dark">
        <h1>Design Demo Page</h1>
        <p>
          Welcome to the Design Demo Page. This section showcases how text can be presented within
          containers that have subtle shadows and backgrounds, enhancing readability against a
          darker, carbon-gray matte background.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
          eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Fusce erat odio,
          sollicitudin vel erat vel, interdum mattis neque.
        </p>
        <div className="design-demo__additional-content">
          <h2>Subheading Example</h2>
          <p>
            This is an example of a subheading within the same container. The background and shadow
            ensure that all text remains easily readable without direct text shadows.
          </p>
        </div>
        {/* Add more content as needed */}
      </div>
    </div>
  );
};

export default DesignDemo;
