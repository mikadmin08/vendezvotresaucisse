import { Card } from "primereact/card";
import hotdogIcon from "../assets/icon/hot-dog-icon.png";
import saucebbq from "../assets/icon/sauce-barbecue-icon.png";
import saucissefork from "../assets/icon/saucisse-fork-icon.png";
import saucisseicon from "../assets/icon/saucissesIcon.png";

export default function ReasonToSellSaucisse() {
  return (
    <>
      <h1 className="reason-title">4 raisons pour vendre votre saucisse</h1>
      <div className="reason-to-sell-saucisse-container">
        <Card className="reason-card">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <img
              style={{ width: "4rem", marginTop: "-2rem" }}
              src={saucebbq}
              alt="illustration"
            />
            <strong style={{ margin: 0 }}>
              Pas besoin d’un diplôme en charcuterie pour briller ici. Tu
              cliques, tu rigoles, et ta saucisse vaut soudain plus qu’un NFT en
              2021.
            </strong>
          </div>
        </Card>
        <Card className="reason-card">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <img
              style={{ width: "4rem", marginTop: "-2rem" }}
              src={hotdogIcon}
              alt="illustration"
            />
            <strong style={{ margin: 0 }}>
              Zéro stress, zéro paperasse. Juste toi, ta saucisse et trois clics
              magiques. Même ta grand-mère pourrait le faire (et elle le fera).
            </strong>
          </div>
        </Card>
        <Card className="reason-card">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <img
              style={{ width: "4rem", marginTop: "-2rem" }}
              src={saucisseicon}
              alt="illustration"
            />
            <strong style={{ margin: 0 }}>
              Ici, pas de jugement. Que ta saucisse soit géante, mini, ou
              végétarienne, on la respecte. Good vibes only, même pour les
              chipos.
            </strong>
          </div>
        </Card>
        <Card className="reason-card">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <img
              style={{ width: "4rem", marginTop: "-2rem" }}
              src={saucissefork}
              alt="illustration"
            />
            <strong style={{ margin: 0 }}>
              En moins de temps qu’il faut pour retourner une knacki, t’as déjà
              ton estimation. Efficace, croustillant, et un peu débile — juste
              comme on aime.
            </strong>
          </div>
        </Card>
      </div>
    </>
  );
}
