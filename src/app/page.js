import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/Hero";
import SearchBar from "@/components/ui/SearchBar";

export default function Home({ searchParams }) {
  return (
    <>
      <Navigation />
      <SearchBar />
      <Hero />
      <Footer />
    </>
  );
}
