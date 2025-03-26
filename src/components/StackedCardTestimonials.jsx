import React, { useState, useEffect } from "react";
import "./StackedCardTestimonials.css";

const testimonials = [
  {
    quote:
      "The recipes on this website are really helpful! The ingredient-based search feature makes cooking more practical and enjoyable.",
    name: "Agatha Ita",
    role: "Homemaker",
  },
  {
    quote:
      "This Dishy recipe website is top-notch! Finding recipes with the ingredients I have is so easy...",
    name: "Ana Soviyana",
    role: "Homemaker",
  },
  {
    quote:
      "Dishy has made my meal planning effortless! Dishy suggestions are always spot-on.",
    name: "David Carter",
    role: "Chef",
  },
];

const StackedCardTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
    <div className="testimonial-section">
      
      <h2 className="testimonial-title">What our customers think</h2>

      <div className="progress-bar">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`progress-dot ${
              index === currentIndex ? "active" : ""
            }`}
          ></div>
        ))}
      </div>
      <div className="testimonial-container">  
      <div className="testimonial-card">
        <p className="testimonial-quote">
          <em>"{testimonials[currentIndex].quote}"</em>
        </p>
        <p className="testimonial-author">
          <strong>{testimonials[currentIndex].name}</strong>
        </p>
        <p className="testimonial-role">{testimonials[currentIndex].role}</p>
      </div>
      </div>
    </div>

    
    <div className="space"></div>
    <div className="separator"></div>
    </div>
  );
};

export default StackedCardTestimonials;
