import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      basketProducts: [],
      totalPrice: 0,

      addToBasket: (product) => {
        const current = get().basketProducts;
        set({
          basketProducts: [...current, product],
          totalPrice: get().totalPrice + product.price,
        });
      },

      removeFromBasket: (id) => {
        const current = get().basketProducts;
        set({ basketProducts: current.filter((item) => item.id !== id) });
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);

export default useStore;
