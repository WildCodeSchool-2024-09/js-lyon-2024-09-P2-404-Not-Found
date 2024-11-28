import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

const addToFavorites = (tableaufav: Meal) => {
  const favorites = localStorage.getItem("favorites") //si favori clé eixste---> retourne la donnée en un tableau json (json.parse)  , sinon retourne null (tableau vide initial)
    ? JSON.parse(localStorage.getItem("favorites") as string) // json par fait linverse de stringify passe Json ("")--> javascript
    : [];

  const isAlreadyFavorite = favorites.some(
    //methode some permet de verifier si u moins une condtion est respectée sur chaque elements d'un tableau
    (element: Meal) => element.idMeal === tableaufav.idMeal, //ici on verifie si le paramètre element=soit un seul element du tableau favorite
    //est le même que les élements déjà enregistrés dans les favoris.
  );
  //element.idMeal element que l'utilisateur essaie d'ajouter.
  //tableaufav.idMeal element peut être déjà dans la liste.

  if (!isAlreadyFavorite) {
    favorites.push(tableaufav);
    localStorage.setItem("favorites", JSON.stringify(favorites)); // local storage mange du format json donc on le convertit
    toast.success(`${tableaufav.strMeal} a été ajouté aux favoris !`);
  } else {
    toast.error(`${tableaufav.strMeal} est déjà dans vos favoris !`);
  }
};

export default addToFavorites;
