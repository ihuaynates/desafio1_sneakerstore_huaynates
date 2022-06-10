import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, img, model, name, price }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={img} alt={name} className="cardImg" />
      </div>
      <div className="cardContainer">
        <p className="cardText cardTextTitulo">{name}</p>
        <p className="cardText cardTextSubTitulo">{model}</p>
        <p className="cardText cardTextPrecio">${price}</p>
        <br />
        <div className="linkButton">
          <Link to={`/detail/${id}`} className="linkButton">
            Ver Detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
