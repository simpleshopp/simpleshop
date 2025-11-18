import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      basketProducts: [],
      addToBasket: (product) => {
        const current = get().basketProducts;
        set({ basketProducts: [...current, product] });
      },
      removeFromBasket: (id) => {
        const current = get().basketProducts;
        set({ basketProducts: current.filter((item) => item.id !== id) });
      },
      // Selector til totalPrice
      getTotalPrice: () =>
        get().basketProducts.reduce((sum, item) => sum + item.price, 0),
    }),
    { name: "cart-storage" },
  ),
);

export default useStore;
