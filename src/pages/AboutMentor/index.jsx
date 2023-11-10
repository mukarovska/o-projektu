import './style.css';

export const AboutMentor = () => {
  return (
    <div className="aboutMentor--content">
      <div className="aboutMentor--imgsHolder">
        <img className="aboutMentor--img" src="/img/jirka.jpg" alt="jirka" />
      </div>

      <div className="aboutMentor--textContent">
        <h2 className="aboutMentor--name">Jirka Vebr</h2>
        <p className="aboutMentor--text">
          Studoval jsem Computer Science v Edinburghu, ale aktuálně žiju v
          Praze. <br />
          Takřka dekádu jsem se věnoval front-end vývoji, ale dnes už programuji
          v Rustu.
          <br />
          Již od střední jsem učil matematiku, následně na univerzitě
          programování a dnes učím ženy.
        </p>
      </div>
    </div>
  );
};
