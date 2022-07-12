import "./Checkout.css";
import { useContext, useState } from "react";
import CartContext from "../../context/CartContext";
import CheckoutItem from "../CheckoutItem/CheckoutItem";
import { Link } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../services/firebase/index";

const Checkout = () => {
  const { cart, getCartTotal, getCartQuantity, clearCart } =
    useContext(CartContext);

  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreateOrder = (pName, pPhone, pEmail) => {
    const objOrder = {
      buyer: {
        name: pName,
        phone: pPhone,
        email: pEmail,
      },
      items: cart,
      total: getCartTotal(),
    };

    const collectionRef = collection(db, "orders");

    addDoc(collectionRef, objOrder).then(({ id }) => {
      console.log(id);
    });

    clearCart();
  };

  if (getCartQuantity() === 0) {
    return (
      <div>
        <br />
        <h1>Pedido Generado</h1>
        <Link to="/">Continuar Comprando</Link>
      </div>
    );
  }

  return (
    <div>
      <br />
      <h1>Checkout</h1>
      <div className="checkoutForm">
        <div>
          <h2>Ingreses sus datos para generar la Orden</h2>
          <br />
          <form>
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              id="txt_name"
              onChange={updateInput}
            />
            <br />
            <input
              type="text"
              name="phone"
              placeholder="Telefono"
              id="txt_phone"
              onChange={updateInput}
            />
            <br />
            <input
              type="text"
              name="email"
              placeholder="Email"
              id="txt_email"
              onChange={updateInput}
            />
            <br />
            <br />
          </form>
          <button
            className="checkoutButton"
            onClick={() =>
              handleCreateOrder(
                document.getElementById("txt_name").value,
                document.getElementById("txt_phone").value,
                document.getElementById("txt_email").value
              )
            }
          >
            Generar Orden
          </button>
        </div>
        <div>
          <h2>Resumen de Productos</h2>
          <br />
          <table className="styled-tablesummary">
            <tbody>
              <tr>
                <th className="thsummary">Producto</th>
                <th className="thsummary">Cantidad</th>
                <th className="thsummary">Precio Total</th>
              </tr>
              {cart.map((prod) => (
                <CheckoutItem key={prod.id} {...prod} removeItem />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
