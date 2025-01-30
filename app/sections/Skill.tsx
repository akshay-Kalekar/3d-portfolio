import React, { useEffect, useRef, useState } from 'react';
import skill from '@/app/Data/skill.json';


const Skill = () => {
  const [animatingIndexes, setAnimatingIndexes] = useState([false,false,false,false,false,false,false,false,false,false,false,false,false,false]); // Object to track each icon's animation state

  const handleMouseEnter = (index:number) => {
    setAnimatingIndexes((prev) => ({
      ...prev,
      [index]: true, 
    }));

   
    setTimeout(() => {
      setAnimatingIndexes((prev) => ({
        ...prev,
        [index]: false,
      }));
    }, 1000); 
  };
    
    const skillRef = useRef(null);
    const [scrollSpeed, setScrollSpeed] = useState(2); 
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setScrollSpeed(2); // Increase scroll speed when in view
          } else {
            setScrollSpeed(2); // Reset scroll speed when out of view
          }
        },
        { threshold: 1 } // Adjust threshold as needed
      );
      const currentElement = skillRef.current;
      if (currentElement) observer.observe(currentElement);
  
      return () => {
        if (currentElement) observer.unobserve(currentElement);
      };
    }, []);
  
    useEffect(() => {
      const handleScroll = () => {
        if (scrollSpeed > 1) {
          window.scrollBy(2, scrollSpeed); 
        }
      };
  
      const interval = setInterval(handleScroll, 10); 
  
      return () => clearInterval(interval);
    }, [scrollSpeed]);
  return (
    <>
      <div ref={skillRef} className="h-screen w-screen bg-black text-white flex justify-center  transform translate-z-[-1px] scale-[2] ">
        <div className=" h-screen w-screen">
          <div className="flex flex-col items-center justify-center p-4 h-screen w-screen">
            {/* 4 images */}
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
          
            {/*  3 images */}
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

        
            <h1 className="text-4xl text-center font-bold mt-8 py-12">
               { `Technologies I've worked with during my projects.`}
            </h1>

            {/* 3 images */}
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

            {/*  4 images */}
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
