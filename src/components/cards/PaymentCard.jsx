"use client";
import Link from "next/link";
import useStore from "../store/CartStore";
import PaymentButton from "../ui/PaymentButton";
import { MdDeleteOutline } from "react-icons/md";

const PaymentCard = () => {
  const { basketProducts, removeFromBasket, getTotalPrice } = useStore();
  const totalPrice = getTotalPrice();

  return (
    <div className="max-w-2xl mx-auto px-6 py-12 bg-white shadow-sm rounded-2xl">
      <h2 className="text-2xl font-semibold text-center mb-8">Your Cart</h2>

      {basketProducts.length === 0 ? (
        <p className="text-center text-gray-500 py-16">Your basket is empty</p>
      ) : (
        <ul className="flex flex-col gap-6">
          {basketProducts.map((item) => (
            <li
              className="flex items-center justify-between p-4 bg-gray-50 rounded-xl shadow-sm"
              key={item.id}
            >
              {/* Wrap ikon + tekst i en hover-gruppe */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div
                  onClick={() => removeFromBasket(item.id)}
                  className="text-red-500 group-hover:text-red-700 text-xl font-bold"
                >
                  <MdDeleteOutline />
                </div>

                {/* Titel ændrer farve når gruppen hoveres */}
                <span className="font-medium group-hover:text-red-700 transition-colors">
                  {item.title}
                </span>
                <span className="font-medium group-hover:text-red-700 transition-colors">
                  {item.quantity}
                </span>
                <span className="font-semibold  group-hover:text-red-700 transition-colors">
                  ${item.price}
                </span>
              </div>
            </li>
          ))}

          {/* Total */}
          <li className="flex justify-between items-center pt-4 border-t border-gray-200 text-lg font-semibold">
            <span>Total</span>
            <span>${totalPrice}</span>
          </li>
        </ul>
      )}

      {/* Checkout button */}
      <Link
        href="/payment"
        className="mt-8 block w-full text-center bg-black text-white rounded-lg py-3 text-lg font-medium hover:bg-button transition"
      >
        Go to Checkout
      </Link>
    </div>
  );
};

export default PaymentCard;
