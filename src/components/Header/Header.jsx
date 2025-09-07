import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { List, ListItem, ListItemText } from "@mui/material";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function Header({ savedItemCount, meals, handleRemoveItem }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSaved() {
    setIsOpen((prevValue) => !prevValue);
  }
  useEffect(() => {
    if (meals.length === 0) {
      setIsOpen(false);
    }
  }, [meals]);
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#f5602a",
          p: 2,
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          sx={{ backgroundColor: "white", color: "#f5602a", fontWeight: 500 }}
          variant="contained"
          startIcon={<FavoriteBorderIcon />}
          onClick={toggleSaved}
        >
          Saved Ingredients {savedItemCount}
        </Button>
      </Box>
      <Box
        sx={{
          display: isOpen ? "initial" : "none",
          position: "absolute",
          right: 1,
          backgroundColor: "white",
          boxShadow: 3,
          padding: 1,
          width: 400,
          borderRadius: 2,
        }}
      >
        <List>
          {meals.map((meal) => (
            <ListItem
              sx={{ display: "flex", gap: 1, justifyContent: "space-between" }}
            >
              <img
                src={meal.strMealThumb}
                alt={meal.strMeal}
                width={"50px"}
                height={"50px"}
              />
              <ListItemText disableTypography>
                <Typography>{meal.strMeal}</Typography>
              </ListItemText>
              <Button
                startIcon={<CloseIcon />}
                variant="outlined"
                type="button"
                sx={{
                  backgroundColor: "white",
                  color: "#f5602a",
                  borderColor: "#f5602a",
                }}
                onClick={() => handleRemoveItem(meal.idMeal)}
              >
                Remove
              </Button>
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}
