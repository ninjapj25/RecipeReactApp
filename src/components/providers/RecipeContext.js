import React, { useState, createContext } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = (props) => {
  const [recipe, setRecipe] = useState([]);

  return (
    <RecipeContext.Provider value={[recipe, setRecipe]}>
      {props.children}
    </RecipeContext.Provider>
  );
};
