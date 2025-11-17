"use client";
import useStore from "../store/basketStore"

const ProductCard = ({ productsDetails }) => {
    const { basketProducts, addToBasket, removeFromBasket} = useStore();
    console.log("in basket:", basketProducts)
    return ( 
<button onClick={() => addToBasket(productsDetails)}>
<span>Add to Cart</span>
<span>+</span>

</button>

     );
}
 
export default ProductCard;