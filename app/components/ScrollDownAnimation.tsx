import React from "react";

const ScrollDownAnimation = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className="h-screen flex items-center justify-center bg-blue-500">
        <button
          onClick={() => scrollToSection("target-section")}
          className="bg-white text-blue-500 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-100"
        >
          Scroll Down
        </button>
      </div>

      <div
        id="target-section"
        className="h-screen flex items-center justify-center bg-green-500"
      >
        <h1 className="text-3xl text-white">You've Reached the Target Section!</h1>
      </div>
    </div>
  );
};

export default ScrollDownAnimation;