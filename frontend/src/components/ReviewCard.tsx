import { Carousel } from "primereact/carousel";
import { Avatar } from "primereact/avatar";
import { Rating } from "primereact/rating";
import { Card } from "primereact/card";
import Clara from "../assets/users/clara.png";
import Knight from "../assets/users/knight.jpg";
import ResidentMaiden from "../assets/users/residentmaiden.png";
import Samano from "../assets/users/samano.png";
import Stachlord from "../assets/users/stachLord.png";
import Vald from "../assets/users/vald.png";
import Zerator from "../assets/users/zerator.jpg";
import Yunaleka from "../assets/users/yunaleka.png";

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
  { name: "Clara", avatar: Clara, rating: 5, comment: "Caca proute" },
  {
    name: "Knight",
    avatar: Knight,
    rating: 4,
    comment: "Très pratique, j'ai obtenu un prix en 2 minutes.",
  },
  {
    name: "ResidentMaiden",
    avatar: ResidentMaiden,
    rating: 5,
    comment: "Interface claire, super expérience.",
  },
  {
    name: "Samano",
    avatar: Samano,
    rating: 4,
    comment: "Bon accompagnement du début à la fin.",
  },
  {
    name: "Stachlord",
    avatar: Stachlord,
    rating: 5,
    comment: "Ravie du résultat, rapide et efficace !",
  },
  {
    name: "Val",
    avatar: Vald,
    rating: 5,
    comment: "Ravie du résultat, rapide et efficace !",
  },
  {
    name: "Zerator",
    avatar: Zerator,
    rating: 5,
    comment: "Ravie du résultat, rapide et efficace !",
  },
  {
    name: "Yunaleka",
    avatar: Yunaleka,
    rating: 5,
    comment: "Ravie du résultat, rapide et efficace !",
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
    <h4 style={{fontSize:'2rem', padding:0, margin:0}}>Deja des clients satisfait !</h4>
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
