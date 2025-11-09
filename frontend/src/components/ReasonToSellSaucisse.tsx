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
            <p style={{ margin: 0 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              inventore praesentium at libero, soluta autem possimus quos
              consequatur asperiores! Vel culpa voluptas, unde tempore dolor aut
              ipsa totam et eligendi.
            </p>
          </div>
        </Card>
        <Card className="reason-card">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <img
              style={{ width: "4rem", marginTop: "-2rem" }}
              src={hotdogIcon}
              alt="illustration"
            />
            <p style={{ margin: 0 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              inventore praesentium at libero, soluta autem possimus quos
              consequatur asperiores! Vel culpa voluptas, unde tempore dolor aut
              ipsa totam et eligendi.
            </p>
          </div>
        </Card>
        <Card className="reason-card">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <img
              style={{ width: "4rem", marginTop: "-2rem" }}
              src={saucisseicon}
              alt="illustration"
            />
            <p style={{ margin: 0 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              inventore praesentium at libero, soluta autem possimus quos
              consequatur asperiores! Vel culpa voluptas, unde tempore dolor aut
              ipsa totam et eligendi.
            </p>
          </div>
        </Card>
        <Card className="reason-card">
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <img
              style={{ width: "4rem", marginTop: "-2rem" }}
              src={saucissefork}
              alt="illustration"
            />
            <p style={{ margin: 0 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              inventore praesentium at libero, soluta autem possimus quos
              consequatur asperiores! Vel culpa voluptas, unde tempore dolor aut
              ipsa totam et eligendi.
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}
