import "./styles/App.css";
import { useState } from "react";
import Nav from "./components/Nav.tsx";
import Question from "./components/Question.tsx";
import Random from "./components/Random.tsx";

interface RandomProps {
  meal: {
    name: string;
    picture: string;
    category: string;
    area: string;
    instructions: string;
    ingredient: string[];
    measure: string[];
  };
}
// type RandomProps = [meal{}];

function App() {
  const [meal, setMeal] = useState<RandomProps["meal"] | null>(null);

  const getRandomMeal = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((response) => response.json())
      .then(({ meals }) => {
        const [randomMeal] = meals;
        setMeal({
          name: randomMeal.strMeal,
          picture: randomMeal.strMealThumb,
          category: randomMeal.strCategory,
          area: randomMeal.strArea,
          instructions: randomMeal.strInstructions,
          ingredient: Array.from(
            { length: 20 },
            (_, i) => randomMeal[`strIngredient${i + 1}`],
          ).filter(Boolean),
          measure: Array.from(
            { length: 20 },
            (_, i) => randomMeal[`strMeasure${i + 1}`],
          ).filter(Boolean),
        });
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données du repas :",
          error,
        );
      });
  };

  return (
    <>
      <nav>
        <Nav />
      </nav>
      <main>
        <Question />
        <button type="button" onClick={getRandomMeal}>
          Get Random Meal Bro !
        </button>
        {meal && <Random meal={meal} />}
      </main>
    </>
  );
}

export default App;
