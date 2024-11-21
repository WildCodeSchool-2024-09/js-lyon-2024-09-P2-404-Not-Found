import "../styles/Ingredient.css";
import "../styles/question.css";
import "../styles/Result2.css";
import { useState } from "react";
import Ingredient from "../components/Ingredients";
import Result2 from "../components/Result2";

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
      <Result2 selectedIngredient={selectedIngredient} />
    </>
  );
}

export default PageIngredients;
