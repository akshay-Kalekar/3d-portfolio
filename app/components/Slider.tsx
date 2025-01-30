import { useState } from "react";
interface SliderProps{
  paragraphs : JSX.Element[] ,
}
export default function Slider ({ paragraphs }:SliderProps ) {
  const [index, setIndex] = useState(0);
  const totalSlides = paragraphs.length;

  let touchStartX = 0;

  const handleSwipeStart = (e:React.TouchEvent<HTMLDivElement>) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleSwipeEnd = (e:React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      handleNext();
    } else if (touchEndX - touchStartX > 50) {
      handlePrev();
    }
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const handlePrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const handleDotClick = (dotIndex:number) => {
    setIndex(dotIndex);
  };

  return (
    <div
      className="flex flex-col h-full w-full "
      onTouchStart={handleSwipeStart}
      onTouchEnd={handleSwipeEnd}
    >
      {/* swipe animation */}
      <div
        className={`flex h-full justify-between  transition-transform duration-500`}
        
      >
        <div className="flex-1 h-full w-[28ch] sm:w-[32ch] py-4 px-2 text-sm sm:text-lg md:text-xl lg:text-base text-white text-left bg-black/70 rounded-2xl shadow-md">
          {paragraphs[index]}
        </div>
      </div>

      {/*slide*/}
      <div className="flex gap-2 h-full md:mt-4 px-2">
        {paragraphs.map((_, dotIndex) => (
          <button
            key={dotIndex}
            onClick={() => handleDotClick(dotIndex)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              dotIndex === index
                ? "bg-orange-500 scale-110"
                : "bg-gray-400 hover:bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
