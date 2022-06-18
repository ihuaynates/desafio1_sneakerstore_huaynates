import { useContext } from "react";
import cartWidgetImg from "../images/cartwidget.png";
import "./CartWidget.css";
import CartContext from "../../context/CartContext";


const CartWidget = () => {

const {getCartQuantity} = useContext(CartContext)

const totalQuantity=getCartQuantity()

    return(

    <div className="cart" >
    <img src={cartWidgetImg} className='cartWidget' />
    <p className="cartNumber">{totalQuantity}</p>
    </div>

    )
}

export default CartWidget