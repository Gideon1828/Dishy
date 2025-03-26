import React from "react";
import "./WhyCard.css";

const WhyCard = () => {
  return (
    <div>
    <section className="why-section">
      <h2 className="why-title">Why Dishy</h2>
      <div className="card-container">
        <div className="card">
          <h3>Find Ideas Easily</h3>
          <p>No more overthinking! Just type in the ingredients you have, and Dishy will give you cooking ideas that fit perfectly!</p>
        </div>
        <div className="card">
          <h3>Awesome Recipes from All over World</h3>
          <p>Want to try unique recipes? Dishy has a collection of awesome recipes created directly by Professionals.</p>
        </div>
        <div className="card">
          <h3>Save Cooking Ideas</h3>
          <p>You can save all the cooking ideas you’ve created, so you don’t have to rummage through your pantry again.</p>
        </div>
        <div className="card">
          <h3>Delicious Recipes from All over World</h3>
          <p>From practical recipes to special dishes, Dishy will be your main source of inspiration for your meals!</p>
        </div>
      </div>
      
    </section>
    <div className="space"></div>
    <div className="separator"></div>
      
    </div>
  );
};

export default WhyCard;
