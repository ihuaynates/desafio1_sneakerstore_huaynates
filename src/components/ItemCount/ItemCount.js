import './ItemCount.css'
import { useState } from 'react'

const ItemCount= ({stock=0, initial=1, onAdd}) => {

    const [quantity, setQuantity] = useState(initial)


    const increment= () => {
        if(quantity<stock) {
            setQuantity(quantity+1)
        }

    }

    const decrement= () => {
        if(quantity>1) {
            setQuantity(quantity-1)
        }

    }

    return (

        <div>
        <div className="counter">
            <button onClick={decrement }> - </button>
            <p className="count">{quantity} </p>
            <button onClick={increment }> + </button>
        </div>
        <div>
            <button className='buttonAdd' onClick={()=>onAdd(quantity)} >Agregar al Carrito</button>
        </div>
        </div>

    )



}

export default ItemCount