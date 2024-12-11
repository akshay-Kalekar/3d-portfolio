import React from 'react'
import { DropLines } from '../AnimatedSvg/DropLines'
import data from '../Data/project.json'
import ProjectCard from '../components/ProjectCard'
const Project = () => {
  return (
    <div id="Project" className='w-screen relative z-10 tranform translate-z-[0px] h-fit'>
      
        <DropLines/>
        <DropLines/>
        <DropLines/>
        <div className='absolute top-0'>
          <div className='w-screen h-fit '>
          <div className="text-center py-12 text-4xl font-bold text-white border-t-[16px] border-black bg-gradient-to-b from-orange-800/40 ">  
             Work Experinece
          </div>
          <div className='grid   md:grid-cols-2 justify-items-center text-white gap-4 h-fit'>
            {data.map(({title,description,image,repoLink,hostedLink},index)=>{
              return(
                <ProjectCard key={index} title={title} description={description} image={image} repoLink={repoLink} hostedLink={hostedLink} />
              )
            })}
          
          </div>
        </div>
          </div>
       
    </div>
  )
}

export default Project