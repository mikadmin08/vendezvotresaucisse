import { useNavigate } from "react-router"
import Logo from "./assets/logo.png";
import "./index.scss";

export const Header = () => {

    const navigate = useNavigate();
    return (
        <div className="header">
            <img onClick={()=>navigate("/")} src={Logo} alt="logo" />
            <div className="navigation">
                <button onClick={()=>navigate("/vendre")}>Vendre saucisse</button>
                <button onClick={()=>navigate("/estimer")}>Estimer saucisse</button>
                <button onClick={()=>navigate("/acheter")}>Acheter saucisse</button>
                <button onClick={()=>navigate("/propos")}>A propos</button>
            </div>
        </div>
    )
}