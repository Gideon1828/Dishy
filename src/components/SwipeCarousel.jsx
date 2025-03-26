import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./SwipeCarousel.css";

const imgs = [
  "/carousel/food_1.jpg",
  "/carousel/food_2.jpg",
  "/carousel/food_3.jpg",
  "/carousel/food_4.jpg",
  "/carousel/food_5.jpg",
];

const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImgIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    }, 3000); // Auto-slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="phone-frame">
        {imgs.map((src, idx) => (
          <motion.img
            key={idx}
            src={src}
            className="carousel-image"
            animate={{ opacity: imgIndex === idx ? 1 : 0, scale: imgIndex === idx ? 1 : 0.94 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            alt={`food-${idx + 1}`}
          />
        ))}
        <div className="carousel-dots">
          {imgs.map((_, idx) => (
            <span key={idx} className={`dot ${imgIndex === idx ? "active" : ""}`}></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SwipeCarousel;
