import React from 'react';

const ContactMe = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-4xl w-full p-4">
        <div className="bg-white text-gray-900 text-xl rounded-lg p-6 mb-10 shadow-md">
          <p>
            Currently, I am actively seeking opportunities to kickstart my career at a startup as a frontend-focused full-stack developer. Please let me know if you have a role where I can contribute and grow!
          </p>
        </div>
        <div className="bg-gray-100 shadow-lg rounded-lg p-10">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">
            Let’s Get in Touch!
          </h1>
          <p className="text-gray-600 text-center mb-6">
            Have a question, feedback, or opportunity? Drop me a message, and I’ll get back to you as soon as possible.
          </p>
          <form
            action="https://formspree.io/f/xyzkywdp"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition duration-300"
                placeholder="Your Full Name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition duration-300"
                placeholder="Your Email Address"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition duration-300"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white rounded-full shadow-md hover:from-gray-700 hover:to-gray-800 transition duration-300"
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
