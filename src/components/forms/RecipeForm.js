import React, { useState, useContext, useEffect } from "react";
import searchIcon from "../images/Search.svg";
import { RecipeContext } from "../providers/RecipeContext";

export default function RecipeForm() {
  const APP_ID = "ebed5dd5";
  const APP_KEY = "8706f069f1c4492d7de4e0a5839500a2";

  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  const [recipe, setRecipe] = useContext(RecipeContext);

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = () => {
    let checkFetch = (response) => {
      if (!response.ok) {
        throw alert("Please enter a food name.");
      }
      return response;
    };
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    )
      .then(checkFetch)
      .then((res) => res.json())
      .then((data) => setRecipe(data.hits));
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <form className="recipe-form" onSubmit={getSearch}>
      <img src={searchIcon} alt="search icon" />
      <input type="text" value={search} onChange={handleChange} autoFocus />
      <button type="submit"> Search Recipe </button>
    </form>
  );
}
