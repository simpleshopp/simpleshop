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
          <ProductListContainer searchParams={searchParams} />
        </Suspense>
        <PaymentCard />
      </div>
      <Footer />
    </>
  );
}

async function ProductListContainer({ searchParams }) {
  const { category } = await searchParams;
  console.log(category);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 pl-5">
        {category
          ? category.charAt(0).toUpperCase() + category.slice(1)
          : "Alle produkter"}
      </h1>
      <ProductList category={category} />;
    </div>
  );
}
