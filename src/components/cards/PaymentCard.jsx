import Link from "next/link";

import PaymentButton from "../ui/PaymentButton";
const PaymentCard = () => {
  return (
    <>
      <div className="border-2 border-button rounded-2xl max-h-fit m-3 p-10 mx-auto flex flex-col items-center gap-4">
        <div className="w-full flex justify-between">
          <div>
            <p>Title</p>
          </div>
          <div>
            <p>Price</p>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <p>Title</p>
          </div>
          <div>
            <p>Price</p>
          </div>
        </div>
        <div className="w-full flex justify-between">
          <div>
            <p>Totale</p>
          </div>
          <div>
            <p>Price</p>
          </div>
        </div>
<Link href="/payment">
        <PaymentButton />
</Link>
      </div>
    </>
  );
};

export default PaymentCard;
