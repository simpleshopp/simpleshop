"use client";
import Link from "next/link";
import useStore from "../store/CartStore";
import PaymentButton from "../ui/PaymentButton";
import Image from "next/image";

const CheckOutCard = () => {
  const { basketProducts, removeFromBasket, totalPrice } = useStore();

  return (
    <div>
      <h2 className="text-center">Your Cart</h2>
      {basketProducts.length === 0 ? (
        <p className="m-10 flex justify-center">your basket is empty</p>
      ) : (
        <ul className="flex flex-col gap-4 ">
          {basketProducts.map((item) => (
            <li className="flex items-center pt-4" key={item.id}>
              <button
                onClick={() => removeFromBasket(item.id)}
                className="p1-6 text-2xl"
              >
                x
              </button>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex-row items-center gap-2">
                  <span>
                    <Image
                      loading="eager"
                      alt="hej"
                      src={item.thumbnail}
                      width={100}
                      height={50}
                      className=""
                    />
                  </span>

                  <span className="flex justify-center">{item.title}</span>
                </div>
                <div>
                  <span>${item.price}</span>
                </div>
              </div>
            </li>
          ))}
          <div className="mb-8 flex justify-end gap-4">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </ul>
      )}
      <Link
        href="/payment"
        className="mx-auto flex rounded-full px-8 py-2 cursor-pointer justify-end"
      >
        <button className="px-6 py-2">Buy</button>
      </Link>
    </div>
  );
};

export default CheckOutCard;
