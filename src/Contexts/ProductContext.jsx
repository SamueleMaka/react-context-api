import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


const ProductContext = createContext();

function ProductProvider ({ children }){
    const [products, setProducts] = useState([]);
    const URL_API = "https://fakestoreapi.com/products";


    useEffect(()=>{
        axios.get(URL_API).then(res=>{
            const productData = res.data
            setProducts(productData)
        })
    },[])

    return (
        <ProductContext.Provider value={{ 
            products, 
            setProducts 
            }}>

            {children}
        </ProductContext.Provider>
    )
}

function useProduct() {
    const context = useContext(ProductContext);
    return context;
}

export { ProductProvider, useProduct };