import { Routes, Route } from "react-router-dom";
import RecipeList from "./pages/RecipeList/RecipeList";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RecipeList />} />
      <Route
        path="/recipe-details/:idMeal/:strMeal"
        element={<RecipeDetails />}
      />
    </Routes>
  );
}

export default App;
