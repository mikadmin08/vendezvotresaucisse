import { Image } from 'primereact/image';

export const Home = () => {
    return (
        <div className="top-blue-saucisse-container">
            <h4 className="saucisse-home title">Combien vaut votre Saucisse ?</h4>
            <div className='saucisse-home hero'>

            <ul className="saucisse-home list">
                <li><i className="pi pi-check"></i>Évaluation 100% gratuite</li>
                <li><i className="pi pi-check"></i>Rapide et facile</li>
                <li><i className="pi pi-check"></i>Obtenez votre prix de vente directement en ligne</li>
            </ul>
           <Image style={{position:"relative", left:"30%", scale:"2"}} src="https://content.wirkaufendeinauto.de/static/car_images/wkda-white-car-desktop_optimized.webp" alt="Image" preview width="250" />

            </div>
        </div>
    )
}

