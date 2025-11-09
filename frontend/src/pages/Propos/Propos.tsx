import TwitchEmbed from "../../TwitchEmbed";
import PPTwitch from "../../assets/pptwitch.png";
import "./index.scss";

export const Propos = () => {
  return (
    <div className="container apropos">
      <section className="context">
        <h1>Contexte du site</h1>
        <p>
          Ce site est une parodie du site <span>vendezvotrevoiture.fr</span>.
          <br />
          Cela prends place au sein de la communauté de la streameuse de
          EosCall__, qui permet à ses viewers, en échange de points de chaine,
          de diffuser de fausses pubs. Parmi celles-ci, une en particulier fait
          référence au site original remplacant les voitures par des saucisses.
        </p>
      </section>
      <section className="streamer">
        <h1>Présentation</h1>
        <div className="presentation">
          <div className="description">
            <img src={PPTwitch} alt="pptwitch" />
            <div className="profile">
              <h1 className="twitch-name">EosCall__</h1>
              <div>
                <a href="https://www.twitch.tv/eoscall__" target="_blank">
                  <i
                    className="pi pi-twitch"
                    style={{ fontSize: "2.5rem", color: "#954CFF" }}
                  ></i>
                </a>
                <a href="https://www.tiktok.com/@eoscall" target="_blank">
                  <i
                    className="pi pi-tiktok"
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                </a>
                <a href="https://www.youtube.com/@EosCall" target="_blank">
                  <i
                    className="pi pi-youtube"
                    style={{ fontSize: "2.5rem", color: "#FF0033" }}
                  ></i>
                </a>
                <a href="https://x.com/EosCall" target="_blank">
                  <i
                    className="pi pi-twitter"
                    style={{ fontSize: "2.5rem" }}
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <p>
            Coucou ! Moi c'est Eos ! Je me suis mise au stream en commençant
            avec de la radio libre, puis petit à petit avec du gaming. Que ce
            soit en solo ou en multi, j'aime partager et vivre de bons moments
            donc n'hésites pas à cliquer sur le petit coeur si tu souhaites
            rejoindre la merveilleuse communauté des Perles de Lune (et si tu as
            envie de me voir galérer à certains moments aussi)
          </p>
        </div>
        <TwitchEmbed />
      </section>
    </div>
  );
};
