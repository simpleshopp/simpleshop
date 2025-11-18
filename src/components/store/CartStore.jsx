import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      basketProducts: [],
      addToBasket: (product) => {
        const current = get().basketProducts;
        const existing = current.find((item) => item.id === product.id);
        if (existing) {
          set({
            basketProducts: current.map((item) =>
              item.id === product.id
                ? { ...item, quantity: (item.quantity || 1) + 1 }
                : item
            ),
          });
        } else {
          set({ basketProducts: [...current, { ...product, quantity: 1 }] });
        }
      },
      removeFromBasket: (id) => {
        const current = get().basketProducts;
        set({ basketProducts: current.filter((item) => item.id !== id) });
      },
      // Selector til totalPrice
      getTotalPrice: () =>
        get().basketProducts.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0),
    }),
    { name: "cart-storage" },
  ),
);

export default useStore;
