import './style.css';
export const AboutProject = () => {
  return (
    <div className="aboutProject__container">
      <div className="aboutProject__info">
        <h2 className="aboutProject__heading">Projekt</h2>
        <p className="aboutProject__text">
          Naším projektem bude stránka s osobnostními testy. Věříme, že mimo
          zábavu, nám testy osobnosti pomohou lépe poznat a pochopit, jak sebe
          samého, tak i naše blízké. Do našeho projektu chceme propsat znalosti
          z kodérky a pořádně si s ním vyhrát po vizuální stránce.
        </p>
      </div>
      <div className="aboutProject__imagesHolder">
        <div className="aboutProject__imageDiv">
          <img
            className="aboutProject__img"
            src="/img/figma1.png"
            alt="Project prototype in Figma"
          />
        </div>

        <div className="aboutProject__imageDiv">
          <img
            className="aboutProject__img"
            src="/img/figma2.png"
            alt="Project prototype in Figma"
          />
        </div>
      </div>
    </div>
  );
};
