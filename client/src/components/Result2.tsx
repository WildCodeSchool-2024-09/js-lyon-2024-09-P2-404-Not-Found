import "../styles/Result2.css";

interface Item {
  name: string;
  category: string;
  country: string;
  image: string;
}

// interface Result2Props {
//   items: Item[];
// }

//faire le fech et remplacer tab par le resultat du fetch
const tab: Item[] = [
  {
    name: "glace",
    category: "dessert",
    country: "france",
    image:
      "https://cdn-elle.ladmedia.fr/var/plain_site/storage/images/elle-a-table/les-dossiers-de-la-redaction/news-de-la-redaction/la-journee-de-la-glace-gratuite-c-est-demain-2941136/54088408-1-fre-FR/La-journee-de-la-glace-gratuite-c-est-demain.jpg",
  },
  {
    name: "churros",
    category: "dessert",
    country: "france",
    image:
      "https://www.savorynothings.com/wp-content/uploads/2021/04/churros-recipe-image-7.jpg",
  },
  {
    name: "salade",
    category: "entrée",
    country: "france",
    image:
      "https://simple-veganista.com/wp-content/uploads/2012/09/healthy-chopped-vegetable-salad-recipe-3.jpg",
  },
  {
    name: "beef",
    category: "plat",
    country: "france",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.3Qj2Ptue-CEfDNZMErx1JAHaEK&pid=Api",
  },
];

function Result2() {
  return (
    <div>
      {tab.map((item) => (
        <div className="cards-container" key={item.name}>
          {/* mettre le fond blanc sur le contener le plus gros */}
          <section className="card">
            {" "}
            {/* mettre l'id fournit par l apl*/}
            <article className="sectionimage">
              <img src={item.image} alt={item.name} className="card-image" />
            </article>
            <article className="sectiontexte">
              <h3 className="card-title">{item.name}</h3>
              <p className="card-category"> Category: {item.category}</p>
              <p className="card-country"> Country: {item.country}</p>
            </article>
          </section>
        </div>
      ))}
    </div>
  );
}

export default Result2;
