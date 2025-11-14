import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackButton from "@/components/ui/BackButton";
import ProductInfo from "@/components/ProductInfo";
import Reviews from "@/components/Reviews";

export default function Product({ searchParams }) {
  return (
    <>
      <Navigation />
      {/* <BackButton /> */}
      <ProductInfo />
      <Reviews />
      <Footer />
    </>
  );
}
