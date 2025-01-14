"use client";
import Hero from "./sections/Hero";
import Project from "./sections/Project";
import Skill from "./sections/Skill";
export default function Home() {
  return (
   <div className="parallax">
   <Hero />
   <Project/>
   <Skill/>
   </div>
  );
}
