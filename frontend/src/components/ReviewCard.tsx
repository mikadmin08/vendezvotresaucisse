import { Carousel } from "primereact/carousel";
import { Avatar } from "primereact/avatar";
import { Rating } from "primereact/rating";
import { Card } from "primereact/card";
import Joseph from "../assets/users/joseph.jpg";
import Knight from "../assets/users/knight.jpg";
import Claire from "../assets/users/claire.png";
import Samano from "../assets/users/samano.png";
import Stachlord from "../assets/users/stachLord.png";
import Vald from "../assets/users/vald.png";
import Zebre from "../assets/users/zebre.jpg";
import Yunalesca from "../assets/users/yunalesca.png";
import Lulu from "../assets/users/lulu.jpg";

export type Review = {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
};

type Props = {
  title?: string;
  reviews?: Review[];
};

const defaultReviews: Review[] = [
  {
    name: "Josef",
    avatar: Joseph,
    rating: 5,
    comment:
      "J’ai vendu ma saucisse plus vite que mon ex m’a ghostée. Service 10/10.",
  },
  {
    name: "Knight",
    avatar: Knight,
    rating: 5,
    comment:
      "J’ai quitté mon montage vidéo pour ça… et je regrette pas. Site validé par la chevalerie charcutière.",
  },
  {
    name: "Claire",
    avatar: Claire,
    rating: 5,
    comment:
      "Claire, rapide, j’ai cliqué trois fois et boum : saucisse vendue. Même ma daronne a applaudi.",
  },
  {
    name: "Samano",
    avatar: Samano,
    rating: 0,
    comment: "Petit bug : ma saucisse était trop grosse, le site a crashé.",
  },
  {
    name: "Stachlord",
    avatar: Stachlord,
    rating: 5,
    comment:
      "Ma moustache frétille encore. Le marché de la saucisse n’a jamais été aussi stylé.",
  },
  {
    name: "Val",
    avatar: Vald,
    rating: 5,
    comment:
      "Ce site m’a redonné foi en l’humanité. Et en la charcuterie artisanale. Ajouter moi sur LOL",
  },
  {
    name: "Zebre",
    avatar: Zebre,
    rating: 5,
    comment:
      "J’ai speedrunné la vente de ma saucisse. Nouveau record personnel : 32 secondes.",
  },
  {
    name: "Yunalesca",
    avatar: Yunalesca,
    rating: 5,
    comment:
      "J’ai cliqué pour la blague, j’suis restée pour le design. Ce site est une pépite croustillante.",
  },
  {
    name: "Lulu",
    avatar: Lulu,
    rating: 5,
    comment:
      "J'ai voulu estimé la saucisse dropée par le Ver des Sables, elle rentre dans les tailles proposés par le site. On va se faire plein de gils !",
  },
];

const responsiveOptions = [
  { breakpoint: "1400px", numVisible: 1, numScroll: 1 },
  { breakpoint: "1024px", numVisible: 1, numScroll: 1 },
  { breakpoint: "768px", numVisible: 1, numScroll: 1 },
];

export default function ReviewCard({
  title = "Avis de nos clients",
  reviews = defaultReviews,
}: Props) {
  const itemTemplate = (item: Review) => {
    return (
      <Card className="review-card">
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Avatar image={item.avatar} shape="circle" size="large" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <strong>{item.name}</strong>
            <Rating value={item.rating} readOnly cancel={false} />
          </div>
        </div>
        <p style={{ margin: 0 }}>{item.comment}</p>
      </Card>
    );
  };

  return (
    <div className="reviews-section" aria-label={title}>
      <h4 style={{ fontSize: "2rem", padding: 0, margin: 0 }}>
        Deja des clients satisfait !
      </h4>
      <Carousel
        value={reviews}
        itemTemplate={itemTemplate}
        circular
        numVisible={3}
        numScroll={1}
        responsiveOptions={responsiveOptions}
        showIndicators
        showNavigators
      />
    </div>
  );
}
