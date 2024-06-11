import React from "react";
import { Formik, Form } from "formik";
import { useState } from "react";
import axios from "axios";
import "./NewRecipeScreen.css";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    axios.get("https://recipes.devmountain.com/recipes", values).then((res) => {
      console.log(res.data);
    });
    console.log(values);
  };

  return (
    <section>
      <h1 className="title-recipe">Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="input-container">
            <div className="name-and-img container">
              <input
                type="text"
                id="recipeName"
                value={values.recipeName}
                onChange={handleChange}
                name="recipeName"
                placeholder="Name"
              />
              <input
                type="text"
                id="imageURL"
                value={values.imageURL}
                onChange={handleChange}
                name="imageURL"
                placeholder="Image URL"
              />
            </div>
            <div className="radio-container">
              <input type="radio" id="option1" name="recipeType" />
              <label for="option1">Cook</label>
              <input type="radio" id="option2" name="recipeType" />
              <label for="option2">Bake</label>
              <input type="radio" id="option3" name="recipeType" />
              <label for="option3">Drink</label>
            </div>
            <div className="prep-cook-serves-container">
              <input
                type="text"
                id="prepTime"
                value={values.prepTime}
                onChange={handleChange}
                name="prepTime"
                placeholder="Prep"
              />
              <input
                type="text"
                id="cookTime"
                value={values.cookTime}
                onChange={handleChange}
                name="cookTime"
                placeholder="Cook Time"
              />
              <input
                type="text"
                id="serves"
                value={values.serves}
                onChange={handleChange}
                name="serves"
                placeholder="Serves"
              />
            </div>
            <div className="ingredients-container">
              <div className="input-wrapper">
              <input
                type="text"
                id="ingredient"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ingredient"
              />
              <input
                type="text"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Quantity"
              />
              </div>
              <div className="add-btn">
                <button
                  type="button"
                  className="add-another-btn"
                  onClick={addIngredient}
                >
                  Add Another
                </button>
              </div>
            </div>
            <div className="textArea-and-btn">
              <div className="container-for-textArea"></div>
              <textarea
                id="myTextArea"
                name="instructions"
                rows={6}
                cols={50}
                value={values.instructions}
                onChange={handleChange}
                placeholder="What are your instructions?"
              ></textarea>
              <button type="submit" className="save-btn">Save</button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
