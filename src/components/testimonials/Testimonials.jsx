import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    text: "Canatics marketing ask deep contribution contribution. Cross-pollination fit beforehand just baseline sop synchronise go. Seems pain clean meaningful monday knowledge teeth have pretend. Ipsum.",
    name: "Resky Fernanda",
    role: "Product Designer at Tokopedia",
  },
  {
    text: "This program provided invaluable career guidance and helped me grow both professionally and personally.",
    name: "John Doe",
    role: "Software Engineer at Google",
  },
  {
    text: "The mentorship journey has been incredibly impactful, offering real-world insights from experienced mentors.",
    name: "Jane Smith",
    role: "UI/UX Designer at Meta",
  },
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);

  return (
    <section className="bg-white py-12">
      {/* Add this at the very top of the section */}
      <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-gray-900 relative inline-block">
              Testimonials
              <div className="w-full h-1 bg-red-700 mt-1"></div>
          </h2>
      </div>

      {/* Your existing left and right content starts here */}
      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center">
          {/* All your existing content here — unchanged */}
      </div>

      <div className="container mx-auto max-w-7xl px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center">
        {/* Left Section - Text Block */}
        <div className="md:w-1/2 text-left space-y-4 mb-8 md:mb-0">
          <FaQuoteLeft className="text-5xl text-red-700" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 leading-tight">
            What our<br />students have<br />to say
          </h2>
          <p className="text-gray-600 text-sm">
            More than 3000 students have been helped by,<br />Mentor-Mentee Program.
          </p>
        </div>

        {/* Right Section - Carousel */}
        <div className="md:w-1/2 relative">
          <div className="bg-red-800 text-white rounded-xl shadow-lg h-[250px] flex flex-col justify-center items-center text-center p-6 relative">
            {/* Fixed "What they say" - Top Left */}
            <p className="absolute top-4 left-4 text-black font-semibold text-xs">What they say</p>

            {/* Dots Indicator - Top Right */}
            <div className="absolute top-3 right-3 flex space-x-1">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-gray-300" : "bg-gray-500"}`}
                />
              ))}
            </div>

            {/* Testimonial Content - Centered */}
            <div className="w-full max-w-[90%] md:max-w-[80%] mx-auto">
              <p className="text-sm md:text-base leading-relaxed text-white mb-4">
                {testimonials[currentIndex].text}
              </p>
            </div>

            {/* Fixed Author Info - Bottom Left 30% */}
            <div className="absolute bottom-4 left-6 w-[30%] text-left">
              <p className="font-bold text-sm">{testimonials[currentIndex].name}</p>
              <p className="text-xs">{testimonials[currentIndex].role}</p>
            </div>

            {/* Navigation - Bottom Right */}
            <div className="absolute bottom-3 right-3 flex space-x-2">
              <button
                onClick={goToPrevious}
                className="w-8 h-8 flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-red-700 transition"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={goToNext}
                className="w-8 h-8 flex items-center justify-center border border-white rounded-full text-white hover:bg-white hover:text-red-700 transition"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;