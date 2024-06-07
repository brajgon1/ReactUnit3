import React from "react";
import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`);
    console.log(recipe)
  };

  return (
    <div className="recipe-container">
      <div className="recipe-card">
        <img src={recipe.image_url} alt="recipe-pic" className="recipe-img" />
        <div className="recipe-details">
          <h2 className="name">{recipe.recipe_name}</h2>
          <button className="view-btn" onClick={handleClick}>
            See More
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeCard;
