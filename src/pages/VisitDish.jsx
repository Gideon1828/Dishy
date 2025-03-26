import React, { useEffect, useState } from "react";
import "./VisitDish.css";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const VisitDish = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const allRecipes = location.state?.recipes || []; // Get recipes from Results page
  const [dish, setDish] = useState(null);

  useEffect(() => {
    const fetchDishDetails = async () => {
      try {
        const response = await fetch(
          `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=7eb495e634104e24aa445a2a2d7bf89c`
        );
        if (!response.ok) throw new Error("Failed to fetch recipe details");
        const data = await response.json();
        setDish(data);
      } catch (error) {
        console.error(error);
        setDish(null);
      }
    };

    fetchDishDetails();
  }, [id]);

  if (!dish) return <div className="loading">Loading...</div>;

  // Get suggested recipes (excluding the current dish)
  const suggestedRecipes = allRecipes
    .filter((recipe) => recipe.id !== parseInt(id))
    .slice(0, 6); // Show 6 suggestions

  return (
    <div>
      <div className="dish-container">
        <Header />

        {/* Dish Name and Image */}
        <h1 className="dish-title-large">{dish.title}</h1>
        <div className="dish-image-container">
          <img src={dish.image} alt={dish.title} className="dish-image" />
        </div>

        {/* Ingredients Section */}
        <div className="section">
          <h2>Ingredients</h2>
          <div className="ingredients-grid">
            {dish.extendedIngredients.map((ingredient) => (
              <div key={ingredient.id} className="ingredient-card">
                <img
                  src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
                  alt={ingredient.name}
                />
                <p className="ingName">{ingredient.original}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Equipment Section */}
        <div className="section">
          <h2>Equipment</h2>
          <div className="equipment-list">
            {dish.analyzedInstructions[0]?.steps.flatMap((step) => step.equipment).map((equipment, index) => (
              <div key={index} className="equipment-name">
                <p>{index + 1}.{equipment.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Instructions Section */}
        <div className="section">
          <h2>Instructions</h2>
          <ol className="instructions-list">
            {dish.analyzedInstructions[0]?.steps.map((step) => (
              <li key={step.number}>{step.step}<br /><br /></li>
            ))}
          </ol>
        </div>

        {/* Nutritional Information */}
        <div className="section">
          <h2>Nutritional Information</h2>
          <div className="nutrition-grid">
            {dish.nutrition?.nutrients.map((nutrient) => (
              <div key={nutrient.name} className="nutrition-card">
                <p className="nutiName">
                  <strong>{nutrient.name}:</strong> {nutrient.amount} {nutrient.unit}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔥 Suggested Dishes Section (New Feature) */}
        <div className="section">
          <h2>Suggested Dishes</h2>
          <div className="suggestions-grids">
            {suggestedRecipes.map((recipe) => (
              <div key={recipe.id} className="recipe-cards">
                <img src={recipe.image} alt={recipe.title} />
                <h3>{recipe.title}</h3>
                <button
                  onClick={() => navigate(`/visit-dish/${recipe.id}`, { state: { recipes: allRecipes } })}
                  className="view-recipes"
                >
                  View Recipe
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default VisitDish;
