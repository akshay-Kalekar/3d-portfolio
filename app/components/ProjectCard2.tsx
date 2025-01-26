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
      setIsVisible(true);
    }
  }, [visibility]);

  const handleOnClick = () => {
    setActiveCard(index);
  };

  const handleMouseEnter = () => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  return (
    isVisible && (
      <a
        className={`inline-block rounded-lg border-2 text-center shadow-md gap-4 duration-300 transition-all p-2 w-36 h-36 hover:scale-105
          ${
            activeCard === index
            ? 'border-orange-400 bg-[#292929] text-white shadow-lg scale-100'
            : 'border-gray-700 bg-[#1E1E1E] text-gray-300 hover:scale-100'
        }
        `}
        style={{
          transform: hoveredCard === index ? 'scale(1.15)' : 'scale(1)',
        }}
        onClick={handleOnClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="overflow-hidden p-2 flex flex-col items-center">
          <h2 className="text-xs font-bold text-center w-32 line-clamp-1">
            {title}
          </h2>
          <Image
            src={image}
            alt={title}
            height={140}
            width={140}
            className="rounded-sm object-cover w-full h-full mt-2 border border-gray-600 shadow-md"
          />
        </div>
      </a>
    )
  );
};

export default ProjectCard2;
