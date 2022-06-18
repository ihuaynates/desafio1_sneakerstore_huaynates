import "./Counter.css"
import { useState } from "react"
import Button from "../Button/Button"


const Counter = ( {initial} )=> {

        const [count, setCount] = useState(initial)

        const decrement = () => {
            if (count>0) {
                setCount(count-1)
            }
        }

        const increment = () => {
            setCount(count+1)
        }


        return (

            <div className="counter">
                <Button handleClick={decrement } label='-'/>
                <p className="count">{count} </p>
                <Button handleClick={increment} label='+'/>
            </div>

        )

}


export default Counter