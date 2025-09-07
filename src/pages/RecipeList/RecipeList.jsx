import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Box } from "@mui/material";
import RecipeCard from "../../components/RecipeCard/RecipeCard";
import Header from "../../components/Header/Header";
export default function RecipeList() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState([]);
  const [savedItems, setSavedItems] = useState([]);

  function handleChange(event) {
    const userInput = event.target.value;
    setInput(userInput);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
      );
      const data = await response.json();
      setSearch(data.meals || []);

      setInput("");
    } catch (error) {
      console.log(error);
    }
  }

  function handleSaveItem(item) {
    setSavedItems((prevItem) => [...prevItem, item]);
  }
  function handleRemoveItem(id) {
    setSavedItems((prevItems) =>
      prevItems.filter((meal) => meal.idMeal !== id)
    );
  }

  return (
    <>
      <Header
        savedItemCount={savedItems.length}
        meals={savedItems}
        handleRemoveItem={handleRemoveItem}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          mx: 5,
          my: 2,
        }}
      >
        <SearchBar
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          searchTerm={input}
        />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          {search.map((item) => (
            <RecipeCard
              key={item.idMeal}
              meal={item}
              handleSave={handleSaveItem}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}
