import { Image } from "primereact/image";
import Estimation from "./components/Estimation";
import Suggestion from "./components/Suggestion";
import SaucisseVoiture from "./assets/voituresaucisse.png";
import { Divider } from "primereact/divider";

export const Home = () => {
  return (
    <div className="home-container">
      <div className="top-blue-saucisse-container">
        <h4 className="saucisse-home title">Combien vaut votre Saucisse ?</h4>
        <div className="saucisse-home hero">
          <ul className="saucisse-home list">
            <li>
              <i
                className="pi pi-check"
                style={{ fontSize: "1rem", fontWeight: "bold" }}
              ></i>
              Évaluation 100% gratuite
            </li>
            <li>
              <i
                className="pi pi-check"
                style={{ fontSize: "1rem", fontWeight: "bold" }}
              ></i>
              Rapide et facile
            </li>
            <li>
              <i
                className="pi pi-check"
                style={{ fontSize: "1rem", fontWeight: "bold" }}
              ></i>
              Obtenez votre prix de vente directement en ligne
            </li>
          </ul>
          <Image
            style={{ position: "relative", left: "25%", scale: "2" }}
            src={SaucisseVoiture}
            alt="Image"
            preview
            width="250"
          />
        </div>
      </div>
      <div className="saucisse-home caca">
        <Estimation />
      </div>
      <Divider />
      <section className="suggestion-container">
        <div className="suggestion">
          <h4 className="suggestion title">
            Rejoignez les 4 millions de clients qui nous ont déjà vendu leur
            saucisses
          </h4>
          <Suggestion />
        </div>
      </section>
    </div>
  );
};
