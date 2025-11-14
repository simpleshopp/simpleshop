import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import ProductList from "@/app/components/ProductList";
import Category from "@/app/components/Category";
import SearchBar from "@/app/components/SearchBar";
import Payment from "@/app/components/Payment";

export default function Products({ searchParams }) {
  return (
    <>
      <Navigation />
      <Category />
      <SearchBar />
      <ProductList />
      <Payment />
      <Footer />
    </>
  );
}
