import { Product } from "../src/app/types/products"
import QuantityManagerButton from "./QuantityManagerButton"
import Button from "./Button"
import { useContext } from "react"
import { CartContext, ContextType } from "../context/CartContext"
export default function ProductItemList({product}:{product:Product}) {
    const myContext = useContext(CartContext) as ContextType
  return (
    <li>
        <article className="card">
            <figure>
                    <img width={50} height={50} src={product.image}/>
            </figure>
            <div className="cardInfo">
                <p>{product.title}</p>
                <p>${product.price}</p>
            </div>
            <div className="cardFooter">
                <QuantityManagerButton product={product}/>
                <Button onClick={()=>myContext.deleteProduct(product.id)}>eliminar</Button>
            </div>
        </article>
    </li>
  )
}
