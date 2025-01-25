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
  console.log(description)
  const [isExiting, setIsExiting] = useState(false);
  const [currentTitle, setCurrentTitle] = useState(title);
  const [currentDescription, setCurrentDescription] = useState(description);
  const [currentImage, setCurrentImage] = useState(image);
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false); // Image loaded
  };
  
  useEffect(() => {
    // Trigger exit animation
    setIsExiting(true);
    const timeout = setTimeout(() => {
      // Update content after the exit animation completes
      setCurrentTitle(title);
      setCurrentDescription(description);
      setCurrentImage(image);
      setIsExiting(false); // Trigger enter animation
    }, 500); // Match this to the animation duration

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [title, description, image]);
  return (
    <div
      className={`flex flex-col bg-gradient-to-b border-2 bg-black p-2 text-center  gap-4 duration-500  w-4/6  md:w-/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6  transition-all  ${
        isExiting ? '  animate-rotate-on-load-180' : 'animate-rotate-on-load-180-reverse'
      }`}
    > 
        <h2 className="text-2xl font-bold text-white ">{currentTitle}</h2>
        <Image
          src={currentImage}
          alt={currentTitle}
          height={400}
          width={400}
          priority //image preloads

          className="  rounded-md shadow-md transform transition-transform duration-500 mx-auto h-52 w-52 md:w-full md:h-full"
          onLoadingComplete={handleImageLoad}
        />
      <p className="text-gray-300 text-left my-2 px-4 text-sm min-h-[3ch] md:min-h-[14ch]">{currentDescription}</p>
      <div className="flex justify-between text-sm lg:mt-4 gap-4">
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 w-1/2 bg-slate-400 text-white rounded-md shadow-lg hover:bg-black hover:shadow-white transition-all duration-300"
        >
          Github
        </a>
        <a
          href={hostedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 w-1/2 bg-slate-400 text-white rounded-md shadow-lg hover:bg-black hover:shadow-white transition-all duration-300"
        >
          Site
        </a>
      </div>
    </div>
  );
};

export default ActiveProjectCard;
