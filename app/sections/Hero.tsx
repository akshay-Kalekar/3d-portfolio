import CharacterScene from "../components/CharacterScene";
import data from "../Data/socials.json"
import Slider from "../components/Slider";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
  
  const heroRef = useRef(null);
  const [scrollSpeed, setScrollSpeed] = useState(2); // Default speed

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScrollSpeed(2); // Increase scroll speed when in view
        } else {
          setScrollSpeed(2); // Reset scroll speed when out of view
        }
      },
      { threshold: 1 } // Adjust threshold as needed
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollSpeed > 1) {
        window.scrollBy(2, scrollSpeed); // Increase scroll movement
      }
    };

    const interval = setInterval(handleScroll, 10); // Adjust timing for smoothness

    return () => clearInterval(interval);
  }, [scrollSpeed]);
  const paragraphs = [
    <div key={0}>
      I’m <b className="text-orange-400">Akshay Ajay Kalekar</b>, a passionate{" "}
      <b className="text-orange-400">React Developer</b> with a knack for
      building pixel-perfect, responsive, and high-performing web applications.
    </div>,
    <div key={1}>
      Since my first year in college, I’ve been immersed in front-end and
      full-stack development, mastering{" "}
      <b className="text-orange-400">HTML, CSS, JavaScript, React, Next.js, Tailwind CSS,</b> and more.
    </div>,
    <div key={2}>
      Beyond development, I bring strong <b className="text-orange-400">problem-solving skills</b>, a deep
      understanding of <b className="text-orange-400">data structures and algorithms</b>, and hands-on
      experience from <b className="text-orange-400">hackathons and internships</b>.
    </div>,
    <div key={3}>
      I secured a <b className="text-orange-400">Top 10 rank at Innerve 7.0</b> and{" "}
      <b className="text-orange-400">3rd place in Hack the Crisis 3.0</b>, showcasing my ability to solve
      real-world problems under pressure.
    </div>,
    <div key={4}>
      I’ve interned at <b className="text-orange-400">GryNow</b>, where I optimized front-end performance,
      automated database operations, and improved user engagement.
    </div>,
    <div key={5}>
      Whether it's architecting a scalable system, integrating real-time features,
      or ensuring seamless UX, I have the confidence to bring any web design to life.
    </div>,
    <div key={6}>
      <b className="text-orange-400">Let’s connect and build something impactful!</b>
    </div>,
  ];



  return (
    <div ref={heroRef} className="h-screen w-screen bg-cover bg-center  transform translate-z-[-3px] scale-[4] bg-black mb-[200vh]" >
      <div className=" flex flex-col w-full h-screen pt-8 lg:px-52">
        <div className="h-1/5">
          <div className="text-2xl sm:text-4xl  lg:text-4xl w-full text-center italic font-bold text-white p-2 underline">Akshay Ajay Kalekar</div>
          <div className="flex  justify-between top-0  text-white font-bold text-center w-full ">
            <div className="flex w-full justify-between flex-wrap lg:justify-center px-10 pt-4 text-xs md:text-base">

              {
                data.map((item, index) => (
                  <a key={index} href={item.link} target="_blank"
                    className=" border-l-2 border-white relative inline-block  px-4 py-2 bg-black text-white overflow-hidden group transition-all duration-300 hover:text-black hover:underline"
                  >
                    <span className="relative z-10 ">{item.title}</span>
                    <span className="absolute inset-0 bg-white border-2   scale-x-0 origin-left transform transition-transform duration-300 group-hover:scale-x-105 z-0 " />
                  </a>
                ))
              }
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 justify-between w-full h-3/5 md:gap-6 lg:gap-8 py-8 pl-4 ">
          <div className="  text-[3rem]  sm:text-[3.75rem] leading-[3rem] ] sm:leading-[3rem] text-white font-bold  text-left py-4 w-1/2 pl-4">Let's Build <br className="hidden lg:block" /><span className=" text-orange-400">Impactful</span>  Website</div>
          <div className="flex justify-center items-center  row-span-2 ">
            <CharacterScene />
          </div>
        <Slider paragraphs={paragraphs} />

        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Hero;
