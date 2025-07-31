import { useState, useEffect} from "react"    
import "./Common.css"
import axios from "axios"
import ProductCard from "./ProductCard"
import { useProduct } from "../Contexts/ProductContext"


function Products() {
    const {products} = useProduct();

    return(
        <>
            <div className="containerProducts">
                {
                    products.map((product) => {
                        return(
                            <ProductCard 
                                key={product.id}
                                title={product.title}
                                price={product.price}
                                image={product.image}
                                description={product.description}
                                id={product.id}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

export default Products