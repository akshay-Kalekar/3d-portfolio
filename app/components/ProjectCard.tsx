import Image from 'next/image';
import React, { useState, useEffect } from 'react';

type ProjectCardProps = {
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

const ProjectCard = ({
  setActiveCard,
  setHoveredCard,
  hoveredCard,
  visibility,
  index,
  title,
  description,
  image,
  activeCard,

}: ProjectCardProps) => {
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
      className={`inline-block justify-center  rounded-md  border-2 text-center shadow-lg gap-4 duration-300 h-fit w-24 h-30 transition-all   py-1
        ${activeCard === index ? 'border-white bg-white text-black' : 'border-gray-900 to-gray-700/90 bg-gradient-to-r from-gray-800 via-gray-900 text-white'}
      `}
      style={{
        opacity: hoveredCard !== null && hoveredCard != index ? 0.8 : 1,
      }}
      onClick={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className=" overflow-hidden  flex justify-center flex-col items-center gap-2">
        <h2 className="text-xs font-bold  align-middle text-wrap line-clamp-2 text-center w-28 md:w-full">{title}</h2>
        <Image
          src={image}
          alt={title}
          height={140}
          width={140}
          className=" rounded-sm   object-cover w-16 h-16 "
        />
      </div>
    </a>
    )
  );
};

export default ProjectCard;
