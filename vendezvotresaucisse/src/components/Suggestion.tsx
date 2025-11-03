import { Carousel } from 'primereact/carousel';
import { Image } from 'primereact/image';
import suggestions from '../data/suggestions.json'

export default function Suggestion() {
    // mettre des images qui font la meme taille
    const products = suggestions || [];

    const itemTemplate = (item: any) => {
        return (
            <div className="suggestion-item">
                <div style={{ textAlign: 'center' }}>
                    <Image src={item.image} alt={item.title} width='500' preview={false} />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            </div>
        );
    };

    return (
        <>
            <Carousel
                autoplayInterval={3000}
                value={products}
                numVisible={1}
                numScroll={1}
                showIndicators={false}
                itemTemplate={itemTemplate}
            />
        </>
    )
}
