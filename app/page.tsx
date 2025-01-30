"use client";
import Hero from "./sections/Hero";
import Project from "./sections/Project";
import Skill from "./sections/Skill";
import ContactMe from "./sections/ContactMe";
import Project2 from "./sections/Project2";
import { useMediaQuery } from "react-responsive";
export default function Home() {
  const isNotLaptop = useMediaQuery({ minWidth: 840 });
  return (
   <div className="parallax">
    <Hero/>
    {isNotLaptop  ? <Project2/> :<Project/>}
   <Skill/>
   <ContactMe/>
   </div>
  );
}
