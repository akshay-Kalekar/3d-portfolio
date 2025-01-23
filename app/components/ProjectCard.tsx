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
      className={`inline-block bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-tr-md rounded-bl-md border-4 text-center shadow-lg gap-4 duration-300 h-fit w-[300px] transition-all rounded-sm px-4 py-2
        ${activeCard === index ? 'border-white' : 'border-gray-900'}
      `}
      style={{
        opacity: hoveredCard !== null && hoveredCard < index ? 0.05 : 1,
      }}
      onClick={handleOnClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative overflow-hidden">
        <h2 className="text-base font-bold text-white">{title}</h2>
        <Image
          src={image}
          alt={title}
          height={120}
          width={120}
          className="p-2 rounded-md shadow-md mx-auto object-cover"
        />
        <p className="whitespace-pre-wrap text-xs pt-2 line-clamp-4   overflow-hidden">
          {description}
        </p>
      </div>
    </a>
    )
  );
};

export default ProjectCard;
