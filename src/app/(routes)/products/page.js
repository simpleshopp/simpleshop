import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ProductList from "@/components/ProductList";
import Category from "@/components/ui/Category";
import SearchBar from "@/components/ui/SearchBar";
import PaymentCard from "@/components/cards/PaymentCard";
import { Suspense } from "react";

export default function Products({ searchParams }) {
  return (
    <>
      <Navigation />
      <div className=" flex px-10 py-5 mx-26">
        <Category />
        <SearchBar />
      </div>
      <div className="grid grid-cols-[2fr_0.5fr] p-5 mx-26">
        <Suspense>
          <div>
            <ProductListContainer searchParams={searchParams} />
          </div>
        </Suspense>
        <div>
          <PaymentCard />
        </div>
      </div>
      <Footer />
    </>
  );
}

async function ProductListContainer({ searchParams }) {
  const { category, search } = await searchParams;

  // Hent produkter fra API
  let url = category
    ? `https://dummyjson.com/products/category/${category}`
    : `https://dummyjson.com/products`;
  const response = await fetch(url);
  const { products } = await response.json();

  // Filtrer produkter kun på titel hvis search er angivet
  const filteredProducts = search
    ? products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase()),
      )
    : products;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 pl-5">
        {category
          ? category.charAt(0).toUpperCase() + category.slice(1)
          : "Alle produkter"}
        {search ? ` — Søg: ${search}` : ""}
      </h1>
      {/* Send filtrerede produkter til ProductList */}
        <ProductList category={category} search={search} />
    </div>
  );
}
