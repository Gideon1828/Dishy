import React from "react";
import styles from "./Hero.module.css"; // Assuming you're using CSS Modules
import { Link } from "react-router-dom"; // Ensure proper routing

const Hero = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.textContainer}>
        <h1>Your Personal  Cooking Master</h1>
        <p>Are you hungry? Want to cook but feeling confused?</p>
        <p>What do you want to cook with the limited ingredients you have?</p>
        <p>You want to cook, but...</p>
        <ul className={styles.problemList}>
          <li>1. Limited Ingredients</li>
          <li>2. Concerns About Dish Variations</li>
          <li>3. Difficulty Choosing a Menu</li>
          <li>4. Ran Out of Ideas for What to Cook</li>
        </ul>
        
          <Link to="/login" className={styles.createRecipeBtn}>Create Recipe</Link>
        
      </div>
    </div>
  );
};

export default Hero;
