import Image from "next/image";
import Tags from "@/components/ui/Tags";
import Link from "next/link";
import BasketButton from "../ui/BasketButton";
import { Suspense } from "react";

// Card-listen: Suspense + async container
export default function Card({ category, search }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CardContainer category={category} search={search} />
    </Suspense>
  );
}

// Async container: henter og filtrerer produkter
async function CardContainer({ category, search }) {
  // Hent produkter fra API
  let url = category
    ? `https://dummyjson.com/products/category/${category}`
    : `https://dummyjson.com/products`;
  const response = await fetch(url);
  const { products } = await response.json();

  // Filtrer produkter på titel
  const filteredProducts = search
    ? products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      )
    : products;

  // Render alle produkter
  return filteredProducts.map((product) => (
    <div
      className="pb-2 m-3 border-2 rounded-2xl border-neutral-100 overflow-hidden group transition-shadow duration-300 transform hover:shadow-2xl"
      key={product.id}
    >
      <Link href={`/products/${product.id}`}>
        <div className="grid">
          <div className="z-10 col-start-1 row-start-1 m-4">
            <div className="items-center gap-2 rounded-2xl px-3 py-2 place-content-end">
              <p className="text-sm font-medium text-cyan-500 drop-shadow-md">
                {product.availabilityStatus}
              </p>
            </div>
          </div>
          <Image
            loading="eager"
            alt={product.title}
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
