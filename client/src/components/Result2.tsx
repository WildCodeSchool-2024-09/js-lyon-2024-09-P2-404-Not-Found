import "../styles/Result2.css";

interface Item {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
}

//faire le fech et remplacer tab par le resultat du fetch
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

function Result2() {
  return (
    <div>
      {tab.map((item) => (
        <div className="cards-container" key={item.idMeal}>
          {/* mettre le fond blanc sur le contener le plus gros */}
          <section className="card">
            {" "}
            {/* mettre l'id fournit par l apl*/}
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
      ))}
    </div>
  );
}

export default Result2;
