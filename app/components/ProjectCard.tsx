import Image from 'next/image';
import React, { useState, useEffect } from 'react';

type ProjectCardProps = {
  setActiveCard: (index: number) => void;
  setHoveredCard: (index: number | null) => void;
  hoveredCard: number | null;
  selectedProject: number;
  title: string;
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
  image,
  activeCard,
}: ProjectCardProps) => {
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
        className={`scale-95 inline-block justify-center rounded-md border-2 text-center shadow-lg gap-4 duration-300 h-fit w-24 transition-all py-2
        ${
          activeCard === index
            ? 'border-orange-400 bg-[#292929] text-white shadow-lg scale-100'
            : 'border-gray-700 bg-[#1E1E1E] text-gray-300 hover:scale-100'
        }
      `}
        style={{
          opacity: hoveredCard !== null && hoveredCard !== index ? 0.8 : 1,
        }}
        onClick={handleOnClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="overflow-hidden flex justify-center flex-col items-center gap-2">
          <h2 className="text-xs font-bold text-center line-clamp-2 w-28 md:w-full">
            {title}
          </h2>
          <Image
            src={image}
            alt={title}
            height={140}
            width={140}
            className="rounded-sm object-cover w-16 h-16"
          />
        </div>
      </a>
    )
  );
};

export default ProjectCard;
