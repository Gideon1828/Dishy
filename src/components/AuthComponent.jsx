import React from "react";
import "./AuthComponent.css"; // Import the corresponding CSS file

const AuthComponent = () => {
  return (
    <div className="auth-container">
      <div className="separator"></div>

      <div className="content">
        <h2 className="title">Ask for Recipes at Dishy!!</h2>
        <p className="description">
          You are confused about what to cook? No problem! Dishy is here to help.
          Just type in the ingredients you have, and Dishy will help you create a recipe easily.
        </p>

        <img src="/auth/img_register.png" alt="Dishy" className="image" />

        <div className="what-can-you-do">
          <h3>What can you do here?</h3>
          <div className="lists">
            <ul className="list">
              <li>Find cooking ideas using the ingredients you already have in your pantry.</li>
              <li>Save the cooking ideas you've created.</li>
            </ul>
            <ul className="list">
              <li>Check out awesome recipes created by AI.</li>
              <li>Get new inspiration for your meals.</li>
            </ul>
          </div>
        </div>

        <div className="closing-text">
          So, no more stressing over what to cook!
          <br />
          <strong>Dishy bro is ready to help you.</strong>
        </div>
      </div>

      <div className="separator"></div>
    </div>
  );
};

export default AuthComponent;
