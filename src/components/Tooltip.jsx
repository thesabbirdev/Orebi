import React, { useState } from 'react';

const Tooltip = ({ text, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="relative inline-block">
      <span onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {children}
      </span>
      {showTooltip && (
        <div className="absolute z-10 bg-[#F5F5F3] text-secondary font-dmsans p-3 rounded-md whitespace-nowrap duration-1000">
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
