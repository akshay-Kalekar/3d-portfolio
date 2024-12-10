import React, { useState } from 'react'

const Socials = () => {
    const [showSocials, setShowSocials] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center w-2/12 gap-4">
          <div
            className="text-black text-center font-bold p-4 bg-white/80 hover:bg-white border-black border-t-8 -skew-y-12 relative cursor-pointer"
            onMouseEnter={() => setShowSocials(true)}
            onMouseLeave={() => setShowSocials(false)}
          >
            {/* Main text */}
            <div className="font-bold">Connect With Me</div>

            {/* Social links with animation */}
            <div
              className={`absolute top-full left-0 w-full transition-all duration-500 ease-in-out ${
                showSocials ? "opacity-100 translate-y-2" : "opacity-0 translate-y-0"
              } flex flex-col gap-4  rounded-sm shadow-md`}
            >
              <div className="bg-white  rounded-sm px-4 hover:bg-black hover:text-white">
                GitHub
              </div>
              <div className="bg-white rounded-sm px-4  hover:bg-black hover:text-white">
                LinkedIn
              </div>
            </div>
          </div>
        </div>
  )
}

export default Socials