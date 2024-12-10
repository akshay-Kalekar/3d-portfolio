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
                className="text-black text-center font-bold p-4 bg-white/80 hover:bg-white border-black border-t-8 skew-y-12 relative cursor-pointer"
                onClick={() => setShowModal(true)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && setShowModal(true)}
            >
                About Me
            </div>

            {/* Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                    role="dialog"
                    aria-labelledby="modal-title"
                    aria-hidden="false"
                >
                    <div className="bg-white/90 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 p-6 shadow-lg transform scale-95 transition-transform duration-300">
                        {/* Modal Header */}
                        <div className="flex justify-between items-center border-b pb-3 text-center">
                            <h2
                                id="modal-title"
                                className="text-2xl font-bold text-black w-full"
                            >
                                About Me
                            </h2>
                            <button
                                className="text-black text-4xl font-bold cursor-pointer hover:text-red-500"
                                onClick={() => setShowModal(false)}
                                aria-label="Close modal"
                            >
                                ×
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="mt-4">
                            <div className="flex flex-col items-center">
                                {/* Image Section */}
                                <div className="mb-4">
                                    <Image
                                        src="/profilePhoto.jpg"
                                        alt="Akshay Ajay Kalekar"
                                        className="w-32 h-32 rounded-full shadow-black shadow-2xl"
                                        width={128}
                                        height={128}
                                    />
                                </div>

                                {/* About Me Details */}
                                <p className="text-black text-center text-base">
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
                                className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:ring-2 focus:ring-black focus:outline-none"
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
