import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Results.css";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const allRecipes = location.state?.recipes || []; // Get recipes

  const [visibleCount, setVisibleCount] = useState(6); // Show 6 initially
  const [filter, setFilter] = useState("all"); // Filter state

  const loadMore = () => {
    if (visibleCount + 6 <= allRecipes.length) {
      setVisibleCount(visibleCount + 6);
    } else {
      setVisibleCount(allRecipes.length); // Show all remaining results
    }
  };

  // Modified: pass allRecipes in the navigation state so VisitDish can use them for suggestions
  const handleViewRecipe = (recipeId) => {
    navigate(`/visit-dish/${recipeId}`, { state: { recipes: allRecipes } });
  };

  // Function to determine Veg/Non-Veg based on title or ingredients
  const isVeg = (recipe) => {
    const vegKeywords = [
      "tomato",
      "potato",
      "spinach",
      "paneer",
      "carrot",
      "cauliflower",
    ];
    const nonVegKeywords = [
      "chicken",
      "mutton",
      "fish",
      "egg",
      "beef",
      "pork",
      "bone",
      "Ribs",
    ];

    const lowerTitle = recipe.title.toLowerCase();
    const lowerIngredients = recipe.ingredients?.join(" ").toLowerCase() || "";

    if (
      nonVegKeywords.some(
        (kw) => lowerTitle.includes(kw) || lowerIngredients.includes(kw)
      )
    ) {
      return false; // Non-Veg
    }
    if (
      vegKeywords.some(
        (kw) => lowerTitle.includes(kw) || lowerIngredients.includes(kw)
      )
    ) {
      return true; // Veg
    }
    return true; // Default to Veg if unknown
  };

  // Filter recipes with dynamic Veg/Non-Veg assignment
  const filteredRecipes = allRecipes.filter((recipe) => {
    const vegStatus = isVeg(recipe);
    if (filter === "all") return true;
    return filter === "veg" ? vegStatus : !vegStatus;
  });

  return (
    <div className="results-container">
      <h2>Search Results</h2>
      <div className="filter-container">
        <label>Filter: </label>
        <select
          className="select-filter"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option value="all">All</option>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
        </select>
      </div>

      {filteredRecipes.length === 0 ? (
        <p>No results found. Try searching again.</p>
      ) : (
        <>
          <div className="results-grid">
            {filteredRecipes.slice(0, visibleCount).map((recipe) => (
              <div key={recipe.id} className="recipe-card">
                <img src={recipe.image} alt={recipe.title} />
                <h3>{recipe.title}</h3>
                <button
                  onClick={() => handleViewRecipe(recipe.id)}
                  className="view-recipe"
                >
                  View Recipe
                </button>
              </div>
            ))}
          </div>

          {visibleCount < filteredRecipes.length ? (
            <button className="load-more-btn" onClick={loadMore}>
              Load More
            </button>
          ) : (
            <p className="end-message">🎉 End of results! 🎉</p>
          )}
        </>
      )}
    </div>
  );
};

export default Results;
