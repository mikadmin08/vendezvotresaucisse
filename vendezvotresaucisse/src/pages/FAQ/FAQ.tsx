import { useState } from "react";
import { TabMenu } from "primereact/tabmenu";
import { Accordion, AccordionTab } from "primereact/accordion";
import DOMPurify from "dompurify";
import "./index.scss";

export const FAQ = () => {
  const [onglet, setOnglet] = useState(0);

  const items = [
    { label: "Informations générales", icon: "pi pi-info-circle" },
    { label: "Evalutation en ligne", icon: "pi pi-calculator" },
    { label: "Prix de vente", icon: "pi pi-tag" },
    { label: "Reprise et vente", icon: "pi pi-shop" },
  ];

  const HtmlFromString = (htmlString: string) => {
    const safe = DOMPurify.sanitize(htmlString);
    return <div dangerouslySetInnerHTML={{ __html: safe }} />;
  };

  const headers = {
    infosgen: [
      {
        head: "Comment fonctionne vendezvotresaucisse.fr",
        content:
          "<ol><li>Commencez par l'évaluation en ligne gratuite. Vous complétez simplement les informations sur l'état et l'équipement de votre saucisse sur notre outil d'évaluation. Vous ne recevrez pas par e-mail le prix final. Vous décidez si vous souhaitez vendre ou non.</li><li>Si vous décidez de vendre, il vous suffit de prendre un rendez-vous de reprise de saucisse. Sur place, notre expert confirme les informations de la saucisse que vous avez fournies.</li><li>Le paiement sera alors effectué immédiatement par pigeon voyageur et, bien entendu, nous prendrons en charge le changement de propriétaire.</li></ol>",
      },
      {
        head: "Pourquoi devrais-je vendre ma saucisse sur vendezvotresaucisse.fr",
        content:
          "vendezvotresaucisse.fr vous offre une possibilité rapide, simple et sûre de vendre votre saucisse.<br/><br/>En vendant votre saucisse chez nous, vous évitez :<br/><ul><li>De perdre du temps et de l'argent à poster une annonce</li><li>De perdre du temps au téléphone ou à faire tester votre saucisse par des clients potentiels, en particulier les soirs et week-ends et lors de barbecue</li><li>De négocier le prix sans fin et d’être stressé par les fréquentes arnaques au paiement</li><li>Que votre saucisse perde encore plus de valeur si vous mettez du temps à la vendre</li><li>De perdre de l'argent en coûts d'entretien ou de remise en état de votre saucisse</li></ul>",
      },
      {
        head: "Y-a-t'il des coûts supplémentaires lors de la vente de ma saucisse ?",
        content:
          "Non, vous n’aurez aucun frais supplémentaire lors de la vente de votre saucisse (seulement un rein).",
      },
      {
        head: "Est-ce que vous facturez des frais si je ne vous vends pas ma saucisse ?",
        content:
          "Non, vous n'avancez aucun frais. L'ensemble du processus d'évaluation en ligne est entièrement gratuit pour vous.",
      },
      {
        head: "J'ai oublié quelque chose dans la chair à saucisse. Qui dois-je contacter ?",
        content:
          "Si vous avez oublié quelque chose dans votre chair à saucisse, la meilleure chose à faire est de vous rouler en boule et pleurer. On n'a pas d'autres solutions à vous proposer pour le moment.",
      },
      {
        head: "Puis-je vendre une saucisse achetée à crédit ?",
        content:
          "Oui, vous pouvez également nous vendre une saucisse avec un financement continu.<br/><br/>Vous apportez les documents suivants pour votre rendez-vous de reprise de saucisse :<br/><br/><ul><li>Attestation de solde de la banque de moins de 30 jours faisant apparaître vos coordonnées et celles de la banque (non, ce n'est pas pour vous arnaquer et vider votre compte en banque, ce n'est pas notre genre)</li><li>Autorisation de vente à un tiers rédigée par la société de financement et signée par le vendeur, ou à défaut déclaration signée (tamponnée si société) du client sur papier libre</li><li>Lettre d'attestation de bon paiement de la dernière échéance</li></ul><br/><br/>Si le solde est inférieur au montant de la reprise de la saucisse, nous compenserons les coûts restants avec le prix de vente de votre saucisse et nous nous occuperons du rachat du financement avec la banque.<br/><br/>Dans le cas contraire, vous devrez nous faire un virement ou chèque de banque avant le rachat, correspondant au montant de la différence + frais de dossier s'élevant à 25€ (il faut bien payer les gens qui scannent les documents et les saisissent sur le PC, ça prend ... 5 minutes, c'est long).",
      },
      {
        head: "Puis-je vendre une saucisse de fonction ?",
        content:
          "Oui, vous pouvez nous vendre une saucisse appartenant à une entreprise.<br/><br/>Apportez, dans ce cas, lors de l'examen de la saucisse, les documents suivants :<br/><br/><ul><li>Facture d'achat</li><li>Facture de vente (avec ou sans TVA)</li><li>RIB au nom de l'entreprise</li><li>Le représentant de la société doit tamponner la carte grise barrée au nom de l'entreprise</li></ul>",
      },
      {
        head: "Ma saucisse n'est plus en état de mâche. Puis-je encore vendre ma saucisse avec vendezvotresaucisse.fr ?",
        content:
          "Oui, nous achetons également des saucisses qui ne sont pas en état de mâche. Précisez simplement ces informations lorsque vous saisissez les informations de votre saucisse pendant l'évaluation. C'est la seule façon pour évaluer correctement le prix de vente final de votre saucisse.<br/><br/>Vous vous occupez du transport de votre saucisse jusqu'au lieu de rendez-vous. Heureusement, nous ne prenons pas cela en charge.",
      },
      {
        head: "Puis-je vendre une saucisse au nom d'un membre de ma famille ou d'un proche avec vendezvotresaucisse.fr ?",
        content:
          "Oui, vous pouvez tout à fait vendre votre saucisse pour le compte d'un tiers à vendezvotresaucisse.fr.<br/><br/>Vous devez pour cela obligatoirement justifier d’un lien de filiation en présentant une copie de votre livret de famille, en complément des pièces ci-dessous :<br/><br/><ul><li>Une procuration de vente à votre nom et signée par le titulaire de la saucisse</li><li>Une copie de votre carte d'identité (ou passeport) ainsi que de la carte d'identité (ou passeport) du titulaire de la saucisse</li><br/><br/>Dans le cas contraire, la transaction nécessite la présence du propriétaire de la saucisse.",
      },
      {
        head: "Est-ce que je peux vendre une saucisse dont j'ai hérité ?",
        content:
          "Oui, vous pouvez. Nous souhaitons vous aider du mieux possible pour vendre votre saucisse.<br/><br/>Apportez, dans ce cas, une copie de l’acte de décès, un acte notarié ainsi que tous les documents de la saucisse lors de l'examen. Dans le cas où il y aurait plusieurs héritiers lors de la succession, munissez- vous également des procurations des héritiers non présents accompagnées de leur carte d'identité.",
      },
      {
        head: "Est-ce que vendezvotresaucisse.fr achète ma saucisse sans certificat d'immatriculation ?",
        content:
          "Nous avons besoin du certificat d'immatriculation (carte grise) pour l'achat de votre saucisse. Sans ce document, nous ne pouvons malheureusement pas procéder à l'achat de la saucisse.",
      },
      {
        head: "Puis-je vendre ma saucisse si elle n'est plus immatriculée ?",
        content:
          "Oui, vous pouvez mais personne ne l'achètera sauf les personnes agées (vous savez ceux qui ont plus de 30 ans).",
      },
    ],
    eval: [
      {
        head: "Comment puis-je connaître la valeur de ma saucisse ?",
        content:
          "L'évaluation en ligne de votre saucisse se déroule en 2 étapes :<br/><ol><li>Complétez d'abord les informations de votre saucisse pour préciser l'état et l'équipement.</li><li>Vous recevrez ensuite votre prix de vente final par pigeon voyageur.</li></ol><br/>Notre prix est valable pendant 7 jours. C'est à vous de décider si vous souhaitez nous vendre à ce prix.",
      },
      {
        head: "Comment puis-je vendre ma saucisse après l'évaluation en ligne ?",
        content:
          "Après avoir complété l'évaluation, vous recevez votre prix de vente final par pigeon voyageur et vous pourrez prendre un rendez-vous de reprise. Le prix est valable pendant 7 jours.<br/><br/>Les informations de votre saucisse seront confirmées sur place par l'un de nos experts. Le contrat d'achat est alors rédigé et la vente de votre saucisse est conclue. La saucisse reste dans nos frigos. En plus, nous nous occupons des démarches administratives.",
      },
      {
        head: "J'ai fait une évaluation en ligne de ma saucisse il y a quelques temps. Cette valeur est-elle toujours valable ?",
        content:
          "Le marché de l'occasion est très dynamique, c'est pourquoi l'évaluation de votre saucisse peut varier d'un jour à l'autre. Nous vous recommandons d'effectuer une nouvelle évaluation en ligne.",
      },
      {
        head: "Pourquoi ne puis-je pas trouver ma saucisse dans votre outil d'évaluation en ligne ?",
        content:
          "Notre base de données (nos cerveaux) contient certains types de saucisses. Si votre saucisse ne figure pas dans notre base de données, tant pis !",
      },
    ],
    prixvente: [
      {
        head: "Quelles sont les informations nécessaires pour calculer le prix de vente final ?",
        content:
          "En plus des informations générales (par exemple, expiration du contrôle sanitaire et nombre d'anciens propriétaires), nous avons besoin de quelques détails sur l'équipement (par exemple, la couleur de la saucisse) et l'état général de la saucisse. Sur cette base, nos experts détermineront le prix de vente final.",
      },
      {
        head: "Combien de temps faut-il pour recevoir mon prix de vente final ?",
        content:
          "Votre prix de vente final sera déterminé par l'un de nos experts (ou pas) et sera affichée instantanément, en tenant compte de toutes les informations de votre saucisse.",
      },
    ],
    reprise: [
      {
        head: "Pourquoi dois-je prendre rendez-vous de reprise de saucisse ?",
        content:
          "Le rendez-vous de reprise de saucisse sur place est important car notre expert doit à nouveau confirmer les informations que vous nous avez fournies. En effet, de l'équipement supplémentaire ou des dommages peuvent entraîner une correction du prix de vente final. Le prix de vente final peut alors être définitivement confirmé et la vente peut être traitée.<br/><br/>Il est essentiel de réserver un rendez-vous de reprise de saucisse à l'avance, car nous vous préparons vous et votre saucisse spécifiquement. De cette façon, nous nous assurons que nous pouvons perdre suffisamment de temps pour vous",
      },
      {
        head: "Que dois-je apporter avec moi pour le rendez-vous de reprise de saucisse ?",
        content:
          "Apportez simplement les éléments suivants avec vous à votre rendez-vous de reprise de saucisse :<br/><ul><li>La saucisse</li><li>La carte grise de la saucisse</li><li>Votre carte d'identité ou passeport expiré</li></ul>Si possible, veuillez également apporter les documents suivants :<ul><li>Le carnet d'entretien de la saucisse</li><li>Les factures et reçus existants (achat, entretien, réparations, etc.)</li><li>Certificat de conformité Européen</li><li>Le manuel d'utilisation</li><li>La chair à saucisse de secours et/ou les éventuels épices supplémentaires (cumin, paprika, etc.)</li></ul><br/>Bien que ces documents ne soient pas absolument nécessaires, ils garantissent généralement un meilleur prix d'achat.<br/><br/>De cette façon, la comparaison finale des informations saisies en ligne lors de l'auto-évaluation et la reprise de la saucisse peuvent être effectuées rapidement",
      },
      {
        head: "Comment se déroule mon rendez-vous de reprise de saucisse ?",
        content:
          "<ul><li>Un de nos experts effectuera un contrôle final et comparera la saucisse avec les données saisies.</li><li>Nous concluons un contrat d'achat avec vous et vous transférons le prix de vente.</li><li>Nous transférerons immédiatement la somme dans votre main et nous prenons en charge le changement de propriétaire.</li></ul>",
      },
      {
        head: "Comment se déroule le rendez-vous de reprise de saucisse compte tenu des réglementations sanitaires en vigueur ?",
        content:
          "Grâce aux informations que vous nous fournirez, nous pouvons déjà procéder à l'évaluation en ligne et déterminer le prix de vente de votre saucisse. Lors du rendez-vous de reprise de saucisse, notre expert confirme simplement vos informations. Nos experts maintiendront les distances de sécurité nécessaires et respecteront les normes d'hygiène les plus élevées, avec un nombre limité de personne. Le rendez-vous de reprise de saucisse se déroule rapidement pour limiter au maximum les contacts. Le paiement est sécurisé (on vous jette l'argent).",
      },
      {
        head: "Qu'arrive-t-il à ma saucisse après la vente ?",
        content:
          "Immédiatement après la vente, nous effectuons le changement de propriétaire et nous vous envoyons une confirmation. Ensuite, la saucisse est revendue.",
      },
      {
        head: "Pouvez-vous récupérer ma saucisse ?",
        content:
          "Non, pour des soucis d'organisation et car nous avons autre chose à foutre, nous ne pouvons malheureusement pas nous déplacer chez vous pour récupérer votre saucisse.",
      },
    ],
  };

  const InfosGen = () => (
    <div>
      <Accordion activeIndex={0}>
        {headers.infosgen.map((header) => (
          <AccordionTab header={header.head}>
            <p className="m-0">{HtmlFromString(header.content)}</p>
          </AccordionTab>
        ))}
      </Accordion>
    </div>
  );

  const Eval = () => (
    <div>
      <Accordion activeIndex={0}>
        {headers.eval.map((header) => (
          <AccordionTab header={header.head}>
            <p className="m-0">{HtmlFromString(header.content)}</p>
          </AccordionTab>
        ))}
      </Accordion>
    </div>
  );

  const PrixVente = () => (
    <div>
      <Accordion activeIndex={0}>
        {headers.prixvente.map((header) => (
          <AccordionTab header={header.head}>
            <p className="m-0">{HtmlFromString(header.content)}</p>
          </AccordionTab>
        ))}
      </Accordion>
    </div>
  );

  const Reprise = () => (
    <div>
      <Accordion activeIndex={0}>
        {headers.reprise.map((header) => (
          <AccordionTab header={header.head}>
            <p className="m-0">{HtmlFromString(header.content)}</p>
          </AccordionTab>
        ))}
      </Accordion>
    </div>
  );

  const switchOnglet = (onglet: number) => {
    switch (onglet) {
      case 0:
        return <InfosGen />;
      case 1:
        return <Eval />;
      case 2:
        return <PrixVente />;
      case 3:
        return <Reprise />;
      default:
        return <InfosGen />;
    }
  };

  return (
    <div className="faq-container">
      <div className="faq-body">
        <h2>Questions trop fréquentes</h2>
        <div>
          <TabMenu
            model={items}
            activeIndex={onglet}
            onTabChange={(e) => setOnglet(e.index)}
          />
          {switchOnglet(onglet)}
        </div>
      </div>
    </div>
  );
};
