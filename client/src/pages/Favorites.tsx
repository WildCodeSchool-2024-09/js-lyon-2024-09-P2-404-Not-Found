import { useEffect, useState } from "react";

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

  return (
    <div>
      <h1>Your Favorite Dishes</h1>
      {favorites.length === 0 ? (
        <p>No favorite dishes yet!</p>
      ) : (
        <div>
          {favorites.map((meal) => (
            <div key={meal.idMeal}>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h3>{meal.strMeal}</h3>
              <button type="button" onClick={() => removeFavorite(meal.idMeal)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;
