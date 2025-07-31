import { useState, useEffect} from "react"    
import "./Common.css"
import axios from "axios"
import ProductCard from "./ProductCard"

function Products() {
    const URL_API = "https://fakestoreapi.com/products"
    const [product, setProduct] = useState([])

    useEffect(()=>{
        axios.get(URL_API).then(res=>{
            const productData = res.data
            setProduct(productData)
        })
    },[])

    return(
        <>
            <div className="containerProducts">
                {
                    product.map((product) => {
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