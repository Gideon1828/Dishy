import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchDish.css";

const images = [
  "/carousel/food_1.jpg",
  "/carousel/food_2.jpg",
  "/carousel/food_3.jpg",
  "/carousel/food_4.jpg",
  "/carousel/food_5.jpg",
];

const API_KEY = "7eb495e634104e24aa445a2a2d7bf89c";

const SearchDish = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [dish, setDish] = useState("");
  const [cuisine, setCuisine] = useState(""); 
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSearch = async () => {
    if (cuisine === "") {
      alert("Please select a cuisine before searching!");
      return;
    }

    let url = `https://api.spoonacular.com/recipes/complexSearch?query=${dish}&number=10&apiKey=${API_KEY}`;

    if (cuisine !== "Any") {
      url += `&cuisine=${cuisine}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.results.length > 0) {
        navigate("/results", { state: { recipes: data.results } });
      } else {
        alert("No recipes found. Try a different dish name!");
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const handleVoiceSearch = () => {
    const button = document.querySelector(".voice-btn");
    button.classList.add("clicked");

    // Initialize speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US"; 
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setDish(transcript); 
    };

    recognition.onerror = (event) => {
      console.error("Voice recognition error:", event.error);
    };

    recognition.onend = () => {
      // Remove the clicked class when recognition ends
      button.classList.remove("clicked");
    };
};
;

  return (
    <div className="search-dish">
      
      <div className="image-slider">
        <img src={images[currentImage]} alt="Dish" />
      </div>
      <h2>Search Dishes</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Any Dish e.g., Biryani"
          value={dish}
          onChange={(e) => setDish(e.target.value)}
        />
        <button className="voice-btn" onClick={handleVoiceSearch}>🎤</button>
        <select className="cuisine-btn" onChange={(e) => setCuisine(e.target.value)}>
          <option value="">Select Cuisine</option>
          <option value="Any">Any</option>
          <option value="Indian">Indian</option>
          <option value="Mexican">Mexican</option>
          <option value="Chinese">Chinese</option>
          <option value="Italian">Italian</option>
          <option value="Japanese">Japanese</option>
          <option value="French">French</option>
          <option value="Thai">Thai</option>
          <option value="Mediterranean">Mediterranean</option>
          <option value="Middle Eastern">Middle Eastern</option>
          <option value="Vietnamese">Vietnamese</option>
          <option value="Korean">Korean</option>
          <option value="Burmese">Burmese</option>
        </select>
        <button className="submit-btn" onClick={handleSearch}>Submit</button>
      </div>
      
    </div>
  );
};

export default SearchDish;
