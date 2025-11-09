import { useState } from 'react'
import type { FormEvent } from 'react'
import { Card } from 'primereact/card';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { Rating } from "primereact/rating";
import { Slider } from 'primereact/slider';
import { Image } from 'primereact/image';
import saucisseSize from '../assets/saucisse-size.png';
import { RadioButton } from 'primereact/radiobutton';
import { GoogleGenAI } from "@google/genai";
import './estimation.scss';

export default function Estimation() {

    const [isLoading, setIsloading] = useState(false);
    const [hasResponse, setHasResponse] = useState(false);
    const [selectMeat, setSelectedMeat] = useState(null);
    const [selectOrigine, setSelectOrigine] = useState(null);
    const [selectType, setSelectType] = useState(null);
    const [estimationResult, setEstimationResult] = useState<string | null>(null);

    const meats = [
        { name: 'Porc', code: 'PORC' },
        { name: 'Boeuf', code: 'BOEUF' },
        { name: 'Veau', code: 'VEAU' },
        { name: 'Agneau', code: 'AGNEAU' },
        { name: 'Volaille', code: 'VOLAILLE' },
        { name: 'Vegetarien', code: 'VEGETARIEN' },
        { name: 'Zombie', code: 'ZOMBIE' },
    ]

    const origines = [
        { name: 'Strasbourg', code: 'STR' },
        { name: 'France', code: 'FR' },
        { name: 'Francfort', code: 'FFM' },
        { name: 'Toulouse', code: 'TLS' },
        { name: 'Lyon', code: 'LYO' },
        { name: 'Allemagne', code: 'DE' },
        { name: 'Italie', code: 'IT' },
        { name: 'Espagne', code: 'ES' },
        { name: 'Etats-Unis', code: 'US' },
        { name: 'Chine', code: 'CN' },
        { name: 'Pologne', code: 'PL' }
    ];

    const types = [{ name: 'sèche', code: 'SS' },
    { name: 'fraîche', code: 'SF' },
    { name: 'fumée', code: 'SM' },
    { name: 'cuite', code: 'SC' },
    { name: 'épicée', code: 'SE' },
    { name: 'végétarienne', code: 'SV' },
    { name: 'luxe', code: 'SL' },

    ]

    const [value, setValue] = useState(200);

    async function handleEstimationSaucisse(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsloading(true);
        console.log('estimation')

        const apiKey = (import.meta.env.GEMINI_KEY);
        const ai = new GoogleGenAI({ apiKey });

        const systemPrompt = `Tu es un expert charcutier rigolo qui estime la valeur d'une saucisse un peu n importe comment
        car ce n est pas une vraie estimation a la fin de t as reponse tu dois terminer par la phrase suivante: N'oubliez pas de faire un don pour CDC Potiron Family !'.
        Consignes:
        - Réponds en français bref.
        - Utilise les données fournies (taille, viande, type, origine).
        - Donne un prix estimatif, une fourchette, et 2-3 facteurs d'influence.
        - Retourne aussi une note de qualité sur 10.
        - Ne parle pas de la t aille en pixel mais en diamètre en cm.
        - Soit drole sans etre cringe `;

        const meatLabel = (selectMeat as any)?.name ?? '—';
        const typeLabel = (selectType as any)?.name ?? '—';
        const origineLabel = (selectOrigine as any)?.name ?? '—';

        const userPrompt = `Données formulaire:
        - Taille: ${value}cm
        - Viande: ${meatLabel}
        - Type: ${typeLabel}
        - Origine: ${origineLabel}

        Objectif: propose une estimation de prix et une courte explication.`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: [
                { role: 'model', parts: [{ text: systemPrompt }] },
                { role: 'user', parts: [{ text: userPrompt }] },
            ],
            config: {
                temperature: 0.7,
            }
        });

        // Store the model response so it can be rendered
        setEstimationResult((response as any)?.text ?? String(response));
        setHasResponse(true);
        setIsloading(false);
        console.log(response.text);
    }

    async function handleResetEstimation() {
        setHasResponse(false);
        setEstimationResult(null);
    }

    return (
        <Card className='saucisse-home card' title="Entrez les informations de votre saucisse et découvrez-le !">
            {!hasResponse && <form onSubmit={handleEstimationSaucisse} className="saucisse-home card card-body">
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
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <label htmlFor="Viande">Viande</label>
                        <Dropdown value={selectMeat} onChange={(e) => setSelectedMeat(e.value)} options={meats} optionLabel="name" name='viande' placeholder="Selectionne t'as viande" className="dropdown" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <label htmlFor="Type">Type</label>
                        <Dropdown value={selectType} onChange={(e) => setSelectType(e.value)} options={types} optionLabel="name" name='type' placeholder="Selectionne un type" className="dropdown" />
                    </div>
                </div>
                <label htmlFor="Origine">Origine</label>
                <Dropdown value={selectOrigine} onChange={(e) => setSelectOrigine(e.value)} options={origines} optionLabel="name" name='origine' placeholder="l'origine" className="dropdown" />

                <Button
                    type="submit"
                    loading={isLoading}
                    className="saucisse-home button-validation"
                    label="J'estime ma saucisse">
                </Button>
                <label htmlFor="élue le meilleur dans l'estimation depuis 2025"></label>
                <Rating value={10} stars={10} cancel={false} />
                <span>Voté par 999999 Personnes</span>
            </form>}

            {hasResponse && <div className='saucisse-home estimation-result'>
                <Button icon="pi pi-user" rounded outlined severity="info" aria-label="User" onClick={handleResetEstimation} />
                <div style={{ whiteSpace: 'pre-wrap' }}>{estimationResult}</div>
            </div>
            }
        </Card>
    )
}
