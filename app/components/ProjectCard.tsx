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
  repoLink: string;
  hostedLink: string;
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
  repoLink,
  hostedLink,
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
      <div
        className={`absolute bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-tr-md rounded-bl-md border-4 p-6 text-center shadow-lg gap-4 duration-300 w-[40vw] h-[40vh] scale-75 top-[28rem] hover:top-[27rem]   transition-all rounded-sm
          ${activeCard === index ? 'border-red-300 ' : 'border-orange-500'}
          ${hoveredCard !== null && hoveredCard < index ? 'opacity-5' : 'opacity-100'}
       
        `}
        style={{
          left: `${2 + index * 2}rem`,
          transform: `scale(0.55)`,
        }}
        onClick={handleOnClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative overflow-hidden">
          <h2 className="text-2xl font-bold text-white mt-4">{title}</h2>
          <Image
            src={image}
            alt={title}
            height={100}
            width={200}
            className="border-4 border-yellow-400 rounded-md shadow-md transform transition-transform duration-300 mx-auto overflow-hidden"
          />
          <p className="line-clamp-4 text-left pt-2">{description}</p>
        </div>
      </div>
    )
  );
};

export default ProjectCard;
