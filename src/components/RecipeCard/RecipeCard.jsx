import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  CardActionArea,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";

export default function RecipeCard({ meal }) {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate(`/recipe-details/${meal.idMeal}/${meal.strMeal}`, {
      state: { meal },
    });
  }
  return (
    <Card
      sx={{
        width: 250,
        boxShadow: "none",
        border: 1,
        borderColor: "#cfcfcfff",
      }}
    >
      <CardMedia
        sx={{ width: "100%", height: 200, p: 1 }}
        component={"img"}
        src={meal.strMealThumb}
      />
      <CardContent>
        <Typography variant="h2" sx={{ fontSize: 16, fontWeight: 700 }}>
          {meal.strMeal}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: 14, fontWeight: 500, color: "#6e6e6eff" }}
        >
          {meal.strArea}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: 14 }}>
          {meal.strCategory}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          type="button"
          variant="contained"
          onClick={handleNavigate}
          sx={{
            backgroundColor: "#f5602a",
            color: "white",
            border: "none",
            boxShadow: "none",
          }}
        >
          View Recipe
        </Button>
        <Button
          startIcon={<FavoriteBorderIcon />}
          type="button"
          variant="outlined"
          sx={{
            color: "#f5602a",
            borderColor: "#f5602a",
            "&:hover": {
              backgroundColor: "none",
            },
          }}
        >
          Save
        </Button>
      </CardActions>
    </Card>
  );
}
