import React from "react";
import { Formik } from "formik";

const NewRecipeScreen = () => {
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
    console.log(values);
  };

  return (
    <section>
      <h1>Tell us about your Recipe!</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="input-container">
            <div className="name-and-img container">
              <input type="text" id="recipeName" placeholder="Name" />
              <input type="text" id="imageURL" placeholder="Image URL" />
            </div>
            <div className="radio-container">
              <input type="radio" id="option1" name="recipeType" />
              <label for="option1">Cook</label>
              <input type="radio" id="option2" name="recipeType" />
              <label for="option2">Bake</label>
              <input type="radio" id="option3" name="recipeType" />
              <label for="option3">Drink</label>
            </div>
            <div className="prop-cook-serves-container">
              <input type="text" id="prepTime" placeholder="Prep" />
              <input type="text" id="cookTime" placeholder="Cook Time" />
              <input type="text" id="serves" placeholder="Serves" />
            </div>
            <div className="ingredients-container">
              <input type="text" id="ingredient" placeholder="Ingredient" />
              <input type="text" id="quantity" placeholder="Quantity" />
            </div>
            <div className="textArea-and-btn">
              <div className="container-for-textArea"></div>
              <textarea
                id="myTextArea"
                name="myTextArea"
                rows={6}
                cols={50}
                placeholder="What are your instructions?"
              ></textarea>
              <button type="submit">Save</button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
