import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import BackButton from "@/components/ui/BackButton";
import ProductInfo from "@/components/ProductInfo";
import ProductPics from "@/components/cards/ProductPics";
import Reviews from "@/components/Reviews";
import PaymentCard from "@/components/cards/PaymentCard";
import BasketButton from "@/components/ui/BasketButton";
import Tags from "@/components/ui/Tags";

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
  const { id } = await params;
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
      <div className="max-w-6xl mx-auto px-8 mb-10 -mt-15">
        <section className="grid grid-cols-2 gap-20 ">
          <ProductPics className="" images={product.images} />

          <div className="flex flex-col pt-15 h-full">
            <div>
              <Tags tags={product.tags} />
              <div className="flex justify-between">
                <h1 className="mt-4 text-4xl font-semibold tracking-tight">
                  {product.title}
                </h1>
                <h4 className="text-2xl text-gray-900 py-4">
                  ${product.price}
                </h4>
              </div>
            </div>
            <div className=" mb-6 px-6 py-4 shadow-sm rounded-lg my-9">
              <h2 className="mb-4">Description</h2>
              <p className="text-gray-700">{product.description}</p>
            </div>

            <div className="pt-25">
              <BasketButton product={product} />
            </div>

            <div className="my-6">
              <span
                className={`
        px-3 py-1 rounded-full shrink-0
        ${
          product.availabilityStatus.toLowerCase().includes("in stock")
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }
      `}
              >
                {product.availabilityStatus}
              </span>
              <p className="mt-2 text-gray-400 text-xs">
                {product.shippingInformation}
              </p>
            </div>
          </div>
        </section>
        <div className="grid grid-cols-2 gap-20">
          <Reviews productId={product.id} />
          <div className="mt-5">
            <PaymentCard product={product} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
