import PPComma from "../assets/ppcomma.png";
import PPKhouma from "../assets/ppkhouma.png";
import { Avatar } from "primereact/avatar";
import LogoMiniature from "../assets/logominia.png";
import { useNavigate, Link } from "react-router";
import "../index.scss";

export const Footer = () => {
  const navigate = useNavigate();
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
                <Link to="avis">Avis</Link>
              </li>
              <li>
                <Link to="faq" onClick={() => navigate("/faq")}>
                  Questions trop fréquentes
                </Link>
              </li>
            </ul>
          </div>
          <div className="services">
            <h4>Service clients</h4>
            <ul>
              {/* TODO: Mettre à jour les href services */}
              <li>
                <Link to="cgnv">Conditions Générales de non-vente</Link>
              </li>
              <li>
                <Link to="mentions">Mentions illégales</Link>
              </li>
              <li>
                <Link to="protection">Protection des données</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="logominia">
        <img src={LogoMiniature} alt="logominiature" />
      </div>
    </section>
  );
};
