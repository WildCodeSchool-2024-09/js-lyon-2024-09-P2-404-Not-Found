import "../styles/Ingredient.css";
import "../styles/question.css";
import { useState } from "react";
import "../styles/Result2.css";
import AnyAnswer from "../components/AllQuestions/AnyAnswer";
import AnyChoice from "../components/AllQuestions/AnyChoice";

function PreferedChoice() {
  const [selectedIngredient, setSelectedIngredient] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedIngredient(event.target.value);
  };
  return (
    <>
      <AnyChoice
        handleChange={handleChange}
        selectedIngredient={selectedIngredient}
      />
      <AnyAnswer selectedIngredient={selectedIngredient} />
    </>
  );
}

export default PreferedChoice;
