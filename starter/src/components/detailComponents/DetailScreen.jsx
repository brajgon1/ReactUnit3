import React from "react";
import "./DetailScreen.css";
import { useParams, useEffect } from "react-router-dom";

const DetailScreen = () => {
  const { id } = useParams();

  useEffect(() => {
    axios.get("https://recipes.devmountain.com/recipes/${id}").then((res) => {
      setRecipe(res.data);
    })
    console.log(id);
  }, []);

  const fakeRecipe = {
    recipe_name: "Carbonara",
    image_url: "",
    recipe: ["Prep Time: 15 minutes ", "Cook Time: 15 minutes ", "Serves: 4"],
    ingredients: [
      "200g spaghetti",
      "100g pancetta",
      "2 large eggs",
      "50g Pecorino cheese",
      "50g Parmesan cheese",
      "Freshly ground black pepper",
      "Salt",
    ],
    instructions: [
      "Cook the spaghetti in a large pot of boiling salted water until al dente.",
      "Meanwhile, heat the pancetta in a large skillet over medium heat until crispy.",
      "In a bowl, beat the eggs and mix in the cheeses.",
      "Drain the pasta, reserving some of the cooking water.",
      "Combine the pasta, pancetta, and egg mixture, adding pasta water as needed to create a creamy sauce.",
      "Season with pepper and serve immediately.",
    ],
  };

  return (
    <div className="recipe-detail">
      <div className="recipe-header">
        <img
          src={fakeRecipe.image_url}
          alt={fakeRecipe.recipe_name}
          className="recipe-img"
        />
        <h1 className="recipe-title">{fakeRecipe.recipe_name}</h1>
      </div>
      <div className="recipe-content">
        <div className="recipe-section">
        <p className="recipe-description">{fakeRecipe.recipe}</p>
          <h2>Ingredients</h2>
          <ul>
            {fakeRecipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <div className="recipe-section">
          <div className="instructions">
          <h2>Instructions</h2>
          <ol>
            {fakeRecipe.instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
