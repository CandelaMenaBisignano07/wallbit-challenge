"use client"

import { useContext, useEffect } from "react"
import { CartContext, ContextType } from "../context/CartContext"
import ProductItemList from "./ProductItemList"
import TotalCart from "./TotalCart"

export default function ProductList() {
    const myContext =  useContext(CartContext) as ContextType
    useEffect(()=>{
        console.log(myContext.cart)
    }, [myContext.cart])
  return (
    <>
    <ul>
        {
            myContext.cart.length > 0 ? myContext.cart.map((p)=> <ProductItemList key={p.id} product={p}/>): <p>no hay productos tdvia</p>
        }
    </ul>
    <TotalCart price={myContext.cart.reduce((i, p)=> i+=p.quantity*p.price ,0)}/>
    </>
  )
}
