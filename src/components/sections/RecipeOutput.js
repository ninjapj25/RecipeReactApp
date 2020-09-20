import React, { useContext } from "react";
import { RecipeContext } from "../providers/RecipeContext";

export default function RecipeOutput() {
  const [recipe] = useContext(RecipeContext);

  let recipeData = () => {
    if (recipe.length === 0) {
      return (
        <div className="recipe-prompt">
          <h3> Please enter a food to search ...</h3>
        </div>
      );
    } else {
      return recipe.map((recipe) => (
        <div className="card">
          <div className="card-image-container">
            {" "}
            <img src={recipe.recipe.image} alt="food" />{" "}
          </div>
          <h2 className="card-header">{recipe.recipe.label}</h2>
          <div className="card-text">
            {recipe.recipe.ingredients.map((ingredients, i) => (
              <ul key={i}>
                <li> {ingredients.text}</li>
              </ul>
            ))}
          </div>
          <div className="view-btn-container">
            <a href={recipe.recipe.url} target="_blank" className="view-btn">
              View More
            </a>
          </div>
        </div>
      ));
    }
  };

  return <div className="container">{recipeData()}</div>;
}
