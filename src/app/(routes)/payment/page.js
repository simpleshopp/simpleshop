import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CheckOutCard from "@/components/cards/CheckOutCard";

export default function Payment({ searchParams }) {
  return (
    <>
      <Navigation />
      <div className="grid px-26">
        <CheckOutCard />
      </div>

      <Footer />
    </>
  );
}
