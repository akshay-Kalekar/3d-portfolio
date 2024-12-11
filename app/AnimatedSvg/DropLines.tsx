import React, { useState, useEffect } from 'react';

export const DropLines = () => {
  const lines = [311.79, 592.39, 873, 1153.61, 1434.21]; // Five lines evenly spaced

  const [positions, setPositions] = useState(
    lines.map(() => Math.random() * 1000) // Initialize with random positions along the y-axis
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prevPositions) =>
        prevPositions.map((pos) => (pos >= 2000 ? 0 : pos + 5)) // Reset position if it exceeds container height
      );
    }, 16); // Approximately 60 FPS

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='w-full h-screen'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2000 2000" // Set viewBox to handle large dimensions
        preserveAspectRatio="xMidYMid"
        className="w-full h-full"
        style={{
          shapeRendering: 'auto',
          display: 'block',
          background: 'black',
        }}
      >
        <defs>
          <filter
            height="97.80"
            width="12"
            y="-6"
            x="-6"
            filterUnits="userSpaceOnUse"
            id="f-mzf97b0al6f"
          >
            <feGaussianBlur result="blur1" stdDeviation="5" />
            <feMorphology result="dilate" in="SourceGraphic" radius="1.25" operator="dilate" />
            <feComponentTransfer result="dark" in="dilate">
              <feFuncR slope="0.33" type="linear" />
              <feFuncG slope="0.33" type="linear" />
              <feFuncB slope="0.33" type="linear" />
            </feComponentTransfer>
            <feGaussianBlur result="blur2" in="dark" stdDeviation="2.50" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {lines.map((x, i) => (
          <g key={i}>
            <path
              strokeWidth="0.4"
              stroke="#3a4cda"
              d={`M${x} 0L${x} 2000`} // Extend lines infinitely long
            />
            <path
              filter="url(#f-mzf97b0al6f)"
              fill="#ffffff"
              d="M0 0L-1 85.80 A1 1 0 0 0 1 85.80 Z"
              transform={`matrix(1,0,0,1,${x},${positions[i]})`}
            />
          </g>
        ))}
      </svg>
    </div>
  );
};
