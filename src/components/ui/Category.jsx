import { Suspense } from "react";
import CategoryElement from "./CategoryElement";

const Category = () => {
  return (
    <Suspense fallback={<div>Loading categories...</div>}>
      <FetchCategories />
    </Suspense>
  );
};

const FetchCategories = async () => {
  // CategoryElement håndterer selv at hente kategorier klient-side.
  // Returnér kun én dropdown-komponent.
  return (
   
      <CategoryElement />

  );
};

export default Category;
