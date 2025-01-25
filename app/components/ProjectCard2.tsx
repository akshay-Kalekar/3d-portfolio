import Image from 'next/image';
import React, { useState, useEffect } from 'react';

type ProjectCard2Props = {
  setActiveCard: (index: number) => void;
  setHoveredCard: (index: number | null) => void; // Track hovered card
  hoveredCard: number | null; // Currently hovered card
  selectedProject: number;
  title: string;
  description: string;
  image: string;
  visibility: boolean;
  index: number;
  activeCard: number;
};

const ProjectCard2 = ({
  setActiveCard,
  setHoveredCard,
  hoveredCard,
  visibility,
  index,
  title,
  description,
  image,
  activeCard,

}: ProjectCard2Props) => {
  const [isVisible, setIsVisible] = useState(visibility);

  useEffect(() => {
    if (visibility) {
      setIsVisible(true); // Show the card when visibility is true
    }
  }, [visibility]);

  const handleOnClick = () => {
    setActiveCard(index);
  };

  const handleMouseEnter = () => {
    setHoveredCard(index); // Set the hovered card index
  };

  const handleMouseLeave = () => {
    setHoveredCard(null); // Clear the hovered card
  };
  return (
    isVisible && (
      <a
      className={`inline-block   rounded-md  border-2 text-center shadow-lg gap-4 duration-300 h-36 w-36 transition-all   p-2 scale-90 hover:scale-1
        ${activeCard === index ? 'border-white  bg-gradient-to-r from-gray-300 via-slate-200 to-gray-100/90 text-black' : 'border-gray-900 to-gray-700/90 bg-gradient-to-r from-gray-800 via-gray-900 text-white'}
      `}
      style={{
        // scale: hoveredCard !== null && hoveredCard != index ? 1 : 1.2,
        scale: hoveredCard == index && 1.2,
      }}
      onClick={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className=" overflow-hidden p-2">
        <h2 className="text-xs font-bold  align-middle text-wrap text-center w-48 md:w-full line-clamp-1">{title}</h2>
        <Image
          src={image}
          alt={title}
          height={140}
          width={240}
          className=" rounded-sm   object-cover w-full h-full mt-4 border-2 border-black  shadow-lg"
        />
      </div>
    </a>
    )
  );
};

export default ProjectCard2;
