import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";
import Logo from "../assets/logo.png";
import TwitchLiveBadgeFront from "../Twitch/TwitchLiveBadgeFront";
import "../index.scss";

export const Header = () => {
  const navigate = useNavigate();
  const [screen, setScreen] = useState("");

  const handleScreen = (screen: string) => {
    navigate(screen);
    setScreen(screen);
  };

  useEffect(() => {
    const scr = window.location.href.split("/#")[1];
    setScreen(scr);
  }, []);

  return (
    <div className="header">
      <img onClick={() => handleScreen("/")} src={Logo} alt="logo" />
      <div className="navigation">
        <Link
          className={`nav ${screen === "/vendre" ? "active" : ""}`}
          to="vendre"
          onClick={() => handleScreen("/vendre")}
        >
          Vendre saucisse
        </Link>
        <Link
          className={`nav ${screen === "/estimer" ? "active" : ""}`}
          to="estimer"
          onClick={() => handleScreen("/estimer")}
        >
          Estimer saucisse
        </Link>
        <Link
          className={`nav ${screen === "/acheter" ? "active" : ""}`}
          to="acheter"
          onClick={() => handleScreen("/acheter")}
        >
          Acheter saucisse
        </Link>
        <Link
          className={`nav ${screen === "/propos" ? "active" : ""}`}
          to="propos"
          onClick={() => handleScreen("/propos")}
        >
          A propos
        </Link>
        <TwitchLiveBadgeFront channelLogin="benzaie" />
      </div>
    </div>
  );
};
