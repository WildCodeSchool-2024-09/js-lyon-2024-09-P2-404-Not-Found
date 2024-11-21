// import { useState } from "react";
import "../styles/Result2.css";
// import Recipe from "./Recipe";

interface Item {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

const tab: Item[] = [
  {
    strMeal: "glace",
    idMeal: "france",
    strMealThumb:
      "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/les-dossiers-de-la-redaction/news-de-la-redaction/la-journee-de-la-glace-gratuite-c-est-demain-2941136/54088408-1-fre-FR/La-journee-de-la-glace-gratuite-c-est-demain.jpg",
  },
  {
    strMeal: "glace",
    idMeal: "france",
    strMealThumb:
      "https://www.savorynothings.com/wp-content/uploads/2021/04/churros-recipe-image-7.jpg",
  },
  {
    strMeal: "glace",
    idMeal: "france",
    strMealThumb:
      "https://simple-veganista.com/wp-content/uploads/2012/09/healthy-chopped-vegetable-salad-recipe-3.jpg",
  },
  {
    strMeal: "glace",
    idMeal: "france",
    strMealThumb:
      "https://tse1.mm.bing.net/th?id=OIP.3Qj2Ptue-CEfDNZMErx1JAHaEK&pid=Api",
  },
];

// interface RecipeProps {
// 	meals: {
// 		idMeal: string;
// 		strMeal: string;
// 		strMealThumb: string;
// 		strIngredient: string;
// 		strMeasure: string;
// 		strInstructions: string;
// 		strArea: string;
// 	};
// }

function Result2() {
  // const [popup, setPopup] = useState(false);
  // const [recipesInfo, setRecipesInfo] = useState<
  //   RecipeProps["meals"] | null | undefined
  // >();

  function HandleClick() {
    // setPopup(true);
    // fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setRecipesInfo(data.meals);
    //   });
  }
  return (
    <>
      {tab.map((item) => (
        <button type="button" onClick={HandleClick} key={item.idMeal}>
          <div className="cards-container" key={item.idMeal}>
            <section className="card">
              <article className="sectionimage">
                <img
                  src={item.strMealThumb}
                  alt={item.idMeal}
                  className="card-image"
                />
              </article>
              <article className="sectiontexte">
                <h3>{item.strMeal}</h3>
              </article>
            </section>
          </div>
        </button>
      ))}
      {/* Faire en sorte que Recipe ne s'affiche que si Trigger est strictement True avec &&*/}
      {/* ajouter a la ligne du dessous " recipesInfo={recipesInfo} " */}
      {/* <Recipe trigger={popup} /> */}
    </>
  );
}

export default Result2;
