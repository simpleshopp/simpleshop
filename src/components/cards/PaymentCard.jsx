import Link from "next/link";

import PaymentButton from "../ui/PaymentButton";
const PaymentCard = () => {
  return (
    <>
      <h2 className="text-center">Your Cart</h2>
      {basketProducts.length === 0 ? (
        <p className="m-10 flex justify-center">your basket is empty</p>
      ) : (
        <ul className="flex flex-col gap-4">
          {basketProducts.map((item) => {
            console.log("in basket:", item.quantity);
            return (
              <li className="flex items-center pt-4" key={item.id}>
                <button
                  onClick={() => removeFromBasket(item.id)}
                  className="p1-6 text-2xl"
                >
                  {" "}
                  x
                </button>
                <div className="flex w-full justify-between">
                  <span>{item.title}</span>
                  <span>${item.price}</span>
                </div>
              </li>
            );
          })}
          <div className="mb-8 flex justify-end gap-4">
            <span>Total</span>
            <span>${totalPrice}</span>
          </div>
        </ul>
      )}
      <button
        href="/payment"
        className="mx-auto flex rounded-full px-8 py-2 cursor-pointer"
      >
        Go to Cart
      </button>
    </>
  );
};

export default PaymentCard;
