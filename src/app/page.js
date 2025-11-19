// "use client";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/Hero";
import SearchBar from "@/components/ui/SearchBar";
// import Button, { AlertClick, HeartClick } from "@/components/button/Button";
// import { FiShoppingCart } from "react-icons/fi";
// import { FaRegLaughBeam } from "react-icons/fa";

export default function Home({ searchParams }) {
  return (
    <>
      <Navigation />
      <Hero />
      {/* <div className="flex gap-8">
        <Button variant="primary" size="lg" href="/payment">
          knap 1
        </Button>
        <Button variant="secondary" size="md">
          knap 2
        </Button>
        <Button variant="link" size="sm">
          Samme knap som link
        </Button>
        <Button icon={FiShoppingCart}>Læg i kurv</Button>
        <Button variant="tertiary" icon={FaRegLaughBeam}>
          Jeg er sjov
        </Button>

        <Button variant="hacked" size="lg" onClick={AlertClick}>
          Du er belvet hacket!
        </Button>
        <Button variant="romantic" size="md" showModalOnClick>
          I love you
        </Button>
      </div> */}
      <Footer />
    </>
  );
}
