import { useEffect, useRef } from "react";

const TwitchEmbed = ({ channel = "eoscall__", width = 1280, height = 720 }) => {
  const embedRef = useRef(null);

  

    function createEmbed() {
      if (!embedRef.current) return;

      new window.Twitch.Embed(embedRef.current.id, {
        width,
        height,
        channel,
        parent: [window.location.hostname], // obligatoire
      });
    }

  useEffect(() => {
    // Vérifie si le script Twitch est déjà chargé
    if (!window.Twitch) {
      const script = document.createElement("script");
      script.src = "https://embed.twitch.tv/embed/v1.js";
      script.async = true;
      script.onload = createEmbed;
      document.body.appendChild(script);
    } else {
      createEmbed();
    }
  }, []);

  return <div id="twitch-embed" ref={embedRef}></div>;
};

export default TwitchEmbed;
