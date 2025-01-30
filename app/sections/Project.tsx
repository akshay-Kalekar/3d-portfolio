import React, { useState,useEffect, useRef } from 'react';
import { DropLines } from '../AnimatedSvg/DropLines';
import data2 from '../Data/project.json';
import ProjectCard from '../components/ProjectCard';
import ActiveProjectCard from '../components/ActiveProjectCard';
import Background from 'three/src/renderers/common/Background.js';
import { useMediaQuery } from 'react-responsive';

const Project = () => {
 const [visibility, setVisibility] = useState(new Map());
  const [data ,setData] = useState(data2)
  const [activeCard ,setActiveCard] = useState(0)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  useEffect(() => {
    const initialMap = new Map();
    data.forEach((_, index) => {
      initialMap.set(index, true);
    });
    setVisibility(initialMap);
  }, []);
    
    const projectRef = useRef(null);
    const [scrollSpeed, setScrollSpeed] = useState(2); // Default speed
  
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
  
      if (projectRef.current) observer.observe(projectRef.current);
  
      return () => {
        if (projectRef.current) observer.unobserve(projectRef.current);
      };
    }, []);
  
    useEffect(() => {
      const handleScroll = () => {
        if (scrollSpeed > 1) {
          window.scrollBy(2, scrollSpeed); // Increase scroll movement
        }
      };
  
      const interval = setInterval(handleScroll, 10); // Adjust timing for smoothness
  
      return () => clearInterval(interval);
    }, [scrollSpeed]);

  return (
    <div ref={projectRef} id="Project" className="w-screen  h-screen transform translate-z-[-2px] scale-[3] mb-[100vh]   bg-black">
     
   
      <div
  className="w-screen h-screen flex flex-col gap-8 py-4"
  
>
          <div className="text-center text-4xl font-bold   text-white    bg-black">
            Work Experience
          </div>
          <div className=" flex flex-col gap-8 justify-items-center items-center text-white  h-fit  ">
          <ActiveProjectCard
                  selectedProject={1}
                  visibility={true}
                  key={1}
                  index={1}
                  title={data[activeCard].title}
                  description={ data[activeCard].smallDes}
                  image={data[activeCard].image}
                  repoLink={data[activeCard].repoLink}
                  hostedLink={data[activeCard].hostedLink}
                />
                <div className='w-full flex overflow-auto scrollbar-hidden whitespace-nowrap gap-4 px-16 scroll-smooth md:justify-center  '>

            {data.map(({ title,image, repoLink, hostedLink }, index) => {
              
              return(
                <ProjectCard
                setHoveredCard={setHoveredCard} 
                hoveredCard={hoveredCard} 
                
                setActiveCard={setActiveCard}
                selectedProject={1}
                  visibility={visibility.get(index)}
                  key={index}
                  index={index}
                  title={title}
                  image={image}
                  repoLink={repoLink}
                  hostedLink={hostedLink}
                  activeCard={activeCard}
                  />
                ) 
              })}
              
              </div>
          </div>
        </div>
      </div>
  );
};

export default Project;