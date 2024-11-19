"use server"

import { Product } from "../types/products";

export const getProduct = async(id: number): Promise<Product|undefined> => {
    console.log('hola')
        const product = await fetch(`https://fakestoreapi.com/products/${id}`)
        if(!product.ok) return undefined
        const toJson:unknown = await product.json();
        console.log(toJson)
        if(!(typeof toJson == "object" && toJson !== null && toJson !== undefined)) return undefined
        return toJson as Product
};