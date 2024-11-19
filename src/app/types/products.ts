type ImageUrl = `https://fakestoreapi.com/img/${string}.jpg`


export interface Product{
    id:number,
    title:string,
    price:number,
    category:"electronics"|"jewelery"|"men's clothing"|"women's clothing",
    description:string,
    image:ImageUrl,
    quantity:number
}