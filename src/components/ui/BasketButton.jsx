"use client";
import useStore from "../store/CartStore";

export default function AddToBasketButton({ product }) {
  const addToBasket = useStore((state) => state.addToBasket);
  return (
    <button
      onClick={() => addToBasket(product)}
      className="w-full px-4 py-2 bg-cyan-500 text-white rounded-lg font-medium  cursor-pointer"
    >
      Add to Cart
    </button>
  );
}
