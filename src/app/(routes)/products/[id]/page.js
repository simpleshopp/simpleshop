import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import BackButton from "@/app/components/BackButton";
import ProductInfo from "@/app/components/ProductInfo";
import Reviews from "@/app/components/Reviews";

export default function Product({ searchParams }) {
  return (
    <>
      <Navigation />
      <BackButton />
      <ProductInfo />
      <Reviews />
      <Footer />
    </>
  );
}
