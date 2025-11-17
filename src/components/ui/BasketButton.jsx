"use client";
import useBasketStore from "../store/basketStore"

export default function AddToBasketButton({ product }){
    const addToBasket = useBasketStore((state) => state.addToBasket);
    return(
        <button onClick={() => addToBasket(product)}>
            Læg i kurv
        </button>
    )
}