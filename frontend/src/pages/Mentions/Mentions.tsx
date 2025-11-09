import "./index.scss";

export const Mentions = () => {
  return (
    <div className="mentions-container">
      <div className="mentions-body">
        <h1>Mentions légales (avec le sourire)</h1>
        <p className="muted">
          Dernière mise à jour&nbsp;: <strong>[08/11/2025]</strong>
        </p>

        <section className="box">
          <h2>1) Éditeur du site (les héros)</h2>
          <p>
            Forme&nbsp;: Humain motivé
            <br />
            Capital social&nbsp;: Une bille et 2 boulons
          </p>
        </section>

        <section className="box">
          <h2>2) Hébergeur (les gardiens des serveurs)</h2>
          <p>
            <strong>[HOSTINGER]</strong>
            <br />
            Site&nbsp;:{" "}
            <a href="[https://www.hostinger.com/fr]">
              [https://www.hostinger.com/fr]
            </a>
          </p>
        </section>

        <section className="box">
          <h2>3) Propriété intellectuelle (pas touche au saucisson)</h2>
          <p>
            Tout le contenu (textes, images, logos, bouts de code qui sentent la
            monster) est protégé.
            <br />
            Reproduction sans permission&nbsp;? Aussi risqué que mettre du sucre
            dans les pâtes.
          </p>
        </section>

        <section className="box">
          <h2>
            4) Données personnelles &amp; RGPD (nous, sobres sur les cookies)
          </h2>
          <p>
            <strong>Responsable de traitement&nbsp;:</strong> [Khouma / Comma]
            <br />
            <strong>Ce qu’on collecte&nbsp;:</strong> [pseudo] — pas votre signe
            astrologique (sauf si vous insistez).
            <br />
            <strong>Pourquoi&nbsp;:</strong> pour envoyer un avis
            <br />
            <strong>Bases légales&nbsp;:</strong> intérêt légitime (pas
            d’espionnage, promis).
            <br />
            <strong>Durées&nbsp;:</strong> Infini (pour les avis)
            <br />
            <strong>Vos droits&nbsp;:</strong> Rectification, retrait de l'avis,
            anonymisation du pseudo
            <br />
            Écrivez-nous sur Discord&nbsp;: khouma ou comma
          </p>
        </section>

        <section className="box">
          <h2>5) Cookies (ceux du navigateur, pas ceux au chocolat)</h2>
          <p>
            On utilise des cookies pour <em>les avis</em>.
          </p>
        </section>

        <section className="box">
          <h2>6) Liens &amp; contenus externes (l’Internet est vaste)</h2>
          <p>
            On pointe parfois vers d’autres sites. Ils peuvent changer plus vite
            qu’un café refroidit&nbsp;: on ne peut pas tout vérifier. Si vous
            voyez un souci, <a href="mailto:[email]">dites-nous</a>.
          </p>
        </section>

        <section className="box">
          <h2>7) Responsabilités (on fait de notre mieux)</h2>
          <p>
            Nos infos sont publiées avec amour et parfois des blagues. S’il
            reste des coquilles, on les corrige dès qu’on les repère. On ne
            saurait être responsables des dommages causés par une lecture trop
            sérieuse d’un site parodique.
          </p>
        </section>

        <section className="box">
          <h2>8) E-commerce</h2>
          <p>C'est un faux site parodique, il n'y a rien a vraiment acheter</p>
        </section>

        <section className="box">
          <h2>9) Accessibilité (le Web pour tout le monde)</h2>
          <p>
            On vise un site accessible, même avec un clavier fatigué. Dites-nous
            ce qui coince sur Discord.
          </p>
        </section>

        <section className="box">
          <h2>10) Crédits (les artistes)</h2>
          <p>Design &amp; dev&nbsp;: Khouma et Comma</p>
        </section>

        <section className="box">
          <h2>11) Parodie (le twist final)</h2>
          <p>
            Ce site est <strong>parodique</strong>. Si un contenu vous semble
            ambigu, contactez-nous sur Discord. On préfère corriger que bouder.
          </p>
        </section>
      </div>
    </div>
  );
};
