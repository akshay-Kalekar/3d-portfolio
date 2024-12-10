import Socials from "../components/Socials";
import { AboutMe } from "../components/AboutMe";
import CharacterScene from "../components/CharacterScene";
import ScrollDownAnimation from "../components/ScrollDownAnimation";

const Hero = () => {
  
  return (
    <div className="h-screen w-screen bg-hero-background bg-cover bg-center bg-no-repeat relative">
      <div className="absolute inset-0 top-10 w-full">
        <div className="flex justify-between items-center">
        <Socials/>
        <AboutMe/>
        </div>
        <div className="flex justify-center items-center  h-full">
        <CharacterScene/>
        </div>
        <div>
            <ScrollDownAnimation/>
        </div>

        </div>
      </div>
  );
};

export default Hero;
