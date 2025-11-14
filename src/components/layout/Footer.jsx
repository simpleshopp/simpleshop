import { HiOutlineCake } from "react-icons/hi";
import Link from "next/link";

const Footer = () => {
  return (
    <section className="bg-pink-200 flex justify-between px-26 py-10">
      <div>
        <h2>Opening Hours</h2>
        <p>
          Mon: 10-17 <br />
          Tue: 10-15 <br />
          Wed: Closed <br />
          Thu: 10-17 <br />
          Fri: 10-17 <br />
          Sat: 10-14 <br />
          Sun: Closed
        </p>
      </div>
      <div className="place-content-center">
        <Link href="/">
          <HiOutlineCake color="blue" size="100" />
        </Link>
      </div>
    </section>
  );
};

export default Footer;
