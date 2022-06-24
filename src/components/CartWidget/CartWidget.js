import { useContext } from "react";
import cartWidgetImg from "../images/cartwidget.png";
import "./CartWidget.css";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";


const CartWidget = () => {

const {getCartQuantity} = useContext(CartContext)

const totalQuantity=getCartQuantity()

    return(

    <Link to='/cart' className="cartw" >
    <img src={cartWidgetImg} className='cartWidget' />
    <p className="cartWNumber">{totalQuantity}</p>
    </Link>

    )
}

export default CartWidget