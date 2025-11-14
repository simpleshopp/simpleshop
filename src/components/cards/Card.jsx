import Image from "next/image";
import CardButton from "@/components/ui/CardButton";
import Link from "next/link";
import { Suspense } from "react";

export default function Card() {
  return (
    <Suspense>
      <CardContainer />
    </Suspense>
  );
}
async function CardContainer() {
  const response = await fetch(`https://dummyjson.com/products`);
  const { products } = await response.json();
  return products.map((product) => (
    <div className="pb-2 m-3">
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
      <Link href={`/products/${product.id}`}>
        <h1 className="py-2">{product.title}</h1>
        <CardButton />
      </Link>
    </div>
  ));
}
