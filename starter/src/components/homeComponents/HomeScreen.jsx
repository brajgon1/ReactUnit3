import React, { useEffect, useState } from "react";
import AdBanner from "./AdBanner";
import axios from "axios";
import SearchInput from "../SearchInput";
import RecipeCard from "../RecipeCard";

const HomeScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");



  const getRecipes = () => {
    axios.post("https://recipes.devmountain.com/recipes").then((res) => {
      console.log(res.data)
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
      <div className="recipe-list">
        {recipes
         .filter((recipe) =>
            recipe.recipe_name.toLowerCase().includes(search.toLowerCase())
          )
         .map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
      </div>
    </div>
  );
};

export default HomeScreen;
