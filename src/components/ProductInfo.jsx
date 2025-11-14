import ProductView from "@/components/cards/ProductView";
import PaymentCard from "@/components/cards/PaymentCard";

const ProductInfo = () => {
  return (
    <section className="grid grid-cols-3 px-26 py-10">
      <div className="col-span-2">
        <ProductView />
      </div>
      <PaymentCard />
    </section>
  );
};

export default ProductInfo;
