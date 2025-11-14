import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import CheckOut from "@/app/components/CheckOut";

export default function Payment({ searchParams }) {
  return (
    <>
      <Navigation />

      <CheckOut />

      <Footer />
    </>
  );
}
