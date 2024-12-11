import Image from "next/image";
import { useState, useEffect } from "react";

export const AboutMe = () => {
    const [showModal, setShowModal] = useState(false);

    // Close modal on pressing Escape
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setShowModal(false);
            }
        };

        if (showModal) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [showModal]);

    return (
        <div>
            {/* About Me Button */}
            <div
                className="text-black text-center font-bold px-6 bg-white/80 hover:bg-white border-black border-t-8 skew-y-12 relative cursor-pointer"
                onClick={() => setShowModal(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setShowModal(true)}
            >
                About <br/> Me
            </div>

            {/* Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50  backdrop-blur-md transition-opacity duration-300"
                    role="dialog"
                    aria-labelledby="modal-title"
                    aria-hidden="false"
                >
                    <div className="bg-gradient-to-br from-blue-200/60 via-blue-300/60 to-blue-400/60 rounded-md w-11/12 md:w-1/2 lg:w-1/3 p-6 shadow-lg transform scale-95 transition-transform duration-300">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center border-b border-blue-300 pb-3">
                            <h2
                                id="modal-title"
                                className="text-2xl font-bold text-white w-full text-center"
                            >
                                About Me
                            </h2>
                        </div>

                        {/* Modal Content */}
                        <div className="mt-4">
                            <div className="flex flex-col items-center">
                                {/* Image Section */}
                                <div className="mb-4">
                                    <Image
                                        src="/profilePhoto.jpg"
                                        alt="Akshay Ajay Kalekar"
                                        className="w-32 h-32 rounded-full shadow-xl shadow-blue-300"
                                        width={128}
                                        height={128}
                                    />
                                </div>

                                {/* About Me Details */}
                                <p className="text-white text-center text-base italic">
                                    Hi, I'm Akshay Kalekar. I'm a frontend developer with 4 years
                                    of experience in building websites. I specialize in React.js,
                                    Next.js, and have reasonable knowledge of backend development.
                                    I enjoy creating interactive user interfaces and learning
                                    cutting-edge web technologies.
                                </p>
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="mt-6 flex justify-end">
                            <button
                            
                                className="bg-blue-800 text-blue-100 px-4 py-2 rounded-md hover:bg-blue-600 hover:text-white focus:ring-2 focus:ring-blue-300 focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};