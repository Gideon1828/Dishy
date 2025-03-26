import React from "react";
import Header from "../components/Header.jsx";
import SearchDish from "../components/SearchDish.jsx";
import SearchByIngredient from "../components/SearchByIngredient.jsx";
import Footer from "../components/Footer.jsx";

const Working = () => {
  return (
    <div>
      <Header />
      <SearchByIngredient />
      <SearchDish />
      
      <Footer />
    </div>
  );
};

export default Working;
