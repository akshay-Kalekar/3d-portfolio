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
      className={` bg-gradient-to-b border-2 bg-black mt-6 p-2 text-center  gap-4 duration-500 w-[50vw] h-[45vh] scale-[1] transition-all  ${
        isExiting ? '  animate-rotate-on-load-180' : 'animate-rotate-on-load-180-reverse'
      }`}
    >

      <div className="relative">
        <h2 className="text-2xl font-bold text-white ">{currentTitle}</h2>
        <Image
          src={currentImage}
          alt={currentTitle}
          height={400}
          width={400}
          className=" p-4 rounded-md shadow-md transform transition-transform duration-500 mx-auto"
        />
      </div>
      <p className="text-gray-300 text-left my-2 text-xs">{currentDescription}</p>
      <div className="flex justify-between text-sm mt-4">
        <a
          href={repoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-slate-400 text-white rounded-md shadow-lg hover:bg-black hover:shadow-white transition-all duration-300"
        >
          Github
        </a>
        <a
          href={hostedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-slate-400 text-white rounded-md shadow-lg hover:bg-black hover:shadow-white transition-all duration-300"
        >
          Site
        </a>
      </div>
    </div>
  );
};

export default ActiveProjectCard;
