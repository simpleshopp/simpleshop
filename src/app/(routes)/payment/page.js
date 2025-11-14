import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import CheckOut from "@/components/CheckOut";

export default function Payment({ searchParams }) {
  return (
    <>
      <Navigation />

      <CheckOut />

      <Footer />
    </>
  );
}
