"use client";
import useStore from "../store/CartStore";

export default function AddToBasketButton({ product }) {
  const addToBasket = useStore((state) => state.addToBasket);
  

  // Funktion der tilføjer produktet til kurven
  const handleAddToCart = () => {
    addToBasket(product);
  };
  return (
    <button
      onClick={() => addToBasket(product)}
      // onClick={handleAddToCart}
      className="w-full px-4 py-2 bg-cyan-500 text-white rounded-lg font-medium  cursor-pointer"
    >
      Add to Cart
    </button>
    
  );
}
