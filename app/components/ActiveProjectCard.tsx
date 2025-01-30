import Image from 'next/image';
import React, { useState, useEffect } from 'react';

type ActiveProjectCardProps = {
  title: string;
  description: string;
  image: string;
  repoLink: string;
  hostedLink: string;
};

const ActiveProjectCard = ({
  title,
  description,
  image,
  repoLink,
  hostedLink,
}: ActiveProjectCardProps) => {
  const [isExiting, setIsExiting] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentDescription, setCurrentDescription] = useState(description);
  const [currentImage, setCurrentImage] = useState(image);


  useEffect(() => {
    setIsExiting(true);
    const timeout = setTimeout(() => {
      setCurrentTitle(title);
      setCurrentDescription(description);
      setCurrentImage(image);
      setIsExiting(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [title, description, image]);

  return (
    <div
      className={`rounded-lg flex flex-col bg-gradient-to-b border-2 border-gray-700 bg-[#1E1E1E] p-4 text-center gap-4 duration-500 w-5/6 md:w-1/3 lg:w-1/4 xl:w-1/5 transition-all shadow-md ${
        isExiting ? 'animate-rotate-on-load-180' : 'animate-rotate-on-load-180-reverse'
      }`}
    >
      <h2 className="text-2xl font-bold text-orange-400">{currentTitle}</h2>
      <Image
        src={currentImage}
        alt={currentTitle}
        height={400}
        width={400}
        priority
        className="rounded-md shadow-md transition-transform duration-500 mx-auto h-52 w-52 md:w-full md:h-full"
      />
      <p className="text-gray-300 text-left my-2 px-4 text-sm min-h-[3ch] md:min-h-[14ch]">
        {currentDescription}
      </p>
      <div className="flex justify-between text-sm lg:mt-4 gap-4">
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 w-1/2 bg-gradient-to-r from-orange-500 to-yellow-400 text-white rounded-md shadow-lg hover:opacity-80 transition-all duration-300"
        >
          Github
        </a>
        <a
          href={hostedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 w-1/2 bg-gradient-to-r from-green-500 to-teal-400 text-white rounded-md shadow-lg hover:opacity-80 transition-all duration-300"
        >
          Site
        </a>
      </div>
    </div>
  );
};

export default ActiveProjectCard;
