import { HiOutlineCake } from "react-icons/hi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-linear-to-br from-gray-900 to-gray-800 py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Opening Hours */}
        <div className="md:h-full">
          <h2 className="text-white text-2xl font-semibold mb-4 tracking-wide">
            Opening Hours
          </h2>
          <p className="text-gray-300 text-base/8">
            Mon: 10-17 <br />
            Tue: 10-15 <br />
            Wed: Closed <br />
            Thu: 10-17 <br />
            Fri: 10-17 <br />
            Sat: 10-14 <br />
            Sun: Closed
          </p>
        </div>

        {/* Right side: Visit Us + Logo */}
        <div className="flex flex-col items-end ">
          {/* Visit Us */}
          <div className="text-gray-300 text-right">
            <h2 className="text-white text-2xl font-semibold mb-4">Visit Us</h2>
            <p>Sweet Street 12</p>
            <p>2100 København</p>
            <p className="mt-2">Tlf: +45 12 34 56 78</p>
          </div>

          {/* Logo under Visit Us */}
          <Link
            href="/"
            className="flex items-end gap-0 group transition-transform duration-300 hover:scale-105"
          >
            <HiOutlineCake
              size={120}
              className="text-gray-900 group-hover:text-button transition-colors duration-300 transform hover:drop-shadow-lg"
            />
            <h4 className="text-white font-bold text-4xl transition-colors duration-300 -ml-10 group-hover:text-white drop-shadow-sm">
              Sweet Buy
            </h4>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
