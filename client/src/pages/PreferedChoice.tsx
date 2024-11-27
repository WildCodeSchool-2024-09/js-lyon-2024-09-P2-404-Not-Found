import "../styles/Ingredient.css";
import "../styles/question.css";
import "../styles/Result.css";
import { useState } from "react";
import { useParams } from "react-router-dom";
import AnyAnswer from "../components/AllQuestions/AnyAnswer";
import AnyChoice from "../components/AllQuestions/AnyChoice";

function PreferedChoice() {
  const [selectedType, setSelectedType] = useState<string>();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedType(event.target.value);
  };

  const { type } = useParams();

  return (
    <>
      <AnyChoice
        type={type}
        handleChange={handleChange}
        selectedType={selectedType}
      />
      <AnyAnswer selectedType={selectedType} type={type} />
    </>
  );
}

export default PreferedChoice;
