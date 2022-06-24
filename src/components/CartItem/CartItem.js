import "./CartItem.css";

import { useContext } from "react"
import CartContext from "../../context/CartContext"

const CartItem = ({ id, name, quantity, price }) => {
  
  const{removeItem}= useContext(CartContext)

  return (

  <tr>
    <td>{name}</td>
    <td className="alignRight">{quantity}</td>
    <td className="alignRight">${price}</td>
    <td className="alignRight">${price*quantity}</td>
    <td className="alignCenter"><button className='deleteButton' onClick={()=>removeItem(id)}>Eliminar</button></td>
  </tr>

  );
};

export default CartItem;
