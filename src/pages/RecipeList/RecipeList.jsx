import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Box } from "@mui/material";

export default function RecipeList() {
  const [input, setInput] = useState("");
  const [search, setSearch] = useState([]);

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
      console.log(data);
      setSearch(data.meals);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center flex-col items-center h-screen">
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <Box
        sx={{
          backgroundColor: "pink",
          mt: 2,
          display: "flex",
        }}
      >
        <List>
          {search.map((item, index) => (
            <ListItem key={index}>{item.strMeal}</ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}
