import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import ProductList from "@/components/ProductList";
import Category from "@/components/ui/Category";
import SearchBar from "@/components/ui/SearchBar";
import PaymentCard from "@/components/cards/PaymentCard";

export default function Products() {
  return (
    <>
       <Navigation /> 
       <Category /> 
       <SearchBar /> 
      <ProductList />
       <PaymentCard />
      <Footer /> 
    </>
  );
}
