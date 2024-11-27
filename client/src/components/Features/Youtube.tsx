import "../../styles/RandomResult.css";
import "../../styles/Ingredient.css";

interface yTProps {
  recipeName: string;
}

function Youtube({ recipeName }: yTProps) {
  function generateYouTubeSearchUrl(mealName: string): string {
    return `https://www.youtube.com/results?search_query=${encodeURIComponent(mealName)}+result`;
  }
  //     explications:la fonction generateurlyoutube...  a en paramètre le nom d'un plat, typé string.
  //     -"https://www.youtube.com/results?search_query= "
  //   // -${encodeURIComponent(mealName)} --> fonction qui transforme le nom du plat en une chaine de caractères, sans espaces ou caractères spéciaux : ex:convertit les espaces en + ( spagetti carbo=> spagetti+carbo)
  //   // -concatène result pour chercher des recettes spécifiques sur youtube

  return (
    <div>
      <a
        href={generateYouTubeSearchUrl(recipeName)}
        target="_blank"
        rel="noopener noreferrer"
        className="recipe-button"
      >
        ▶️𝚈𝚘𝚞𝚝𝚞𝚋𝚎
      </a>
    </div>
  );
}

export default Youtube;
