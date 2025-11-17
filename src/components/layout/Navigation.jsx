import { HiOutlineCake } from "react-icons/hi";
import { SlBasket } from "react-icons/sl";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-end justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-end gap-0 group transition duration-200 relative"
        >
          <HiOutlineCake
            size={80}
            className="text-gray-200 group-hover:text-button transition duration-200"
          />
          <h2 className="text-gray-900 font-semibold text-lg transition duration-200 -ml-10">
            Sweet Buy
          </h2>
        </Link>

        {/* Nav links */}
        <ul className="hidden md:flex items-end gap-12 text-gray-700 font-medium">
          <li>
            <Link
              href="/"
              className="relative text-gray-700 transition-colors duration-200 hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-button after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="relative text-gray-700 transition-colors duration-200 hover:text-gray-900 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-button after:transition-all after:duration-300 hover:after:w-full"
            >
              Products
            </Link>
          </li>
        </ul>

        {/* Basket */}
        <Link href="/payment" className="flex items-end">
          <SlBasket
            size={22}
            className="text-gray-700 transition duration-200 hover:text-button"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
