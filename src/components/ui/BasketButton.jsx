"use client";
import useBasketStore from "../store/CartStore";

export default function AddToBasketButton({ product }) {
  const addToBasket = useBasketStore((state) => state.addToBasket);
  return <button onClick={() => addToBasket(product)} className="px-4 py-2 bg-cyan-500 text-white rounded-lg font-medium mx-auto cursor-pointer">Læg i kurv</button>;
}
