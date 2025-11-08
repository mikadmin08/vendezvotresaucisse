import PPComma from "../assets/ppcomma.png";
import PPKhouma from "../assets/ppkhouma.png";
import { Avatar } from "primereact/avatar";
import "../index.scss";

export const Footer = () => {
  return (
    <section className="footer">
      <div className="profile_container">
        <div className="profiledev">
          <Avatar image={PPComma} size="large" shape="circle" />
          <span>Comma</span>
        </div>
        <div className="profiledev">
          <Avatar image={PPKhouma} size="large" shape="circle" />
          <span>Khouma</span>
        </div>
      </div>
      <div className="footer-info">
        <h3>vendezvotresaucisse.fr</h3>
        <div className="liens">
          <div className="site">
            <h4>vendezvotresaucisse.fr</h4>
            <ul>
              {/* TODO: Mettre à jour les href site */}
              <li>
                <a href="#">Avis</a>
              </li>
              <li>
                <a href="#">Questions trop fréquentes</a>
              </li>
            </ul>
          </div>
          <div className="services">
            <h4>Service clients</h4>
            <ul>
              {/* TODO: Mettre à jour les href services */}
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Conditions Générales de non-vente</a>
              </li>
              <li>
                <a href="#">Mentions illégales</a>
              </li>
              <li>
                <a href="#">Protection des données</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
