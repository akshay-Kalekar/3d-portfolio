import React, { useState } from 'react';
import skill from '@/app/Data/skill.json';
import { DropLines } from '../AnimatedSvg/DropLines';
import { url } from 'inspector';

const Skill = () => {
  const [animatingIndexes, setAnimatingIndexes] = useState({}); // Object to track each icon's animation state

  const handleMouseEnter = (index) => {
    setAnimatingIndexes((prev) => ({
      ...prev,
      [index]: true, // Set animation active for this index
    }));

    // Remove animation class after animation completes
    setTimeout(() => {
      setAnimatingIndexes((prev) => ({
        ...prev,
        [index]: false, // Reset animation state for this index
      }));
    }, 1000); // Duration of the animation in milliseconds
  };

  return (
    <>
      <div className="h-screen w-screen bg-white text-black flex justify-center z-10  ">
        <div className=" h-screen w-screen">
          <div className="flex flex-col items-center justify-center p-4 h-screen w-screen">
            {/* First row: 4 images */}
            <div className="flex gap-8 justify-center items-center">
              {skill.slice(0, 4).map(({ ImageUrl }, i) => (
                <div
                  key={i}
                  className="w-16 h-16  overflow-hidden relative"
                  onMouseEnter={() => handleMouseEnter(i)}
                >
                  {ImageUrl && (
                    <div
                      className={`w-full h-full bg-cover bg-center transition-all  border-2  rounded-full shadow-sm ${
                        animatingIndexes[i] ? 'animate-rotate-on-load-360' : ''
                      }`}
                      style={{
                        backgroundImage: `url(${ImageUrl})`,
                      }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          
            {/* Second row: 3 images */}
            <div className="flex gap-8 justify-center items-center mt-8">
              {skill.slice(4, 7).map(({ ImageUrl }, i) => (
                <div
                  key={i}
                  className="w-16 h-16  overflow-hidden relative"
                  onMouseEnter={() => handleMouseEnter(i + 4)}
                >
                  {ImageUrl && (
                    <div
                      className={`w-full h-full bg-cover bg-center transition-all border-2  rounded-full ${
                        animatingIndexes[i + 4] ? 'animate-rotate-on-load-360' : ''
                      }`}
                      style={{
                        backgroundImage: `url(${ImageUrl})`,
                      }}
                    ></div>
                  )}
                </div>
              ))}
            </div>

            {/* Text */}
            <h1 className="text-4xl text-center font-bold mt-8 py-12">
               { `Technologies I've worked with during my projects.`}
            </h1>

            {/* Third row: 3 images */}
            <div className="flex gap-8 justify-center items-center mt-4">
              {skill.slice(7, 10).map(({ ImageUrl }, i) => (
                <div
                  key={i}
                  className="w-16 h-16  overflow-hidden relative"
                  onMouseEnter={() => handleMouseEnter(i + 7)}
                >
                  {ImageUrl && (
                    <div
                      className={`w-full h-full bg-cover bg-center transition-all  border-2  rounded-full ${
                        animatingIndexes[i + 7] ? 'animate-rotate-on-load-360' : ''
                      }`}
                      style={{
                        backgroundImage: `url(${ImageUrl})`,
                      }}
                    ></div>
                  )}
                </div>
              ))}
            </div>

            {/* Fourth row: 4 images */}
            <div className="flex gap-8 justify-center items-center mt-8">
              {skill.slice(10, 14).map(({ ImageUrl }, i) => (
                <div
                  key={i}
                  className="w-16 h-16  overflow-hidden relative"
                  onMouseEnter={() => handleMouseEnter(i + 10)}
                >
                  {ImageUrl && (
                    <div
                      className={`w-full h-full bg-cover bg-center transition-all border-2  rounded-full ${
                        animatingIndexes[i + 10] ? 'animate-rotate-on-load-360' : ''
                      }`}
                      style={{
                        backgroundImage: `url(${ImageUrl})`,
                      }}
                    ></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
