import './style.css';

export const AboutTeam = () => {
  return (
    <div className="container">
      <div className="aboutTeam--content">
        <div className="grace">
          <div className="aboutTeam--imgsHolder">
            <img className="aboutTeam--img" src="/img/grace.JPG" alt="grace" />
          </div>
          <div className="aboutTeam--textContent">
            <h2 className="aboutTeam--name">Graciána Adamcová</h2>
            <p className="aboutTeam--text">
              Pracovala som ako senior účetní až do začiatku DA, rozhodla som sa
              ukončiť prácu, aby som sa naplno mohla venovať tvorbe webu. Rada
              cestujem, čítam knihy, pozriem si dobrý film, cvičím jumping a
              stretávam sa s priateľmi. Som taký extrovertný introvert.
            </p>
          </div>
        </div>

        <div className="kaja">
          <div className="aboutTeam--textContent">
            <h2 className="aboutTeam--name">Karolína Mukařovská</h2>
            <p className="aboutTeam--text">
              Studium vysoké školy jsem dokončila letos. Rozhodla jsem se ale z
              oboru trochu odklonit a vzdělávat se v tom, co mě skutečně baví.
              Pracovala jsem jako grafik/fotograf a asistent účetní. Ráda se
              učím novým věcem, ať už se jedná právě o IT nebo například
              rukodělné činnosti. Věnuji se lezení na umělých stěnách, jsem
              členkou skautského střediska a radost mi dělá pobyt v přírodě.
              Jsem optimista, který se vždy snaží rozdávat dobrou náladu.
            </p>
          </div>

          <div className="aboutTeam--imgsHolder">
            <img className="aboutTeam--img" src="/img/kaja.jpg" alt="kaja" />
          </div>
        </div>
      </div>
    </div>
  );
};
