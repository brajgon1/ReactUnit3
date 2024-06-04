import React, { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import SearchInput from "../SearchInput";
import RecipeCard from "../RecipeCard";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  const recipeDisplay = recipes
    .filter((recipe) => {
      let title = recipe.recipe_name.toLowerCase();
      let searchParams = search.toLowerCase();
      return title.includes(searchParams);
    })
    .map((recipe, index) => {
      return <RecipeCard key={index} recipe={recipe} />;
    });

  const getRecipes = () => {
    axios.get("https://recipes.devmountain.com/recipes").then((res) => {
      setRecipes(res.data);
    });
  };

  useEffect(() => {
    getRecipes();
  }, []);

  return (
    <div>
      <AdBanner />
      <SearchInput search={search} setSearch={setSearch} />
      <div className="recipe-list">{recipeDisplay}</div>
    </div>
  );
};

export default HomeScreen;