import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackButton from "@/components/ui/BackButton";
import ProductInfo from "@/components/ProductInfo";
import Reviews from "@/components/Reviews";
import { Suspense } from "react";

export default function Product({ searchParams }) {
  return (
    <Suspense>
      <Productcontainer searchParams={searchParams} />
    </Suspense>
  );
}

async function Productcontainer({ searchParams }) {
  // Henter id fra URL'en — fx /detalje?id=7
  const params = await searchParams;
  const id = params.id;

  // Henter produktet fra API'et
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await response.json();

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
