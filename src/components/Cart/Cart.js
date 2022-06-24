import { useContext } from "react"
import CartContext from "../../context/CartContext"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

const Cart = () => {

const{cart, getCartTotal, getCartQuantity}= useContext(CartContext)

    if(getCartQuantity()===0){
        return (
            <div>
            <br/>
            <h1>No tiene productos en el carrito.</h1> 
            <Link to='/' >Continuar Comprando</Link>
            </div>
        )
    }

    return (
        <div>
        <br/>
        <h1>Carrito de Compras</h1>
        <br/>
        <table className="styled-table">
            <tr>
                <th>Producto</th>
                <th className="alignRight">Cantidad</th>
                <th className="alignRight">Precio Unitario</th>
                <th className="alignRight">Precio Total</th>
                <th className="alignCenter"></th>
            </tr>
            {cart.map(prod => <CartItem key={prod.id} {...prod} removeItem /> )}
        </table>
        <br/>
        <p className="tableFooter">Total Compra: ${getCartTotal()} </p>
        <br/>
           <button className="orderButton">Generar Orden</button>
        </div>
    )
 }
    
export default Cart

