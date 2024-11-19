import Category from "./Category";
import Country from "./Country";
import Ingredient from "./Ingredients";
import Result2 from "./Result2";

function Home() {
  return (
    <div>
      {/* Redirection temporaire, il faudrait mettre le selecteur ici avec la redirection sur les pages concernées en servant de UseNavigate */}
      <Country />
      <Ingredient />
      <Category />
      <Result2 />
    </div>
  );
}

export default Home;
