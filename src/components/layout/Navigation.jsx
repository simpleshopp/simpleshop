import { HiOutlineCake } from "react-icons/hi";
import { SlBasket } from "react-icons/sl";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-26 py-6 bg-blue-200">
      <div className="flex items-center gap-16">
        <a href="/">
          <HiOutlineCake color="blue" size="60" />
        </a>

        <ul className="flex gap-6">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
        </ul>
      </div>
      <SlBasket size="25" cursor="pointer" href="/payment" />
    </nav>
  );
};

export default Navigation;
