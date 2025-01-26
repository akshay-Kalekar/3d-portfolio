import React, { useState,useEffect } from 'react';
import { DropLines } from '../AnimatedSvg/DropLines';
import data2 from '../Data/project.json';
import ProjectCard2 from '../components/ProjectCard2';
import ActiveProjectCard from '../components/ActiveProjectCard';

const Project2 = () => {
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
    <div id="Project" className="w-screen  z-10 transform translate-z-[0px] h-fit bg-cover bg-center bg-black" >
     
      <div className=" top-0 w-screen h-screen">
      <div
  className="w-screen h-screen flex flex-col justify-center md:gap-4 lg:gap-12 "
  
>
          <div className="text-center pt-6 text-6xl font-bold   text-white  underline  ">
            Work Experience
          </div>
          <div className=" flex w-full   content-center justify-center  text-white  h-fit  ">
          <div className='flex  flex-col overflow-auto scrollbar-hidden whitespace-nowrap gap-4 px-16 scroll-smooth md:justify-center  '>

{data.slice(0,3).map(({ title, description, image, repoLink, hostedLink }, index) => {
  
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
      description={description}
      image={image}
      repoLink={repoLink}
      hostedLink={hostedLink}
      activeCard={activeCard}
      />
    ) 
  })}
  
  </div>
          <ActiveProjectCard
                  selectedProject={1}
                  visibility={true}
                  key={1}
                  index={1}
                  title={data[activeCard].title}
                  description={data[activeCard].largeDes}
                  image={data[activeCard].image}
                  repoLink={data[activeCard].repoLink}
                  hostedLink={data[activeCard].hostedLink}
                />
                <div className=' flex flex-col overflow-auto scrollbar-hidden whitespace-nowrap gap-4 px-16 scroll-smooth md:justify-center items-center  '>

            {data.slice(3,6).map(({ title, description, image, repoLink, hostedLink }, index) => {
              
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

export default Project2;