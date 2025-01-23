import React, { useState,useEffect } from 'react';
import { DropLines } from '../AnimatedSvg/DropLines';
import data2 from '../Data/project.json';
import ProjectCard from '../components/ProjectCard';
import ActiveProjectCard from '../components/ActiveProjectCard';
import Background from 'three/src/renderers/common/Background.js';

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


 
  return (
    <div id="Project" className="w-screen  z-10 transform translate-z-[0px] h-fit bg-black py-10">
     
      <div className=" top-0 w-screen h-screen">
      <div
  className="w-screen h-screen"
  
>
          <div className="text-center pt-6 text-4xl font-bold   text-white    bg-black">
            Work Experience
          </div>
          <div className=" flex flex-col gap-16 justify-items-center items-center text-white  h-fit mx-auto ">
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
                <div className='w-full flex overflow-auto whitespace-nowrap gap-4 px-4'>

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
    </div>
  );
};

export default Project;