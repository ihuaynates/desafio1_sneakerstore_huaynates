import "./ItemDetail.css";
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import CartContext from "../../context/CartContext";
import { Link } from 'react-router-dom'

const ItemDetail = ({id,name,img,model,price,colorway,category,description,stock}) => {

const [quantityAdded, setQuantityAdded] =useState(0)

const {addItem} = useContext(CartContext)

const handleOnAdd = (quantity) => {

  addItem({id,name,price,quantity})
  setQuantityAdded(quantity)

}

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
          <br />
          <br />
          {quantityAdded===0 ? <ItemCount stock={stock} onAdd={handleOnAdd}/> : <Link to='/cart' >Terminar Compra </Link>  }
          <br />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
