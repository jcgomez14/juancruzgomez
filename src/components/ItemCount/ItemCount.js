import Button from '../Button/Button'
import { useState } from 'react'

const FuctionCounter = (props) => {
    const [count, setCount] = useState(0)

    const decrement = () => {
        if(count > 0){
            setCount(count - 1)
        }
    }

    const increment = () => {
        if (count < 10){
            setCount( count + 1)
        }
    }


    return (
        <>
        <h3>{count}</h3>
        <Button onClick={decrement} label='-'/>
        <Button onClick={increment} label='+'/>
        <Button label='Agregar al carrito'/>
        </>
    )
}

export default FuctionCounter 