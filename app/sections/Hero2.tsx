import { useEffect, useState } from "react";
import CharacterScene from "../components/CharacterScene";

const Hero2 = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    // Function to get the current time in IST
    const updateTime = () => {
      const indiaTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(indiaTime);
    };

    const interval = setInterval(updateTime, 1000);
    updateTime(); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="h-screen w-screen flex bg-black text-white font-sans">
      {/* Left Panel */}
      <div className="w-1/3 bg-gray-900 flex flex-col justify-between px-8 py-10 shadow-lg">
        <div>
          <h1 className="text-4xl font-bold mb-4 border-b-2 border-gray-700 pb-2">
            Akshay Ajay Kalekar
          </h1>
          <div id="About" className="mb-10">
            <h2 className="text-2xl font-semibold underline mb-2">About Me</h2>
            <p className="text-gray-400 leading-relaxed">
              Proficient React Developer experienced in creating responsive and
              dynamic web applications. Skilled in backend technologies like
              Express.js and Python, with a strong understanding of full-stack
              development.
            </p>
          </div>
          <div id="Education" className="mb-10">
            <h2 className="text-2xl font-semibold underline mb-2">Education</h2>
            <p className="text-gray-400 leading-relaxed">
              I have completed my B.Tech in Computer Science Engineering from
              Vellore Institute of Technology (2021-2025).
            </p>
          </div>
        </div>
        <div id="Socials">
          <h2 className="text-2xl font-semibold underline mb-2">Socials</h2>
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="border border-gray-600 px-4 py-2 text-center rounded-md hover:bg-gray-700 transition"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="border border-gray-600 px-4 py-2 text-center rounded-md hover:bg-gray-700 transition"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Middle Panel */}
      <div className="w-1/3 flex items-center justify-center bg-black">
        <CharacterScene />
      </div>

      {/* Right Panel */}
      <div className="w-1/3 bg-gray-900 flex flex-col justify-between px-8 py-10 shadow-lg">
        <div>
          <div className="flex justify-center gap-6 text-gray-400 mb-10">
            <a
              href="#"
              className="hover:text-white border-b-2 border-transparent hover:border-gray-500 transition"
            >
              Resume
            </a>
            <a
              href="#"
              className="hover:text-white border-b-2 border-transparent hover:border-gray-500 transition"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="hover:text-white border-b-2 border-transparent hover:border-gray-500 transition"
            >
              GitHub
            </a>
          </div>
          <div id="location_time" className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold underline mb-2">
              Location and Time
            </h2>
            <div className="text-lg flex items-center gap-2">
              <span>📍 India</span>
            </div>
            <div
              id="time"
              className="text-3xl font-mono mt-2 text-gray-300"
            >
              🕒 {currentTime || "Loading..."}
            </div>
          </div>
        </div>
        <div id="Coding Profile" className="mt-10">
          <h2 className="text-2xl font-semibold underline mb-2">
            Coding Profile
          </h2>
          <div className="flex flex-col gap-2">
            <a
              href="#"
              className="hover:text-gray-300 transition"
            >
              LeetCode
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition"
            >
              GeeksForGeeks
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition"
            >
              CodeChef
            </a>
          </div>
        </div>
        <div id="Blogs" className="mt-10">
          <h2 className="text-2xl font-semibold underline mb-2">Blog</h2>
          <a
            href="#"
            className="hover:text-gray-300 transition block"
          >
            Scalability
          </a>
          <a
            href="#"
            className="hover:text-gray-300 transition block"
          >
            Designing a Recommendation System for Instagram Friend Suggestions
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
