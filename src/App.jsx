import { Routes, Route } from "react-router-dom";
import RecipeList from "./pages/RecipeList/RecipeList";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RecipeList />} />
    </Routes>
  );
}

export default App;
