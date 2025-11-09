import { useMemo, useState } from "react";
import { DataView } from "primereact/dataview";
import { InputText } from "primereact/inputtext";
import { Tag } from "primereact/tag";
import { Checkbox } from "primereact/checkbox";
import { Button } from "primereact/button";
import "./Acheter.scss";

type Sausage = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  categories: string[];
};

const ITEMS: Sausage[] = [
  {
    id: 1,
    image: "https://www.tompress.com/img/ybc_blog/post/recsaupar.jpg",
    title: "Saucisse artisanale",
    description: "Saucisse fumée, recette traditionnelle.",
    price: 7.9,
    categories: ["Fumée", "Tradition"],
  },
  {
    id: 2,
    image:
      "https://img.cuisineaz.com/1280x720/2024/11/03/i201846-saucisse-de-porc-a-l-ail.webp",
    title: "Saucisse de campagne",
    description: "Texture ferme, goût relevé.",
    price: 6.5,
    categories: ["Campagne", "Tradition"],
  },
  {
    id: 3,
    image:
      "https://www.maison-garcia.fr/images/com_hikashop/upload/garcia-8504.jpg",
    title: "Saucisse aux herbes",
    description: "Aromatiques fines, herbes fraîches.",
    price: 8.2,
    categories: ["Herbes", "Gourmet"],
  },
  {
    id: 4,
    image:
      "https://www.stoeffler.com/app/uploads/2019/02/saucisse-viande-photo-800x533.jpg",
    title: "Saucisse grillée",
    description: "Parfaite pour barbecues et apéros.",
    price: 9.4,
    categories: ["Barbecue", "Apero"],
  },
  {
    id: 5,
    image:
      "https://epicier.ca/wp-content/uploads/2020/06/saucisse-bbq-e1699022737962.jpg",
    title: "Saucisse épicée",
    description: "Un coup de chaud pour les papilles.",
    price: 7.2,
    categories: ["Epicee", "Barbecue"],
  },
  {
    id: 6,
    image:
      "https://assets.afcdn.com/recipe/20170602/23375_w1024h576c1cx2460cy1640.webp",
    title: "Saucisse gourmet",
    description: "Ingrédients sélectionnés, goût raffiné.",
    price: 11.9,
    categories: ["Gourmet"],
  },
];

export const Acheter = () => {
  const [query, setQuery] = useState("");
  //   const [layout, setLayout] = useState<"list" | "grid">("list");
  const layout = "list";
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const allCategories = useMemo(() => {
    const set = new Set<string>();
    ITEMS.forEach((i) => i.categories.forEach((c) => set.add(c)));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return ITEMS.filter((i) => {
      const matchesQuery =
        !q ||
        i.title.toLowerCase().includes(q) ||
        i.description.toLowerCase().includes(q);

      const matchesCategory =
        selectedCategories.length === 0 ||
        i.categories.some((c) => selectedCategories.includes(c));

      return matchesQuery && matchesCategory;
    });
  }, [query, selectedCategories]);

  const itemTemplate = (item: Sausage) => {
    return (
      <div className="acheter-item">
        <img src={item.image} alt={item.title} />
        <div className="acheter-item-content">
          <div className="acheter-item-header">
            <h4 className="acheter-item-title">{item.title}</h4>
            <Tag value={`${item.price.toFixed(2)} €`} severity="warning" />
          </div>
          <span className="acheter-item-description">{item.description}</span>
          <div
            style={{ marginTop: 8, display: "flex", gap: 6, flexWrap: "wrap" }}
          >
            {item.categories.map((c) => (
              <Tag key={c} value={c} severity="info" />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      style={{
        padding: "1rem",
        display: "flex",
        justifyContent: "space-evenly",
        gap: "2rem",
      }}
    >
      <aside className="acheter-aside">
        <h3>Rechercher</h3>
        <span className="p-input-icon-left acheter-search">
          <InputText
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher une saucisse..."
          />
        </span>

        <div style={{ marginTop: 12 }}>
          <h4>Catégories</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {allCategories.map((c) => (
              <label
                className="p-checkbox"
                key={c}
                style={{ display: "flex", alignItems: "center", gap: 8 }}
              >
                <Checkbox
                  inputId={`cat-${c}`}
                  value={c}
                  onChange={(e) => {
                    const checked = e.checked;
                    setSelectedCategories((prev) =>
                      checked ? [...prev, c] : prev.filter((x) => x !== c)
                    );
                  }}
                  checked={selectedCategories.includes(c)}
                />
                <span style={{ textTransform: "capitalize" }}>
                  {c.replace(/_/g, " ")}
                </span>
              </label>
            ))}

            <div style={{ marginTop: 8 }}>
              <Button
                label="Effacer"
                className="p-button-text"
                onClick={() => setSelectedCategories([])}
              />
            </div>
          </div>
        </div>
      </aside>

      <section style={{ width: "100%" }}>
        <DataView
          value={filtered}
          itemTemplate={itemTemplate}
          layout={layout}
          paginator
          rows={6}
          emptyMessage="Aucune saucisse ne correspond à votre recherche."
        />
      </section>
    </div>
  );
};
