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
                    <h3 style={{ margin: '0.25rem 0', fontSize: '1rem' }}>{item.title}</h3>
                    <p style={{ margin: 0, color: '#666', fontSize: '0.875rem' }}>{item.description}</p>
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
                circular
                showIndicators
                indicatorsContentClassName="flex gap-1 mt-2"
                pt={{
                    indicator: { className: 'w-2 h-2' }
                }}
                itemTemplate={itemTemplate}
            />
        </>
    )
}
