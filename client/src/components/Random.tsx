import "../styles/random.css";

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

function Random({ meal }: RandomProps) {
  return (
    <figure className="DisplayRandom">
      <img className="image" src={meal.picture} alt={meal.name} />
      <figcaption className="mealDetails">
        <h1>
          <strong>{meal.name}</strong>
        </h1>
        <h2>{meal.category}</h2>
        <h3>Meal Type : {meal.area}</h3>
        <p>{meal.instructions}</p>
        <ul>
          <h3>
            <strong>Ingrédients :</strong>
          </h3>
          <div className="list">
            {meal.ingredient.map((ingredient, index) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              <li key={index}>
                {ingredient} - {meal.measure[index]}
              </li>
            ))}
          </div>
        </ul>
      </figcaption>
    </figure>
  );
}

export default Random;
