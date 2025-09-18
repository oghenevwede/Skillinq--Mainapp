// components/GradientSpinner.tsx

import React from 'react';

const GradientSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="
          h-20 w-20 
          rounded-full 
          relative
          flex items-center justify-center
          animate-spin
        "
        style={{
          // The magic for the gradient border
          background: 'conic-gradient(#a855f7, transparent, #3b82f6)', // From purple to transparent to blue
          WebkitMask: 'radial-gradient(farthest-side,#0000 calc(100% - 4px),#000 0)', // Mask the center
          mask: 'radial-gradient(farthest-side,#0000 calc(100% - 4px),#000 0)', // Fallback for mask
        }}
      >
        <div className="h-10 w-10 rounded-full bg-white"></div>
      </div>
    </div>
  );
};

export default GradientSpinner;