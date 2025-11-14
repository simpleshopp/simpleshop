import ProductView from "@/components/cards/ProductView";
import ProductView from "@/components/cards/PaymentCard";

const ProductInfo = () => {
  return (
    <section className="grid grid-cols-2">
      <ProductView />
      <PaymentCard />
    </section>
  );
};

export default ProductInfo;
