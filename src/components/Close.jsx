import React, { useState, useEffect, useRef } from 'react';


function Close({ children, onClose }) {

    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
            onClose();
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [onClose]);
    

  return (
    <div ref={wrapperRef}>{children}</div>
  )
}

export default Close