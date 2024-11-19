"use client"
import { FormEvent } from "react"
import { useContext } from "react"
import { CartContext, ContextType } from "../context/CartContext"
import Button from "./Button"
import { getProduct } from "../actions/cart"
import { ErrorContext, ErrorContextType } from "../context/ErrorContext"
import { redirect } from "next/navigation"
export default function ProductForm() {
    const myCartContext =useContext(CartContext) as ContextType
    const myErrorContext = useContext(ErrorContext) as ErrorContextType
    const handleClick = async(event: FormEvent<HTMLFormElement>)=>{
        try {
            event.preventDefault()
            const form = new FormData(event.currentTarget)
            const id = form.get('id')
            const quantity = form.get('quantity')
            if(id === null || quantity === null){
                myErrorContext.setError("a campus is null") 
                redirect("/error")
            }
            const product = await getProduct(parseInt(id as string))
            if(!product){
                myErrorContext.setError("product not found") 
                redirect("/error")
            } else myCartContext.addProduct(product,parseInt(quantity as string))
        } catch (error) {
            if(error instanceof Error) {
                myErrorContext.setError("product not found") 
                redirect("/error")
            }
            else throw new Error('undefined error')
        }
    }
    return (
        <>
            <form onSubmit={handleClick}>
                <input placeholder="id" type="number" required name="id" min={1}/>
                <input placeholder="product quantity" type="number" required name="quantity" min={1}/>
                <Button type="submit">agregar</Button>
            </form>
        </>

    )
}
