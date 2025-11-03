import TwitchEmbed from "./TwitchEmbed";
import PPTwitch from "./assets/pptwitch.png";

export const Propos = () => {
    return (
        <div className="container apropos">
            <section className="context">
                <h1>Contexte du site</h1>
                <p>
                    Ce site est une parodie évidente du site <span>vendezvotrevoiture.fr</span>. 
                    Cela prends place au sein de la communauté de la streameuse du doux nom de EosCall__, qui permet à ses viewers, 
                    en échange de points de chaine, de diffuser de fausses pubs. Parmi celles-ci, une en particulier fait référence au site original
                    remplacant les voitures par des saucisses. Nous avons trouvé ça drôle et voulu rendre réalité le site sur lequel vous êtes présent.
                </p>
                <span>Si vous avez aimé le concept et voulez en découvrir plus sur EosCall__, descendez la page pour la découvrir.</span>
            </section>
            <div className="presentation">
                <img src={PPTwitch} alt="pptwitch"/>
                <div className="description">
                    <h1>EosCall__</h1>
                    <a href="https://www.twitch.tv/eoscall__">Lien vers la chaîne</a>
                </div>
            </div>
            <TwitchEmbed/>
        </div>
    )
}