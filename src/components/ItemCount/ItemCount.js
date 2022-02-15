import Button from '../Button/Button'
import React, { useState } from 'react'

const FuctionCounter = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(1)

  const decrement = () => {
        if (count > initial){
            setCount (count - 1)
        }
    }

    const increment = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }
    


    return (
        <>
        <h3>{count}</h3>
        <Button onClick={decrement} label='-'/>
        <Button onClick={increment} label='+'/>
        <Button onClick={()=>onAdd(count)} label='Agregar al carrito'/>
        </>
    )
}

export default FuctionCounter 