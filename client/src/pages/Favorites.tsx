import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Recipe from "../components/Features/Recipe";
import "../styles/Recipe.css";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};
function Favorites() {
  const [favorites, setFavorites] = useState<Meal[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");

    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites) as Meal[];

      setFavorites(parsedFavorites);
    }
  }, []);

  // Supprimer un plat des favoris
  const removeFavorite = (idMeal: string) => {
    const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const [popup, setPopup] = useState(false);
  const [choosenRecipe, setChoosenRecipe] = useState<string>("");

  const handleClick = (idOfMeal: string) => {
    setChoosenRecipe(idOfMeal);
    setPopup(true);
  };

  return (
    <div>
      <h1>Your Favorite Dishes</h1>
      {favorites.length === 0 ? (
        <p>No favorite dishes yet!</p>
      ) : (
        <div>
          {favorites.map((meal) => (
            <div className="cards-container" key={meal.idMeal}>
              <section className="card">
                <button
                  type="button"
                  onClick={() => handleClick(meal.idMeal)}
                  className="recipe-btn"
                >
                  <article className="sectionimage">
                    <img
                      src={meal.strMealThumb}
                      alt={meal.strMeal}
                      className="card-image"
                    />
                  </article>
                </button>
                <article className="sectiontexte">
                  <h3>{meal.strMeal}</h3>
                  <Rating fillColor="#FFA500" emptyColor="#ffffffcf" />
                </article>
                <button
                  type="button"
                  onClick={() => removeFavorite(meal.idMeal)}
                  className="remove-btn"
                >
                  Remove
                </button>
              </section>
            </div>
          ))}
          {popup === true && (
            <Recipe
              trigger={popup}
              setTrigger={setPopup}
              choosenRecipe={choosenRecipe}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Favorites;
