"use client";
import { useMediaQuery } from "react-responsive";
import Hero from "./sections/Hero";
import Hero2 from "./sections/Hero2"
import Project from "./sections/Project";
import Skill from "./sections/Skill";
import ContactMe from "./sections/ContactMe";
import Project2 from "./sections/Project2";
export default function Home() {
  const isSmallMobile = useMediaQuery({ maxWidth: 450 }); // `md` breakpoint
  const isMobile = useMediaQuery({ maxWidth: 767 }); // `md` breakpoint
  const isTablet = useMediaQuery({ minWidth: 768}); // Between `md` and `lg`
  
  return (
   <div className="parallax">
    <Hero/>
   {isTablet ? <Project2/> :<Project/>}
   <Skill/>
   <ContactMe/>
   </div>
  );
}
