import React, { useEffect, useRef, useState } from 'react';

const ContactMe = () => {

  const contactRef = useRef(null);
  const [scrollSpeed, setScrollSpeed] = useState(0.5); // Default speed

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setScrollSpeed(0.5);
        } else {
          setScrollSpeed(0.5);
        }
      },
      { threshold: 0.4 }
    );
    const currentElement = contactRef.current;
    if (currentElement) observer.observe(currentElement);

    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollSpeed > 1) {
        window.scrollBy(0.5, scrollSpeed); // Increase scroll movement
      }
    };

    const interval = setInterval(handleScroll, 2); // Adjust timing for smoothness

    return () => clearInterval(interval);
  }, [scrollSpeed]);
  return (
    <div ref={contactRef} className="bg-black min-h-screen flex items-center justify-center px-4 py-12 transform translate-z-[0px] ">
      <div className="max-w-4xl w-full">

        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-white mb-4">
            {` Let’s `}<span className="text-orange-400">Connect</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Have a question or an opportunity in mind? Reach out to start the conversation!
          </p>
        </div>


        <div className="bg-black border border-white rounded-lg p-8 shadow-lg">
          <form
            action="https://formspree.io/f/xyzkywdp"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-black text-white border border-white rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-orange-400 focus:border-white transition duration-300"
                placeholder="Your Full Name"
              />
            </div>


            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-black text-white border border-white rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-orange-400 focus:border-white transition duration-300"
                placeholder="Your Email Address"
              />
            </div>


            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-black text-white border border-white rounded-lg placeholder-gray-500 focus:ring-2 focus:ring-orange-400 focus:border-white transition duration-300"
                placeholder="Type your message here..."
              ></textarea>
            </div>


            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-orange-400 text-black font-bold rounded-full shadow-md hover:bg-orange-500 hover:scale-105 transition-transform duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
