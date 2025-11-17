import Image from "next/image";
import Tags from "@/components/ui/Tags";
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
    <div
      className="pb-2 m-3 border-2 rounded-2xl border-neutral-100 overflow-hidden group transition-shadow duration-300 transform hover:shadow-2xl "
      key={product.id}
    >
      <Link href={`/products/${product.id}`} key={product.id}>
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
            className="col-start-1 row-start-1 rounded-t-2xl bg-gray-300/25 transform transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <Tags tags={product.tags} />
          <h2 className="py-2">{product.title}</h2>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {product.description}
          </p>
          <p className="py-2 text-black">{product.price} $</p>
        </div>
      </Link>

      <div className="p-4">
        <BasketButton product={product} />
      </div>
    </div>
  ));
}
