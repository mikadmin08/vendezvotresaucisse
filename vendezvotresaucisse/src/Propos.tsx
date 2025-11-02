import TwitchEmbed from "./TwitchEmbed";
import PPTwitch from "./assets/pptwitch.png";

export const Propos = () => {
    return (
        <div className="container apropos">
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