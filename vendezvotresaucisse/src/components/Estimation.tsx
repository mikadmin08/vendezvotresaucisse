import { useState } from 'react'
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Rating } from "primereact/rating";
import { Slider } from 'primereact/slider';
import { Image } from 'primereact/image';
import saucisseSize from '../assets/saucisse-size.png';
import { RadioButton } from 'primereact/radiobutton';

export default function Estimation() {

    const [selectedCity, setSelectedCity] = useState(null);
    const [selectMeat, setSelectedMeat] = useState(null);
    const [selectOrigine, setSelectOrigine] = useState(null);

    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    const meats = [
        { name: 'Porc', code: 'PORC' },
        { name: 'Boeuf', code: 'BOEUF' },
        { name: 'Veau', code: 'VEAU' },
        { name: 'Agneau', code: 'AGNEAU' },
        { name: 'Volaille', code: 'VOLAILLE' },
        { name: 'Vegetarien', code: 'VEGETARIEN' },
        { name: 'Zombie', code: 'ZOMBIE' },
    ]

    const origines = [{ name: 'France', code: 'FR' },
    { name: 'Allemagne', code: 'DE' },
    { name: 'Italie', code: 'IT' },
    { name: 'Espagne', code: 'ES' },
    { name: 'Etats-Unis', code: 'US' },
    { name: 'Chine', code: 'CN' },
    { name: 'Pologne', code: 'PL' }
    ];

    const [value, setValue] = useState(200);
    return (
        <Card className='saucisse-home card' title="Entrez les informations de votre saucisse et découvrez-le !">
            <div className="saucisse-home card card-body">
                <h4>Taille de votre saucisse</h4>
                <div className='saucisse-home'>
                    <div className="saucisse-home saucisse-size" style={{ overflow: 'visible', position: 'relative' }}>
                        <div className='saucisse-home saucisse-size saucisse-selected'>
                            <div>
                                <RadioButton inputId="XS" name="size" value={200} onChange={(e) => setValue(e.value as number)} checked={value === 200} />
                                <label htmlFor="XS">XS</label>
                            </div>
                            <div>
                                <RadioButton inputId="S" name="size" value={600} onChange={(e) => setValue(e.value as number)} checked={value === 600} />
                                <label htmlFor="S">S</label>
                            </div>
                            <div>
                                <RadioButton inputId="M" name="size" value={1000} onChange={(e) => setValue(e.value as number)} checked={value === 1000} />

                                <label htmlFor="M">M</label>
                            </div>
                            <div>
                                <RadioButton inputId="L" name="size" value={1500} onChange={(e) => setValue(e.value as number)} checked={value === 1500} />
                                <label htmlFor="L">L</label>
                            </div>
                            <div>
                                <RadioButton inputId="XL" name="size" value={2000} onChange={(e) => setValue(e.value as number)} checked={value === 2000} />
                                <label htmlFor="XL">XL</label>
                            </div>
                            <div>
                                <RadioButton inputId="XXL" name="size" value={3000} onChange={(e) => setValue(e.value as number)} checked={value === 3000} />
                                <label htmlFor="XXL">XXL</label>
                            </div>
                            <div>
                                <RadioButton inputId="XXXL" name="size" value={4000} onChange={(e) => setValue(e.value as number)} checked={value === 4000} />
                                <label htmlFor="XXXL">XXXL</label>
                            </div>
                            <div>
                                <RadioButton inputId="XXXXL" name="size" value={5000} onChange={(e) => setValue(e.value as number)} checked={value === 5000} />
                                <label htmlFor="XXXXL">XXXXL</label>
                            </div>
                        </div>
                        <Slider value={value} onChange={(e) => setValue(e.value as number)} min={200} max={5000} step={1} />

                        <Image
                            src={saucisseSize}
                            alt="saucisse"
                            width={String(value)}
                            height="100"
                            imageStyle={{ maxWidth: 'none', maxHeight: '100', display: 'block', position: 'relative', left: '50%', transform: 'translateX(-50%)' }}
                        />
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', marginRight: '2rem' }}>
                    <div>
                        <label htmlFor="Viande">Viande</label>
                        <Dropdown value={selectMeat} onChange={(e) => setSelectedMeat(e.value)} options={meats} optionLabel="name" placeholder="Selectionne t'as viande" className="dropdown" />
                    </div>
                    <div>
                        <label htmlFor="Type">Type</label>
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Select a City" className="dropdown" />

                    </div>
                </div>
                <label htmlFor="Origine">Origine</label>
                <Dropdown value={selectOrigine} onChange={(e) => setSelectOrigine(e.value)} options={origines} optionLabel="name" placeholder="l'origine" className="dropdown" />
                <Button className="saucisse-home button-validation">
                    <img alt="logo" src="https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg"></img>
                </Button>
                <label htmlFor="élue le meilleur dans l'estimation depuis 2025"></label>
                <Rating value={10} stars={10} cancel={false} />
                <span>Voté par 999999 Personnes</span>
            </div>
        </Card>
    )
}
