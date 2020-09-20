import React from "react";
import "./components/css/main.css";
import Navigation from "./components/sections/Navigation";
import RecipeOutput from "./components/sections/RecipeOutput";
import RecipeForm from "./components/forms/RecipeForm";
import { RecipeProvider } from "./components/providers/RecipeContext";

function App() {
  return (
    <RecipeProvider>
      <div>
        <Navigation />
        <RecipeOutput />
        <RecipeForm />
      </div>
    </RecipeProvider>
  );
}

export default App;
