import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackButton from "@/components/ui/BackButton";
import ProductInfo from "@/components/ProductInfo";
import ProductPics from "@/components/cards/ProductPics";
import Reviews from "@/components/Reviews";
import PaymentCard from "@/components/cards/PaymentCard";

import Image from "next/image";

import { Suspense } from "react";

export default function Product({ params }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductContainer params={params} />
    </Suspense>
  );
}

async function ProductContainer({ params }) {
  const {id} = await params;
    const response = await fetch(`https://dummyjson.com/products/${id}`);
    const product = await response.json();
  // Henter id fra URL'en — fx /detalje?id=7
  // const params = await searchParams;
  // const id = params.id;

  // Henter produktet fra API'et
  // const response = await fetch(`https://dummyjson.com/products/${id}`);
  // const product = await response.json();

  return (
    <>
      <Navigation />
      <BackButton />
      <div className="px-26 py-8">
        <section className="grid grid-cols-[2fr_1fr_1fr] gap-16">
          <div className="col-span-2 grid grid-cols-2 gap-8">
            <div className="grid gap-3">
              <ProductPics images={product.images} />
            </div>
            <div>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </div>
          </div>
          <div >
            <PaymentCard product={product} />
          </div>
        </section>
      </div>
<Reviews productId={product.id}/>
      <Footer />
    </>
  );
}
