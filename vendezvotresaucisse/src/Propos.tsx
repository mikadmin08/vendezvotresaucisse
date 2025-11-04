import TwitchEmbed from "./TwitchEmbed";
import PPTwitch from "./assets/pptwitch.png";
import PPComma from "./assets/ppcomma.png";
import PPKhouma from "./assets/ppkhouma.png";

export const Propos = () => {
    return (
        <div className="container apropos">
            <section className="context">
                <h1>Contexte du site</h1>
                <p>
                    Ce site est une parodie évidente du site <span>vendezvotrevoiture.fr</span>. <br/>
                    Cela prends place au sein de la communauté de la streameuse de EosCall__, qui permet à ses viewers, 
                    en échange de points de chaine, de diffuser de fausses pubs. Parmi celles-ci, une en particulier fait référence au site original
                    remplacant les voitures par des saucisses.
                </p>
            </section>
            <section className="streamer">
                <h1>Présentation</h1>
                <div className="presentation">
                    <div className="description">
                        <img src={PPTwitch} alt="pptwitch"/>
                        <div>
                            <h1>EosCall__</h1>
                            <a href="https://www.twitch.tv/eoscall__">Lien vers la chaîne</a>
                        </div>
                    </div>
                    <p>
                        Coucou ! Moi c'est Eos !
                        Je me suis mise au stream en commençant avec de la radio libre, puis petit à petit avec du gaming. Que ce soit en solo ou en multi, j'aime partager et vivre de bons moments 
                        donc n'hésites pas à cliquer sur le petit coeur si tu souhaites rejoindre la merveilleuse communauté des Perles de Lune (et si tu as envie de me voir galérer à certains moments aussi) 
                    </p>
                </div>
                <TwitchEmbed/>
            </section>
            <section className="developers">
                <h1>Les développeurs</h1>
                <div>
                    <img src={PPComma} alt="comma-pp"/>
                    <span>Comma</span>
                </div>
                <div>
                    <img src={PPKhouma} alt="khouma-pp"/>
                    <span>Khouma</span>
                </div>
            </section>
        </div>
    )
}