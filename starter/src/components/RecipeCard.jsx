import React from "react";
import CarbonaraPic from "../assets/carbonara.jpg";
import StrawberryCheeseCake from "../assets/strawberrycheesecake.webp";
function RecipeCard() {
  return (
    <div className="recipe-container">
      <div className="recipe-card">
        <img src={CarbonaraPic} alt="carbonara" className="recipe-img" />
        <div className="recipe-details">
          <h2 className="name">Carbonara</h2>
          <button className="view-btn">See More</button>
        </div>
      </div>

      <div className="recipe-card">
        <img
          src={StrawberryCheeseCake}
          alt="strawberrycheese"
          className="recipe-img"
        />
        <div className="recipe-details">
          <h2 className="name">Strawberry Cheesecake</h2>
          <button className="view-btn">See More</button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
