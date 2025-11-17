import Image from "next/image";
import CardButton from "@/components/ui/CardButton";
import Link from "next/link";
import { Suspense } from "react";
import BasketButton from "../ui/BasketButton";

export default function Card({ category }) {
  return (
    <Suspense>
      <CardContainer category={category} />
    </Suspense>
  );
}
async function CardContainer({ category }) {
  const url = category
    ? `https://dummyjson.com/products/category/${category}`
    : `https://dummyjson.com/products`;
  const response = await fetch(url);
  const { products } = await response.json();
  return products.map((product) => (
    <div className="pb-2 m-3" key={product.id}>
      <div className="grid">
        <div className="z-10 col-start-1 row-start-1 m-4 ">
          <div className="items-center gap-2 rounded-2xl px-3 py-2 place-content-end">
            <p className="text-sm font-medium text-cyan-500 drop-shadow-md">
              {product.availabilityStatus}
            </p>
          </div>
        </div>

        <Image
          loading="eager"
          alt="hej"
          src={product.thumbnail}
          width={400}
          height={200}
          className="col-start-1 row-start-1 rounded-2xl"
        />
      </div>
      <Link href={`/products/${product.id}`} key={product.id}>
        <h2 className="py-2">{product.title}</h2>
        <p className="py-2">{product.price} $</p>
        <CardButton />
      </Link>
      <BasketButton product={product} />
    </div>
  ));
}
