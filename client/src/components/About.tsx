import "../styles/About.css";
import Nav from "./Nav";

const profilCreator = [
  {
    creatorName: "Jessica",
    id: 1,
    creatorPost: "Developper",
    creatorImg: "https://avatar.iran.liara.run/public/96",
  },
  {
    creatorName: "Stephen",
    id: 2,
    creatorPost: "Developper",
    creatorImg: "https://avatar.iran.liara.run/public/15",
  },
  {
    creatorName: "Michael",
    id: 3,
    creatorPost: "Developper",
    creatorImg: "https://avatar.iran.liara.run/public/7",
  },
  {
    creatorName: "Léa",
    id: 4,
    creatorPost: "Developper",
    creatorImg: "https://avatar.iran.liara.run/public/83",
  },
];

function About() {
  return (
    <>
      <Nav />
      <h1>Qui sommes nous ?</h1>
      <section className="creators">
        {profilCreator.map((profil) => (
          <div key={profil.id}>
            <img src={profil.creatorImg} alt={profil.creatorName} />
            <p>{profil.creatorName}</p>
            <p>{profil.creatorPost}</p>
          </div>
        ))}
      </section>
      <section className="history">
        <h2>Notre Histoire</h2>
        <p>
          Il était une fois, un groupe de 4 personnes qui se demandaient que
          cuisiner pour leur repas de midi. Au fur et à mesure de leur
          questionnement, ils se sont rendus compte qu'ils n'étaient
          probablement pas les seuls à se poser si souvent la question. C'est
          pourquoi ils créérent Plants'In.
        </p>
      </section>
    </>
  );
}
export default About;
