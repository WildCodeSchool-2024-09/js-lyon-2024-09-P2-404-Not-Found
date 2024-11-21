import "../styles/Recipe.css";

// interface meals {
//   idMeal: string;
//   strMeal: string;
//   strMealThumb: string;
//   strIngredient: string;
//   strMeasure: string;
//   strInstructions: string;
//   strArea: string;
// }

interface RecipeProps {
  trigger: boolean;
  // recipesInfo: meals{};
}
function Recipe({ trigger }: RecipeProps) {
  // Affichage des ingredients et mesure que si recipesInfo est different de null
  // const ingredients = [];
  // for (let i = 1; i <= 20; i++) {
  // 	if (
  // 		recipesInfo &&
  // 		recipesInfo.trim() !== "" &&
  // 		recipesInfo.trim() !== null
  // 	) {
  // 		ingredients.push(recipesInfo[`strIngredient${i}`]);
  // 	}
  // }

  const meal = {
    strMeal: "glace",
    idMeal: "france",
    strIngredient1: "Une pomme bien fraiche",
    strInstructions: "Tu commande Uber et tu saoule pas  ! ",
    strCategory: "Toto",
    strMealThumb:
      "https://www.savorynothings.com/wp-content/uploads/2021/04/churros-recipe-image-7.jpg",
  };

  return trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button type="button" className="close-btn">
          X
        </button>
        <section>
          <section>
            <div>
              <h1>{meal.strMeal}</h1>
              <img src={meal.strMealThumb} alt={meal.strMeal} />
              <h2>{meal.strCategory}</h2>
            </div>
            <div>
              <h2>Ingrédients</h2>
              {/* <ul>
								{ingredients.map((ingredient, index) => (
									<li key={index}>{ingredient}</li>
								))}
								<li>{meal.strIngredient1}</li>
							</ul> */}
            </div>
            <div>
              <h2>Instructions</h2>
              <p>{meal.strInstructions}</p>
            </div>
          </section>
        </section>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Recipe;
