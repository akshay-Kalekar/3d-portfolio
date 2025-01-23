import React, { useState } from 'react'

const Socials = () => {
    const [showSocials, setShowSocials] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center w-2/12"  onMouseEnter={() => setShowSocials(true)}
            onMouseLeave={() => setShowSocials(false)}>
          <div
            className="text-black text-center font-bold  border-black border-t-8  relative cursor-pointer"
           
          >
            {/* Main text */}
            <div className={`font-bold bg-white/80 px-4 ${showSocials ? 'bg-white/100' : ''} ` }>Connect With Me</div>

            {/* Social links with animation */}
            <div
              className={` top-full left-0 w-full transition-all duration-500 ease-in-out ${
                showSocials ? "opacity-100 translate-y-2" : "opacity-0 translate-y-0"
              } flex flex-col gap-2  rounded-sm shadow-md`}
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