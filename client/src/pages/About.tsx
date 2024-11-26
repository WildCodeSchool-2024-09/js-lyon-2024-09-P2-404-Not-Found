import "../styles/About.css";

const profilCreator = [
  {
    creatorName: "Jessica",
    id: 1,
    creatorPost: "Product Owner",
    creatorImg: "src/images/colette.jpg",
  },
  {
    creatorName: "Stephen",
    id: 2,
    creatorPost: "Scrum Master",
    creatorImg: "src/images/horst.jpg",
  },
  {
    creatorName: "Michaël",
    id: 3,
    creatorPost: "Developper",
    creatorImg: "src/images/remi.jpg",
  },
  {
    creatorName: "Léa",
    id: 4,
    creatorPost: "Developper",
    creatorImg: "src/images/skinner.jpg",
  },
];

function About() {
  return (
    <>
      <section className="whoAreWe">
        <div className="inside">
          <h1>Qui sommes nous ?</h1>
          <div className="creators">
            {profilCreator.map((profil) => (
              <div key={profil.id}>
                <img src={profil.creatorImg} alt={profil.creatorName} />
                <p>{profil.creatorName}</p>
                <p>{profil.creatorPost}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="history">
        <div className="inside">
          <h2>Notre Histoire</h2>
          <p>
            Il était une fois, un groupe de quatre amis qui se demandaient quoi
            cuisiner pour leur repas de midi. Après plusieurs tentatives
            infructueuses, allant de la pizza brûlée à la soupe de légumes qui
            aurait pu servir de ciment, ils réalisèrent qu’ils n’étaient
            probablement pas les seuls à se poser cette question cruciale. C’est
            ainsi qu’ils décidèrent de créer Cook’In, une solution pour tous
            ceux qui, comme eux, se retrouvaient souvent face à un frigo vide et
            une imagination en panne.
          </p>
        </div>
      </section>
    </>
  );
}
export default About;
