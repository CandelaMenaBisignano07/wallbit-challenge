"use client"
import { Product } from '../src/app/types/products';
import { createContext, ReactNode, useState, SetStateAction, useEffect} from 'react'
export type ContextType = {
    cart: Product[];
    addProduct: (product: Product, quantity:number) => void;
    setCart : React.Dispatch<SetStateAction<Product[]>>;
    deleteProduct : (id: Product["id"])=>void
  };

export const CartContext = createContext<ContextType|undefined>(undefined)

export default function CartContextProvider({children}: {children: ReactNode}) {
    const [cart, setCart] = useState<Product[]>([])

    useEffect(()=>{
        const myLocal = localStorage.getItem("cart");
        if(myLocal) setCart(JSON.parse(myLocal))
    },[])

    const addProduct = (product: Product, quantity:number)=>{
        setCart((prev)=>{
            if(prev.some((p)=> p.id === product.id)){
                const i = prev.findIndex((p)=> p.id === product.id)
                prev[i].quantity=quantity
                localStorage.setItem('cart', JSON.stringify(prev))
                return [...prev]
            }else{
                localStorage.setItem('cart', JSON.stringify([...prev, {...product,quantity:quantity}]))
                return [...prev, {...product, quantity}]
            }
        })
    }
    const deleteProduct = (id:Product["id"])=>{
        setCart((prev)=>{
            const newCart = prev.filter((p)=> p.id !== id)
            localStorage.setItem('cart', JSON.stringify(newCart))
            return [...newCart]
        })
    }
    return (<CartContext.Provider value={{cart, addProduct, setCart, deleteProduct}}>{children}</CartContext.Provider>)
}

