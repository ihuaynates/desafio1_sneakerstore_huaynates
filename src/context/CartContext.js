import { useState, createContext } from "react";


export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])

const addItem = (productToAdd) => {

    if( !isInCart(productToAdd.id))   {
        setCart([...cart, productToAdd])
    }
}

const removeItem = (id) => {
    const cartWithoutProduct = cart.filter(prod=>prod.id !== id)

    setCart(cartWithoutProduct)
}

const isInCart=(id) => {
    return cart.some(prod => prod.id === id)
}

const getCartQuantity =() => {

let totalQuantity =0

cart.forEach(prod => {
    console.log(prod.quantity)
totalQuantity+=prod.quantity
})

return totalQuantity

}

const getCartTotal =() => {

    let totalCart =0
    
    cart.forEach(prod => {
        console.log(prod.quantity)
        totalCart+=prod.quantity*prod.price
    })
    
    return totalCart
    
    }


return (

        <CartContext.Provider value={{cart,addItem,removeItem,isInCart,getCartQuantity,getCartTotal}}  >
        {children}
        </CartContext.Provider>

)

}

export default CartContext