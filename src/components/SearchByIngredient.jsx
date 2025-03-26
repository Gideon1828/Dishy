import React, { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./SearchByIngredient.css";

const API_KEY = "7eb495e634104e24aa445a2a2d7bf89c";

const SearchByIngredient = () => {
  const [ingredients, setIngredients] = useState([""]);
  const [cuisine, setCuisine] = useState(""); // Default empty
  const navigate = useNavigate();

  // Add new ingredient field
  const addIngredient = () => {
    setIngredients([...ingredients, ""]);
  };

  // Remove an ingredient field
  const removeIngredient = (index) => {
    const newIngredients = ingredients.filter((_, i) => i !== index);
    setIngredients(newIngredients);
  };

  // Update ingredient input
  const handleIngredientChange = (index, value) => {
    const updatedIngredients = [...ingredients];
    updatedIngredients[index] = value;
    setIngredients(updatedIngredients);
  };

  // Voice assistant for a specific ingredient input
  const handleVoiceSearch = (index) => {
    const button = document.getElementById(`voiced-btns-${index}`);
    button.classList.add("clicked");

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      handleIngredientChange(index, transcript);
    };

    recognition.onerror = (event) => {
      console.error("Voice recognition error:", event.error);
    };

    recognition.onend = () => {
      button.classList.remove("clicked");
    };
  };

  // Fetch recipes based on ingredients
  const handleSearch = async () => {
    if (ingredients.every((ing) => ing.trim() === "")) {
      alert("Please enter at least one ingredient.");
      return;
    }

    let ingredientQuery = ingredients.filter((ing) => ing.trim() !== "").join(",");
    let url = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientQuery}&number=10&apiKey=${API_KEY}`;

    // Append cuisine filter if not "Any"
    if (cuisine && cuisine !== "Any") {
      url += `&cuisine=${cuisine}`;
    }

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.length > 0) {
        navigate("/results", { state: { recipes: data } });
      } else {
        alert("No recipes found. Try different ingredients!");
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  const [username, setUsername] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("https://dishy-2g4s.onrender.com/working", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          // Assuming the endpoint returns an object with a "username" field
          setUsername(response.data.username);
        })
        .catch((error) => {
          console.error("Error fetching data from MongoDB:", error);
        });
    }
  }, []);
  /* eslint-disable */
  
  
  return (
    <div className="ingredient-container">
      <h2>Welcome {username || "Guest"}</h2>
      <h2 className="ingredient-title">Add Ingredients to Find New Recipes</h2>
      <div className="ingredient-form">
        {ingredients.map((ingredient, index) => (
          <div key={index} className="ingredient-input-group">
            <input
              type="text"
              placeholder="Eg. Chicken"
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              className="ingredient-input"
            />
            {/* Voice Button for this ingredient */}
            <button
              id={`voiced-btns-${index}`}
              className="voiced-btns"
              onClick={() => handleVoiceSearch(index)}
            >
              🎤
            </button>
            <button className="ingredient-btn add" onClick={addIngredient}>+</button>
            {index > 0 && (
              <button className="ingredient-btn remove" onClick={() => removeIngredient(index)}>
                -
              </button>
            )}
          </div>
        ))}
      </div>

      <select className="select-cuisine" onChange={(e) => setCuisine(e.target.value)}>
        <option value="">Select Cuisine</option>
        <option value="Any">Any</option>
        <option value="Indian">Indian</option>
        <option value="Mexican">Mexican</option>
        <option value="Chinese">Chinese</option>
        <option value="Italian">Italian</option>
        <option value="Japanese">Japanese</option>
        <option value="French">French</option>
        <option value="Thai">Thai</option>
        <option value="Middle Eastern">Middle Eastern</option>
        <option value="Vietnamese">Vietnamese</option>
        <option value="Korean">Korean</option>
        <option value="Burmese">Burmese</option>
      </select>

      <button className="submit-btn" onClick={handleSearch}>Submit</button>
    </div>
  );
};

export default  SearchByIngredient;
