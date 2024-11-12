import "../styles/question.css";

function Question() {
  return (
    <>
      <section className="Questioncontainer">
        <img src="toto" alt="toto" />
        <section>
          <article className="title">
            <h2>Une question qui questionne est-elle une question ?</h2>
          </article>
          <article className="anwser">
            <p className="awnser1">Réponse A : Oui</p>
            <p className="awnser2">Réponse B : Oui</p>
            <p className="awnser3">Réponse C : Moui</p>
          </article>
        </section>
      </section>
    </>
  );
}

export default Question;
