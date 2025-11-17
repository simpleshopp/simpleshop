import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CheckOutCard from "@/components/cards/CheckOutCard";
import BackButton from "@/components/ui/BackButton";

export default function Payment({ searchParams }) {
  return (
    <>
      <Navigation />
      <BackButton />
      <div className="grid px-26">
        <CheckOutCard />
      </div>

      <Footer />
    </>
  );
}
