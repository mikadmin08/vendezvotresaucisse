import PPComma from "../assets/ppcomma.png";
import PPKhouma from "../assets/ppkhouma.png";
import { Avatar } from 'primereact/avatar';
import "../index.scss";

export const Footer = () => {
    return (
        <section className="footer">
            <div className="profiledev">
                <Avatar image={PPComma} size="large" shape="circle" />
                <span>Comma</span>
            </div>
            <div className="footer-info">
                <h3>vendezvotresaucisse.fr</h3>
                <div className="liens">
                    <div className="site">
                        <h4>vendezvotresaucisse.fr</h4>
                        <li>
                            <ul>Avis</ul>
                            <ul>Questions trop fréquentes</ul>
                        </li>
                    </div>
                    <div className="services">
                        <h4>Service clients</h4>
                        <li>
                            <ul>Contact</ul>
                            <ul>Conditions Générales de non-vente</ul>
                            <ul>Mentions illégales</ul>
                            <ul>Protection des données</ul>
                        </li>
                    </div>
                </div>
            </div>
            <div className="profiledev">
                <Avatar image={PPKhouma} size="large" shape="circle" />
                <span>Khouma</span>
            </div>
        </section>
    )
}