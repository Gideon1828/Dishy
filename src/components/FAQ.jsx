import React from "react";
import "./FAQ.css"; // Make sure the CSS file path is correct

const FAQ = () => {
  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions (FAQ)</h2>
      <div className="faq-item">
        <h3>1. Why Use Dishy?</h3>
        <p>
          Because with Dishy, We can provide cooking ideas that match the
          ingredients you have. No hassle—just type in the ingredients, and
          voila! You have got a new recipe!
        </p>
      </div>
      <div className="faq-item">
        <h3>2. How Much Does It Cost?</h3>
        <p>
          The good news is, you can enjoy Dishy without spending a single
          penny! Yup, all the features and goodness of Dishy are free for
          you to use.
        </p>
      </div>
      <div className="faq-item">
        <h3>3. How Does Dishy Help Me?</h3>
        <p>
          Dishy will be your best friend in the kitchen! You can find
          cooking ideas, save recipes, and check out awesome recipes created by
          Experts. Everything becomes easier with Dishy!
        </p>
      </div>
      <div className="faq-item">
        <h3>
          4. So, What’s the Difference Compared to Using Other Sites?
        </h3>
        <p>
          The difference is, with Dishy, you can do more than just ask for
          suggestions about the ingredients you have. You can save your favorite
          recipes, check out recipes from other users, and get new inspiration
          every day! So, besides making cooking more fun, you can also get
          awesome recipes from our community!
        </p>
      </div>
    </div>
  );
};

export default FAQ;
