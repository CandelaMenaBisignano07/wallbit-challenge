import React, { useContext, useEffect, useState } from 'react'
import Button from './Button'
import { CartContext, ContextType } from '../context/CartContext'
import { Product } from '../src/app/types/products'
export default function QuantityManagerButton({product}:{product:Product}) {
    const [count, setCount] = useState(product.quantity)
    const myContext = useContext(CartContext) as ContextType

    useEffect(()=>{
        if(count === 0 ) myContext.deleteProduct(product.id)
        else myContext.addProduct(product, count)
    }, [count])

    useEffect(()=>{
        setCount(product.quantity)
    }, [product.quantity, myContext, product])
    return(
        <div className='quantityButton'>
            <Button onClick={()=>{setCount((prev)=>++prev)}}>+</Button>
            <p>{count}</p>
            <Button onClick={()=>{setCount((prev)=>--prev)}
            }>-</Button>
        </div>
    )
}
