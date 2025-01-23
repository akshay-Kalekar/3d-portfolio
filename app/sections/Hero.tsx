import Socials from "../components/Socials";
import { AboutMe } from "../components/AboutMe";
import CharacterScene from "../components/CharacterScene";
import Image from "next/image";

const Hero = () => {
  
  return (
    <div className="h-screen w-screen  bg-cover bg-center  transform translate-z-[-1px] scale-[2] bg-white   " >
      <div className="absolute inset-0 w-full pt-8">
        <div className="text-5xl sm:text-4xl w-full text-center italic font-bold text-black p-2">Akshay Ajay Kalekar</div>
      <div className="flex  justify-between top-0  text-white font-bold text-center w-full "> 
        <div className="flex gap-2 w-full justify-between px-10 pt-4">
          <div className="border-2 rounded-2xl px-2 bg-black text-white">Resume</div>
          <div className="border-2 rounded-2xl px-2 bg-black text-white">LinkedIn</div>
          <div className="border-2 rounded-2xl px-2 bg-black text-white">Github</div>
        </div>
      </div>
        <div className="flex justify-between ">
        </div>
        <div className="flex justify-center items-center  h-full  ml-20 sm:ml-40">
        <CharacterScene/>
        </div>
      <div className="absolute top-64 text-[3rem] sm:text-[5rem] leading-[3rem] sm:leading-[4.5rem] text-black font-bold  text-left py-4 w-1/2 pl-4">{`Let's Build Impactful Website`}</div>
      <div className="absolute bottom-0 xs:bottom-20  text-lg text-white text-left px-2 sm:p-4 w-full bg-black/40  italic px-4">
      <b>Proficient React Developer </b> experience in creating responsive and dynamic web applications. Skilled in backend technologies like Express.js and Python, with a strong understanding of full-stack development.</div>
        <div className="absolute bottom-10 w-full flex justify-center">
          <a className="rounded-full shadow-2xl shadow-background p-2 animate-bounce" href="#Project">
          <Image src="move-down.svg" alt="Move Down" width={30} height={30} />
          </a>
        </div>
        </div>
      </div>
  );
};

export default Hero;
