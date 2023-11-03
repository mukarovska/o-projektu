import './style.css';
import { Menu } from '../Menu';

export const Header = () => {
  return (
    <header className="header">
      <Menu />
      <div className="header--content">
        <div className="header--textContent">
          <h1 className="header--moto">Každý je unikát</h1>
          <p className="header--text">Zjisti v čem vynikáš ty...</p>
        </div>

        <div className="header--imgsHolder">
          <img
            className="header--img header--img1"
            src="/img/clovek1.png"
            alt="3D character"
          />
          <img
            className="header--img header--img2"
            src="/img/clovek2.png"
            alt="3D character"
          />
          <img
            className="header--img header--img3"
            src="/img/clovek3.png"
            alt="3D character"
          />
        </div>
      </div>
    </header>
  );
};
