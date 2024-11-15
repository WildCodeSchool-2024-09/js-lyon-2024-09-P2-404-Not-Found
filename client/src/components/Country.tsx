import { useEffect, useState } from "react";
import "../styles/question.css";
import Chef from "../images/logo-chef.png";

interface countryProps {
  meals: {
    strArea: string;
  }[];
}

function Country() {
  const [country, SetCountry] = useState<countryProps["meals"] | null>(null);
  const [selectCountry, setSelectCountry] = useState("");

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((response) => response.json())
      .then((data: countryProps) => {
        SetCountry(data.meals);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <section className="Questioncontainer">
        <div className="inside-question">
          <div className="outside">
            <img src={Chef} alt="chef" className="image" />
          </div>
          <section>
            <article>
              <h2>Select a country :</h2>
            </article>
            <article>
              <select
                className="choice"
                name="country"
                id="country"
                value={selectCountry}
                onChange={(e) => setSelectCountry(e.target.value)}
              >
                {country !== null &&
                  country.length > 0 &&
                  country.map((element) => (
                    <option key={element.strArea} value={element.strArea}>
                      {element.strArea}
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

export default Country;
