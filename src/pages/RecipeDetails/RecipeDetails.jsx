import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { Breadcrumbs } from "@mui/material";
import { Link } from "@mui/material";
import { useLocation } from "react-router-dom";
export default function RecipeDetails() {
  const location = useLocation();
  const { meal } = location.state;

  return (
    <Box sx={{ my: 2, mx: 5 }}>
      <Breadcrumbs>
        <Link
          hover="underline"
          href="/"
          color="inherit"
          sx={{ textDecoration: "none" }}
        >
          Recipe Lists
        </Link>
        <Typography sx={{ color: "#f5602a" }}>{meal.strMeal}</Typography>
      </Breadcrumbs>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          my: 5,
          mx: 10,
        }}
      >
        <Box component={"div"} sx={{ width: 250 }}>
          <img
            style={{ borderRadius: 5 }}
            src={meal.strMealThumb}
            alt="Meal image"
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
            mt: 3,
          }}
          component={"div"}
        >
          <Typography variant="h2" sx={{ fontSize: 20, fontWeight: "bold" }}>
            {meal.strMeal}
          </Typography>
          <Typography>{meal.strInstructions}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
