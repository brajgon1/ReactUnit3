import React, { useEffect, useState } from "react";
import "./DetailScreen.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  // webpage went blank - will figure out how to fix this

  useEffect(() => {
    // console.log(id);
    axios.get(`https://recipes.devmountain.com/recipes/${id}`)
    .then((res) => {
      // console.log(res.data)
      setRecipe(res.data);
    });
  }, []);

  return (
    <div className="recipe-detail">
      <div className="recipe-header">
        <img
          src={recipe.image_url}
          alt={recipe.recipe_name}
          className="recipe-img"
        />
        <h1 className="recipe-title">{recipe.recipe_name}</h1>
      </div>
      <div className="recipe-content">
        <div className="recipe-section">
          <div className="recipe-description">
            <p>Prep Time: {recipe.prep_time}</p>
            <p>Cook Time: {recipe.cook_time}</p>
            <p>Serves: {recipe.serves}</p>
          </div>
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>
                <h4>
                  {ingredient.quantity}
                  {ingredient.name}
                </h4>
              </li>
            ))}
          </ul>
        </div>
        <div className="recipe-section">
          <div className="instructions">
            <h2>Instructions</h2>
            <p style={{ whiteSpace: "pre-wrap" }}>
              {JSON.parse(recipe.instructions)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
