import React, { useState,useEffect, useRef } from 'react';
import data from '../Data/project.json';
import ProjectCard2 from '../components/ProjectCard2';
import ActiveProjectCard from '../components/ActiveProjectCard';

const Project2 = () => {
 const [visibility, setVisibility] = useState(new Map());
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
    const currentElement = projectRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
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
    <div ref={projectRef} id="Project" className="w-screen h-screen transform translate-z-[-2px] scale-[3] mb-[100vh] bg-cover bg-center bg-black" >
      <div className=" top-0 w-screen h-screen">
      <div
  className="w-screen h-screen flex flex-col justify-center md:gap-4 lg:gap-12 "
  
>
          <div className="text-center pt-6 text-6xl font-bold   text-white  underline  ">
            Work Experience
          </div>
          <div className=" flex w-full   content-center justify-center  text-white  h-fit  ">
          <div className='flex  flex-col overflow-auto scrollbar-hidden whitespace-nowrap gap-4 px-16 scroll-smooth md:justify-center  '>

{data.slice(0,3).map(({ title, image }, index) => {
  
  return(
    <ProjectCard2
    setHoveredCard={setHoveredCard} // Pass the state updater for hovered card
    hoveredCard={hoveredCard} // Track currently hovered card
    
    setActiveCard={setActiveCard}
    selectedProject={1}
      visibility={visibility.get(index)}
      key={index}
      index={index}
      title={title}
      image={image}
      
      activeCard={activeCard}
      />
    ) 
  })}
  
  </div>
          <ActiveProjectCard
                  
                  key={1}
                  title={data[activeCard].title}
                  description={data[activeCard].largeDes}
                  image={data[activeCard].image}
                  repoLink={data[activeCard].repoLink}
                  hostedLink={data[activeCard].hostedLink}
                />
                <div className=' flex flex-col overflow-auto scrollbar-hidden whitespace-nowrap gap-4 px-16 scroll-smooth md:justify-center items-center  '>

            {data.slice(3,6).map(({ title,  image}, index) => {
              
              return(
                <ProjectCard2
                setHoveredCard={setHoveredCard} // Pass the state updater for hovered card
                hoveredCard={hoveredCard} // Track currently hovered card
                
                setActiveCard={setActiveCard}
                selectedProject={1}
                  visibility={visibility.get(index +3)}
                  key={index +3}
                  index={index +3}
                  title={title}
                  image={image}
                  activeCard={activeCard}
                  />
                ) 
              })}
              
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project2;