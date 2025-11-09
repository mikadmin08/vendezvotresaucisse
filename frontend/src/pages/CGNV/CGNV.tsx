import "./index.scss";

export const CGNV = () => {
  return (
    <div className="cgnv-container">
      <div className="cgnv-body">
        <h1>Conditions Générales de Non Vente</h1>
        <ul>
          <li>
            En commandant, vous acceptez que la saucisse soit plus photogénique
            que gustative les jours pairs.
          </li>
          <li>
            Les délais de livraison oscillent entre “tout de suite” et “quand
            les étoiles s’alignent”.
          </li>
          <li>
            Les retours sont acceptés si le colis n’a pas été ouvert, goûté,
            senti, pris en photo ou mordu par votre chat.
          </li>
          <li>
            Le support client répond plus vite si vous joignez un chèque
            conséquent.
          </li>
          <li>
            Les prix peuvent varier selon la phase de la lune, la météo et
            l’humeur du développeur.
          </li>
          <li>En cas de litige, on fait pile ou face (BO 3, évidemment).</li>
        </ul>
      </div>
    </div>
  );
};
