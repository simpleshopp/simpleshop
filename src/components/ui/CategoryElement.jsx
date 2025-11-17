// "use client";

// import { useRouter } from "next/navigation";

// const CategoryElement = ({ category }) => {
//   const router = useRouter();
//   return (
//     <button
//       onClick={() => router.push(`?category=${category}`)}
//       className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-gray-50"
//     >
//       {category}
//     </button>
//   );
// };

// export default CategoryElement;
"use client";
import { IoIosArrowDown } from "react-icons/io";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const CategoryDropdown = () => {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  // Hent kategorier fra API
  useEffect(() => {
    async function fetchCategories() {
      const res = await fetch("https://dummyjson.com/products/category-list");
      const data = await res.json();
      setCategories(data);
    }
    fetchCategories();
  }, []);

  // Når man vælger en kategori
  const handleSelect = (cat) => {
    router.push(cat ? `?category=${cat}` : "?");
    setOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown-knap */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 hover:bg-gray-50 items-center"
      >
        Kategorier <IoIosArrowDown />
      </button>

      {/* Dropdown-menu */}
      {open && (
        <div className="absolute  w-56 origin-top-right rounded-md bg-white shadow-lg z-20">
          <div>
            {/* Mulighed for alle produkter */}
            <button
              onClick={() => handleSelect("")}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              Alle produkter
            </button>

            {/* Dynamiske kategorier */}
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleSelect(cat)}
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;
