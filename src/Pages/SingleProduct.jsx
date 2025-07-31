import { useParams } from "react-router-dom"
import axios from "axios";
import { useState, useEffect } from "react";

function SingleProduct() {
    const {id} = useParams();
    const URL_API = `https://fakestoreapi.com/products/${id}`
    const [product, setProduct] = useState([])

    useEffect(()=>{
        axios.get(URL_API).then( res =>{
            setProduct(res.data)
        })
    },[])

    return(
        <>
            <div className="container">
                <div className="imageContainer">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="dataContainer">
                    <h2>{product.title}</h2>
                    <h3>{product.price}</h3>
                </div>
                <div className="descriptionContainer">
                    <p>{product.description}</p>
                </div>
            </div>
        </>
    )
}

export default SingleProduct