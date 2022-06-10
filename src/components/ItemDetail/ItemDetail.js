import "./ItemDetail.css";

const ItemDetail = ({
  id,
  name,
  img,
  model,
  price,
  colorway,
  category,
  description,
}) => {
  return (
    <>
      <div className="cardDetail">
        <div className="cardDetailImg">
          <img src={img} alt={name} className="cardDetailImg" />
        </div>
        <div className="cardDetailContainer">
          <p className="cardDetailText cardDetailTextSubTitulo">{category}</p>
          <br />
          <p className="cardDetailText cardDetailTextTitulo">{name}</p>
          <p className="cardDetailText cardDetailTextTitulo">{model}</p>
          <p className="cardDetailText cardDetailTextSubTitulo">
            Colorway: {colorway}
          </p>
          <br />
          <br />
          <p className="cardDetailText cardDetailTextPrecio">${price}</p>
          <br />
          <br />
          <p className="cardDetailText cardDetailTextTitulo">Description</p>
          <p className="cardDetailText cardDetailTextDescription">
            {description}
          </p>
          <button className="buttonAdd">Agregar al Carrito</button>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
