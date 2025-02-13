import React, { useState, useEffect } from "react";

const images = [
  {
    src: "https://images.pexels.com/photos/5211470/pexels-photo-5211470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Student studying",
    text: "Welcome to VRS TECH SCHOOL",
    color: "text-blue-400"
  },
  {
    src: "https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Students in library",
    text: "Empowering Young Minds",
    color: "text-yellow-300"
  },
  {
    src: "https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Student reading",
    text: "Learn, Grow, Succeed",
    color: "text-red-400"
  },
  {
    src: "https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Students in classroom",
    text: "Innovate Your Future",
    color: "text-blue-400"
  },
  {
    src: "https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Books and study materials",
    text: "Building Bright Careers",
    color: "text-green-400"
  }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="home" className="relative w-full mx-auto ">
      <div className="relative overflow-hidden">
        <div className="carousel-inner relative">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === currentIndex ? "block" : "hidden"
              } w-full relative`}
            >
              <img src={image.src} alt={image.alt} className="block w-full" />
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black bg-opacity-50`}
              >
                <h2 className={`text-2xl md:text-6xl font-bold ${image.color}`}>
                  {image.text}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 md:p-5 md:px-7 px-4 left-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 md:p-5 md:px-7 px-4 right-0 transform -translate-y-1/2 p-2 bg-gray-800 text-white rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;
