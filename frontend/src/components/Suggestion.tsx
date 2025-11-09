import { Carousel } from 'primereact/carousel';
import { Image } from 'primereact/image';
import suggestions from '../data/suggestions.json';

export default function Suggestion() {
    const products = suggestions || [];

    const itemTemplate = (item: any) => {
        return (
            <div className="suggestion-item">
                <div className="suggestion-content">
                    <div className="suggestion-image">
                        <Image className="suggestion-image" src={item.image} alt={item.title} preview={false} />
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </div>
            </div>
        );
    };

    return (
        <Carousel
            autoplayInterval={3000}
            value={products}
            numVisible={1}
            numScroll={1}
            showIndicators={false}
            circular
            itemTemplate={itemTemplate}
        />
    );
}
