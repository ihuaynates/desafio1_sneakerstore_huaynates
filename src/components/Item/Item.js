const Item = ({ img, model, name, price }) => {
  return (
    <div className="card">
      <div className="cardImg">
        <img src={img} alt={name} className="cardImg" />
      </div>
      <div className="cardContainer">
        <p className="cardText cardTextTitulo">{name}</p>
        <p className="cardText cardTextSubTitulo">{model}</p>
        <p className="cardText cardTextPrecio">${price}</p>
      </div>
    </div>
  );
};

export default Item;
