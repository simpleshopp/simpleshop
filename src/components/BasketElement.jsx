"use client";
import useStore from "../store/cartStore";

const BasketElement = ({ productsDetails }) => {
  const { basketProducts, addToBasket, removeFromBasket } = useStore();

  return (
    <div>
      <button
        onClick={() => addToBasket(productsDetails)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        <span>Læg i kurv</span>
        <span className="ml-2">+</span>
      </button>

      {/* Vis kurvens indhold direkte */}
      <h3 className="mt-4">Kurv</h3>
      {basketProducts.length === 0 ? (
        <p>Kurven er tom</p>
      ) : (
        <ul className="mt-2">
          {basketProducts.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center mb-2"
            >
              <span>{item.title}</span>
              <span>{item.price} kr</span>
              <button
                onClick={() => removeFromBasket(item.id)}
                className="ml-2 text-red-500!"
              >
                x
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BasketElement;
