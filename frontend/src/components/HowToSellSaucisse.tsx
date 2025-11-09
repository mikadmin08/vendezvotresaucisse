import { Card } from "primereact/card";
import { Image } from "primereact/image";
import seller1 from '../assets/users/vendeur1.jpg'
import seller2 from '../assets/users/vendeur2.jpg'
import seller3 from '../assets/users/vendeur3.jpg'
export default function HowToSellSaucisse() {
    return (
        <>
            <h1 style={{ textAlign: 'center', fontSize: '3rem' }}>Comment vendre vos saucisses</h1>
            <div className="howtosell-container">
                <Card>
                    <Image width="250" src={seller1} alt="vendeur1" preview />
                    <h1>1. Recevez votre estimation de saucisse</h1>
                    <ul className="howtosell-list">
                        <li><span><i className="pi pi-angle-right" style={{ fontSize: '1rem' }}></i>Utilisez notre outil de cotation pour évaluer gratuitement votre saucisse.</span></li>
                        <li><span><i className="pi pi-angle-right" style={{ fontSize: '1rem' }}></i>Recevez un prix de vente final par e-mail (au centimètre près).</span></li>
                        <li><span><i className="pi pi-angle-right" style={{ fontSize: '1rem' }}></i>Vous vendez uniquement si vous sentez que c’est le bon moment.</span></li>
                    </ul>
                </Card>
                <Card>
                    <Image width="250" src={seller2} alt="vendeur2" preview />
                    <h1>2. Prenez un rendez-vous de dégustation</h1>
                    <ul className="howtosell-list">
                        <li><span><i className="pi pi-angle-right" style={{ fontSize: '1rem' }}></i>Choisissez l'un de nos 80 comptoirs de grillades pour finaliser la transaction.</span></li>
                        <li><span><i className="pi pi-angle-right" style={{ fontSize: '1rem' }}></i>Sur place, un expert certifié goûte et rédige un contrat de vente charcutière.</span></li>
                        <li><span><i className="pi pi-angle-right" style={{ fontSize: '1rem' }}></i>Réseau national de barbecues : service rapide, fumé, et simplifié.</span></li>
                    </ul>
                </Card>
                <Card>
                    <Image width="250" src={seller3} alt="vendeur3" preview />
                    <h1>3. Mange t'as saucisse</h1>
                    <ul className="howtosell-list">
                        <li><span><i className="pi pi-angle-right" style={{ fontSize: '1rem' }}></i>Une fois la saucisse validée, bah tu l'as recupere.</span></li>
                        <li><span><i className="pi pi-angle-right" style={{ fontSize: '1rem' }}></i>On s'occupe de rien .</span></li>
                        <li><span><i className="pi pi-angle-right" style={{ fontSize: '1rem' }}></i>Service 100 % gratuit, sans poêle d’engagement.</span></li>
                    </ul>
                </Card>
            </div>
        </>
    )
}
