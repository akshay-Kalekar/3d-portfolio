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
    }, 1000); // Match this to the animation duration

    return () => clearTimeout(timeout); // Cleanup timeout on unmount
  }, [title, description, image]);

  return (
    <div
      className={`absolute bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-tr-md rounded-bl-md border-4 border-orange-500 p-6 text-center shadow-lg gap-4 duration-500 w-[80vw] h-[80vh] scale-[.65] transition-all rounded-sm -top-[60px] left-14 ${
        isExiting ? '  animate-rotate-on-load-180' : 'animate-rotate-on-load-180-reverse'
      }`}
    >

      <div className="relative">
        <h2 className="text-2xl font-bold text-white mt-4">{currentTitle}</h2>
        <Image
          src={currentImage}
          alt={currentTitle}
          height={400}
          width={400}
          className="border-4 border-yellow-400 rounded-md shadow-md transform transition-transform duration-500 mx-auto"
        />
      </div>
      <p className="text-gray-300 text-left my-2 text-lg">{currentDescription}</p>
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
