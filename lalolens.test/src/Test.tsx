import React from 'react';

import './Test.css';

const Test: React.FC = () => {
  return (
    <section className="playground">
      <h1>Test Component</h1>
      <button className="playground-button">
        {/* Replace with an icon if desired */}
        💬
      </button>
    </section>
  );
};

export default Test;
