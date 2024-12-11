import Image from 'next/image'
import React from 'react'

type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  repoLink: string;
  hostedLink: string;
};
const ProjectCard = ({title, description, image, repoLink,hostedLink}:ProjectCardProps) => {
  return (
    <div className="bg-gradient-to-r from-gray-800/30 via-gray-900 to-black/30 rounded-tr-md rounded-bl-md border-4    border-orange-500 p-6 text-center shadow-lg  gap-4 transform scale-75 hover:scale-[.85] transition-transform duration-300 ">
    <div className="relative">
      <Image 
        src={image} 
        alt={title} 
        height={200} 
        width={200} 
        className="border-4 border-yellow-400 rounded-md shadow-md transform hover:scale-110 transition-transform duration-300 mx-auto"
      />
    </div>
    <h2 className="text-xl font-bold text-white mt-4">{title}</h2>
    <p className="text-xs text-gray-300 text-left my-2">{description}</p>
    <div className="flex justify-between text-sm mt-4">
      <a 
        href={repoLink} 
        target='_blank'
        className="px-4 py-2 bg-slate-400 text-white rounded-md shadow-lg hover:bg-black hover:shadow-white transition-all duration-300"
        >
        Github
      </a>
      <a 
        href={hostedLink} 
        target='_blank'
        className="px-4 py-2 bg-slate-400 text-white rounded-md shadow-lg hover:bg-black hover:shadow-white transition-all duration-300"
      >
        Site
      </a>
    </div>
  </div>
  
  )
}

export default ProjectCard