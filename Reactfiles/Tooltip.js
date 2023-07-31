import React, { useState, useEffect } from 'react';
import './Tooltip.css'; // Import the stylesheet for Tooltip styles

const Tooltip = ({ targetElement, position, style, text }) => {
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (targetElement) {
      const targetRect = targetElement.getBoundingClientRect();
      let top = 0;
      let left = 0;

      switch (position) {
        case 'top':
          top = targetRect.top - 10; // Adjust the offset for the tooltip
          left = targetRect.left + targetRect.width / 2;
          break;
        case 'right':
          top = targetRect.top + targetRect.height / 2;
          left = targetRect.right + 10;
          break;
        case 'bottom':
          top = targetRect.bottom + 10;
          left = targetRect.left + targetRect.width / 2;
          break;
        case 'left':
          top = targetRect.top + targetRect.height / 2;
          left = targetRect.left - 10;
          break;
        default:
          break;
      }

      setTooltipPosition({ top, left });
    }
  }, [targetElement, position]);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const tooltipStyle = {
    ...style,
    top: tooltipPosition.top,
    left: tooltipPosition.left,
    display: isVisible ? 'block' : 'none',
  };

  return (
    <div
      className="tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {isVisible && (
        <div className="tooltip" style={tooltipStyle}>
          <span>{text}</span>
        </div>
      )}
      {targetElement}
    </div>
  );
};

export default Tooltip;
