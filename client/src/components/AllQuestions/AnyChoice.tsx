import "../../styles/Global.css";
import { useEffect, useState } from "react";
import Chef from "../../images/logo-chef.png";

interface dataProps {
  meals: {
    idIngredient: number;
    strDescription: string;
    strType: string;
    strIngredient: string;
    strCategory: string;
    strArea: string;
  }[];
}

interface IngredientProps {
  handleChange: React.Dispatch<React.ChangeEvent<HTMLSelectElement>>;
  selectedType?: string;
  type?: string;
}

function AnyChoice({ handleChange, selectedType, type }: IngredientProps) {
  const [listChoices, setListChoices] = useState<dataProps["meals"] | null>(
    null,
  );

  function homeChoice() {
    if (type === "Country") {
      return "a";
    }
    if (type === "Ingredient") {
      return "i";
    }
    if (type === "Category") {
      return "c";
    }
  }

  const homeSelection = homeChoice();

  useEffect(() => {
    fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?${homeSelection}=list`,
    )
      .then((response) => response.json())
      .then((data: dataProps) => setListChoices(data.meals))
      .catch((err) => console.log(err));
  }, [homeSelection]);

  return (
    <>
      <section className="Questioncontainer">
        <div className="inside-question">
          <div className="back-chef">
            <img src={Chef} alt="chef" className="chef-img" />
          </div>
          <section>
            <article>
              <h2>Choose your {type} to cook :</h2>
            </article>
            <article>
              <select
                name="chooseIngredients"
                className="search-select"
                value={selectedType}
                onChange={handleChange}
              >
                <option value="">Please choose your {type} </option>
                {listChoices !== null &&
                  listChoices.length > 0 &&
                  listChoices.map((choice) => (
                    <option
                      key={
                        type === "Country"
                          ? choice.strArea
                          : type === "Ingredient"
                            ? choice.strIngredient
                            : choice.strCategory
                      }
                      value={
                        type === "Country"
                          ? choice.strArea
                          : type === "Ingredient"
                            ? choice.strIngredient
                            : choice.strCategory
                      }
                    >
                      {type === "Country"
                        ? choice.strArea
                        : type === "Ingredient"
                          ? choice.strIngredient
                          : choice.strCategory}
                    </option>
                  ))}
              </select>
            </article>
          </section>
        </div>
      </section>
    </>
  );
}

export default AnyChoice;
