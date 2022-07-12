import { useContext } from "react";
import CartContext from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase/index";

const Cart = () => {
  const { cart, getCartTotal, getCartQuantity, clearCart } =
    useContext(CartContext);

  if (getCartQuantity() === 0) {
    return (
      <div>
        <br />
        <h1>No tiene productos en el carrito.</h1>
        <Link to="/">Continuar Comprando</Link>
      </div>
    );
  }

  return (
    <div>
      <br />
      <h1>Carrito de Compras</h1>
      <br />
      <table className="styled-table">
        <tbody>
          <tr>
            <th>Producto</th>
            <th className="alignRight">Cantidad</th>
            <th className="alignRight">Precio Unitario</th>
            <th className="alignRight">Precio Total</th>
            <th className="alignCenter"></th>
          </tr>
          {cart.map((prod) => (
            <CartItem key={prod.id} {...prod} removeItem />
          ))}
        </tbody>
      </table>
      <br />
      <p className="tableFooter">Total Compra: ${getCartTotal()} </p>
      <br />
      <div>
        <Link to="/checkout" className="checkoutButton">
          Checkout
        </Link>
        <br />
        <button
          className="checkoutButton buttonClean"
          onClick={() => clearCart()}
        >
          Limpiar Carrito
        </button>
      </div>
    </div>
  );
};

export default Cart;
