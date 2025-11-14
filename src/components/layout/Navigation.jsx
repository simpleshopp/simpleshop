import { HiOutlineCake } from "react-icons/hi";
import { SlBasket } from "react-icons/sl";
import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-26 py-6 bg-blue-200">
      <div className="flex items-center gap-16">
        <Link href="/">
          <HiOutlineCake color="blue" size="60" />
        </Link>

        <ul className="flex gap-6">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </div>
      <Link href="/payment">
        <SlBasket size="25" className="cursor-pointer" />
      </Link>
    </nav>
  );
};

export default Navigation;
