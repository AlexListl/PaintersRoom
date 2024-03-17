import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import RecipeCard from "../components/RecipeCard";

export default function Notes() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/recipes/" + id, {
      method: "DELETE",
    });
    const newRecipes = recipes.filter((recipe) => recipe.id !== id);
    setRecipes(newRecipes);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {recipes.map((recipe) => (
          <Grid item xs={12} md={6} lg={4} key={recipe.id}>
            <RecipeCard recipe={recipe} handleRecipeDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
