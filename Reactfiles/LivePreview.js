import React from 'react';
import Tooltip from './Tooltip';

const LivePreview = () => {
  return (
    <div className="mobile-screen">
      <button>Button 1</button>
      <button>Button 2</button>
      {/* Add more buttons as needed */}
      <Tooltip
        targetElement={document.querySelector('button')}
        position="top"
        style={{
          backgroundColor: '#FF9800',
          color: '#FFFFFF',
          padding: '8px',
        }}
        text="This is Button 1 tooltip"
      />
      <Tooltip
        targetElement={document.querySelectorAll('button')[1]}
        position="bottom"
        style={{
          backgroundColor: '#4CAF50',
          color: '#FFFFFF',
          padding: '8px',
        }}
        text="This is Button 2 tooltip"
      />
    </div>
  );
};

export default LivePreview;
