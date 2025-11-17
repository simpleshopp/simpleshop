import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      basketProducts: [],

      addToBasket: (product) => {
        const current = get().basketProducts;
        set({ basketProducts: [...current, product],
          totalPrice: get().totalPrice + product.price,
         });
      },

      removeFromBasket: (id) => {
        const current = get().basketProducts;
        set({ basketProducts: current.filter((item) => item.id !== id) });

        set({
          basketProducts: updateBasket,
          totalPrice: get().totalPrice - itemToRemove.price,});
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);

export default useStore;

