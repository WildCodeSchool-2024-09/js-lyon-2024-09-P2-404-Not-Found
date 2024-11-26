import "../styles/Ingredient.css";
import "../styles/question.css";
import { useState } from "react";
import "../styles/Result2.css";
import Ingredient from "../components/Ingredients";
import Result from "../components/Result";

function PageIngredients() {
  const [selectedIngredient, setSelectedIngredient] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedIngredient(event.target.value);
  };
  return (
    <>
      <Ingredient
        handleChange={handleChange}
        selectedIngredient={selectedIngredient}
      />
      <Result selectedIngredient={selectedIngredient} />
    </>
  );
}

export default PageIngredients;
