import React, { useEffect, useState } from "react";
import "./DetailScreen.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const DetailScreen = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    console.log(id);
    axios.get(`https://recipes.devmountain.com/recipes/${id}`).then((res) => {
      console.log(res.data);
      console.log("here", res.data);
      setRecipe(res.data);
    });
  }, [id]);

  return (
    <div className="recipe-detail">
      {recipe === null ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="recipe-header">
            <img
              style={{ backgroundImage: `url(${recipe.image_url})` }}
              className="recipe-img"
            />
            <h1 className="recipe-title">{recipe.recipe_name}</h1>
          </div>
          <div className="recipe-content">
            <div className="recipe-section">
              <div className="recipe-description">
                <p>Prep Time: {recipe.prep_time}</p>
                <p>Cook Time: {recipe.cook_time}</p>
                <p>Serves: {recipe.servings}</p>
              </div>
              <h2>Ingredients</h2>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>
                    <h4>
                      {ingredient.quantity} {ingredient.name}
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
            {recipe.instructions === "" || null ? null : (
              <div className="recipe-section instructions">
                <h2>Instructions</h2>
                <p style={{ whiteSpace: "pre-wrap" }}>
                  {recipe.instructions}
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default DetailScreen;
