"use client";
import Link from "next/link";
import useStore from "../store/CartStore";
import PaymentButton from "../ui/PaymentButton";
import Image from "next/image";
import { MdDeleteOutline } from "react-icons/md";

const CheckOutCard = () => {
  const { basketProducts, removeFromBasket, totalPrice } = useStore();

  return (
    <div className="mx-26 mb-16 -mt-4">
      <div className="w-full  px-6 py-12 bg-white shadow-lg rounded-2xl">
        {/* Titel */}
        <h2 className="text-2xl font-semibold text-center mb-8">Your Cart</h2>

        {basketProducts.length === 0 ? (
          <p className="text-center text-gray-500 py-16">
            Your basket is empty
          </p>
        ) : (
          <ul className="flex flex-col gap-6">
            {basketProducts.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between p-4 bg-gray-50 rounded-xl shadow-sm "
              >
                {/* Thumbnail + titel */}
                <div className="flex items-center gap-4">
                  <Image
                    loading="eager"
                    alt={item.title}
                    src={item.thumbnail}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <span className="font-medium  group-hover:text-red-700">
                    {item.title}
                  </span>
                </div>

                {/* Pris + remove */}
                <div className="flex items-center gap-4">
                  <span className="font-semibold group-hover:text-red-700">
                    ${item.price}
                  </span>
                  <div
                    onClick={() => removeFromBasket(item.id)}
                    className="text-red-500 group-hover:text-red-700 text-xl font-bold cursor-pointer group"
                  >
                    <MdDeleteOutline />
                  </div>
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

        {/* Checkout */}
        <Link href="/payment" className="mt-8 block w-full">
          <button className="w-full bg-black text-white py-3 rounded-full text-lg font-medium hover:bg-gray-900 transition">
            Go to Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckOutCard;
