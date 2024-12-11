import Socials from "../components/Socials";
import { AboutMe } from "../components/AboutMe";
import CharacterScene from "../components/CharacterScene";
import Image from "next/image";

const Hero = () => {
  
  return (
    <div className="h-screen w-screen bg-hero-background bg-cover bg-center bg-no-repeat transform translate-z-[-1px] scale-[2]    ">
      <div className="absolute inset-0 top-10 w-full">
        <div className="flex justify-between ">
        <Socials/>
        <AboutMe/>
        </div>
        <div className="flex justify-center items-center  h-full">
        <CharacterScene/>
        </div>
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
