import ProductView from "@/components/cards/ProductView";
import PaymentCard from "@/components/cards/PaymentCard";
import Link from "next/link";

const ProductInfo = ({product}) => {
  return (
    <div className="px-26 py-8">
      <Link href="/products">
        <button className="px-6 py-2 rounded-2xl mb-8 cursor-pointer">
          back
        </button>
      </Link>
      <section className="grid grid-cols-3 ">
        <div className="col-span-2">
          <ProductView product={product} />
        </div>
        <PaymentCard product={product} />
      </section>
    </div>
  );
};

export default ProductInfo;
