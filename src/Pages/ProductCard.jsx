import "./Products.css"
import { Link } from "react-router"
function ProductCard({title, price, description, image, id}) {
    return(
        <>
            <div className="cardContainer">
                <div className="imageContainer">
                    <Link to={`/products/${id}`}>
                        <img src={image} alt={title} />
                    </Link>
                </div>
                <div className="dataContainer">
                    <h2>{title}</h2>
                    <h3>{price}</h3>
                </div>
                <div className="textContainer">
                    {description}
                </div>
            </div>
        </>
    )
}
export default ProductCard