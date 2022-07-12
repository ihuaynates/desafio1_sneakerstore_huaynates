import { useContext } from "react";
import CartContext from "../../context/CartContext";

const CheckoutItem = ({ id, name, quantity, price }) => {
  return (
    <tr>
      <td className="tdsummary">{name}</td>
      <td className="tdsummary">{quantity}</td>
      <td className="tdsummary">${price * quantity}</td>
    </tr>
  );
};

export default CheckoutItem;
