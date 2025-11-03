import { useState } from 'react'
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Rating } from "primereact/rating";

export default function Estimation() {

    const [selectedCity, setSelectedCity] = useState(null);

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <Card className='saucisse-home card' title="Entrez les informations de votre saucisse et découvrez-le !">
            <div className="saucisse-home card card-body">
                <label htmlFor="Region">Region</label>
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Select a City" className="dropdown" />
                <label htmlFor="saveur">saveur</label>
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Select a City" className="dropdown" />
                <label htmlFor="modèle">modèle</label>
                <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Select a City" className="dropdown" />
                <Button className="saucisse-home button-validation">
                    <img alt="logo" src="https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg" className="h-2rem"></img>
                </Button>
                <label htmlFor="élue le meilleur dans l'estimation depuis 2025"></label>
                <Rating value={10} stars={10} cancel={false} />
                <span>Voté par 999999 Personnes</span>
            </div>

        </Card>
    )
}
