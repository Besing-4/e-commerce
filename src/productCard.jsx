import Image from "./Image"
const ProductCard = (props) =>{
    return(
        <div className="product shadow col-3">
            <Image image={props.product.image} />
            <p>{props.product.name}</p>
            <span>{props.product.price}</span>
            <button onClick={()=>{props.addToCart(props.product)}}>Add to cart</button>
        </div>
    )
}

export default ProductCard