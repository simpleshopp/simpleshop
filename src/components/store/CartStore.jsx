import { create } from "zustand";
import { persist } from "zustand/middleware";

// Opret Zustand store med persist, så kurven gemmes i localStorage
const useStore = create(
  persist(
    (set, get) => ({
      // basketProducts: Array med alle produkter i kurven
      basketProducts: [],

      // addToBasket:
      // - Tilføjer et produkt til kurven
      // - Hvis produktet allerede findes, øges quantity med 1
      // - Ellers tilføjes produktet med quantity: 1
      addToBasket: (product) => {
        const current = get().basketProducts; // nuværende kurv
        const existing = current.find((item) => item.id === product.id); // tjek om produktet findes
        if (existing) {
          // Hvis produktet findes, opdater quantity
          set({
            basketProducts: current.map((item) =>
              item.id === product.id
                ? { ...item, quantity: (item.quantity || 1) + 1 } // '|| 1' sikrer at quantity altid er mindst 1 -  Hvis item.quantity er undefined, bruges 1. Hvis item.quantity er fx 2, bruges 2.
                : item,
            ),
          });
        } else {
          // Hvis produktet ikke findes i kurven, opretter vi et nyt produkt-objekt med quantity: 1.
          // - ...current spreder alle eksisterende produkter (...products) i kurven og sætter det ind i det nye array
          // - Og tilføjer derefter quantity: 1 til arrayet
          set({ basketProducts: [...current, { ...product, quantity: 1 }] });
        }
      },

      // removeFromBasket: Fjerner et produkt helt fra kurven (uanset quantity)
      removeFromBasket: (id) => {
        const current = get().basketProducts;
        set({ basketProducts: current.filter((item) => item.id !== id) });
      },

      // getTotalPrice: Udregner total pris for kurven
      // Summerer pris * quantity for alle produkter
      getTotalPrice: () =>
        get().basketProducts.reduce(
          (sum, item) => sum + item.price * (item.quantity || 1),
          0,
        ),
    }),
    { name: "cart-storage" }, // navnet på localStorage key
  ),
);

// Exporter hooken, så du kan bruge useStore() i dine komponenter
export default useStore;
