import Socials from "../components/Socials";
import { AboutMe } from "../components/AboutMe";
import CharacterScene from "../components/CharacterScene";
import Image from "next/image";

const Hero = () => {

  return (
    <div className="h-screen w-screen  mb-[20vh]  bg-cover bg-center  transform translate-z-[-1px] scale-[2] bg-white " >
      <div className=" inset-0 w-full pt-8 lg:px-52">
        <div className="text-5xl sm:text-4xl  lg:text-4xl w-full text-center italic font-bold text-black p-2">Akshay Ajay Kalekar</div>
        <div className="flex  justify-between top-0  text-white font-bold text-center w-full ">
          <div className="flex gap-2 w-full justify-between lg:justify-center px-10 pt-4">
            <div className="border-2 rounded-2xl px-2 bg-black text-white hover:bg-white hover:border-black hover:text-black">Resume</div>
            <div className="border-2 rounded-2xl px-2 bg-black text-white">LinkedIn</div>
            <div className="border-2 rounded-2xl px-2 bg-black text-white">Github</div>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-between w-full h-[50vh] gap-14 ">
          <div className="  text-[3rem]  sm:text-[3.75rem] leading-[3rem] ] sm:leading-[3rem] text-black font-bold  text-left py-4 w-1/2 pl-4">Let's Build <br className="hidden lg:block" /> Impactful Website</div>
          <div className="flex justify-center items-center  row-span-2 ">
            <CharacterScene />
          </div>
          <div className=" text-lg sm:text-xl w-[30ch] lg:w-[50ch] text-white text-left mx-4 px-4 sm:p-4 sm:w-[80ch] rounded-lg bg-black/40  italic ">
            <b>Proficient React Developer </b> experience in creating responsive and dynamic web applications. <br />Skilled in backend technologies like Express.js and Python, with a strong understanding of full-stack development.</div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
