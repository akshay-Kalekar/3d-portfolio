"use client";
import { useMediaQuery } from "react-responsive";
import Hero from "./sections/Hero";
import Hero2 from "./sections/Hero2"
import Project from "./sections/Project";
import Skill from "./sections/Skill";
import ContactMe from "./sections/ContactMe";
export default function Home() {
  const isSmallMobile = useMediaQuery({ maxWidth: 450 }); // `md` breakpoint
  const isMobile = useMediaQuery({ maxWidth: 767 }); // `md` breakpoint
  const isTablet = useMediaQuery({ minWidth: 768}); // Between `md` and `lg`
  return (
   <div className="parallax">
    {
      isTablet ?  <Hero2/> :<Hero/>
    }
   <Project/>

   <Skill/>
   <ContactMe/>
   </div>
  );
}
