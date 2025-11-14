import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/Hero";

export default function Home({ searchParams }) {
  return (
    <>
      <Navigation />
      <Hero />
      <Footer />
    </>
  );
}
