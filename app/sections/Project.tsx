import React, { useState,useEffect } from 'react';
import { DropLines } from '../AnimatedSvg/DropLines';
import data2 from '../Data/project.json';
import ProjectCard from '../components/ProjectCard';
import ActiveProjectCard from '../components/ActiveProjectCard';

const Project = () => {
  const [currTop, setCurrTop] = useState(data2.length - 1);
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

  const toggleVisibility = (index, isVisible) => {
    setVisibility((prev) => {
      const newMap = new Map(prev);
      newMap.set(index, isVisible);
      return newMap;
    });
  };

  const handlePrev = () => {
    if (currTop > 0) {
      toggleVisibility(currTop, false);
      setCurrTop((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currTop < data.length - 1) {
      toggleVisibility(currTop + 1, true);
      setCurrTop((prev) => prev + 1);
    }
  };

  return (
    <div id="Project" className="w-screen relative z-10 transform translate-z-[0px] h-fit">
      <DropLines />
      <div className="absolute top-0 w-screen h-screen">
        <div className="w-screen h-screen">
          <div className="text-center pt-6 text-4xl font-bold text-white border-t-[16px] border-black bg-gradient-to-b from-orange-800/40">
            Work Experience
          </div>
          <div className="relative md:grid md:grid-cols-2 justify-items-center text-white gap-4 h-fit mx-auto">
          <ActiveProjectCard
                  selectedProject={1}
                  visibility={true}
                  key={1}
                  index={1}
                  title={data[activeCard].title}
                  description={data[activeCard].description}
                  image={data[activeCard].image}
                  repoLink={data[activeCard].repoLink}
                  hostedLink={data[activeCard].hostedLink}
                />
            {data.map(({ title, description, image, repoLink, hostedLink }, index) => {
              return(
                <ProjectCard
                setHoveredCard={setHoveredCard} // Pass the state updater for hovered card
                hoveredCard={hoveredCard} // Track currently hovered card
                
                setActiveCard={setActiveCard}
                selectedProject={1}
                  visibility={visibility.get(index)}
                  key={index}
                  index={index}
                  title={title}
                  description={description}
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