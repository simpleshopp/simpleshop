import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ProductList from "./[id]/page";
import Category from "@/components/ui/Category"
import SearchBar from "@/components/ui/SearchBar"
import Payment from "../payment/page";


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
