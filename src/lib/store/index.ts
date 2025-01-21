import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
interface FollowItem {
  id: string;
  status: boolean;
}

interface Follow {
  items: FollowItem[];
  updateItem: (id: string, status: boolean) => void;
}

const useCartStore = create<Follow>()(
  persist(
    (set) => ({
      items: [],
      updateItem: (id: string, status: boolean) =>
        set((state) => {
          const items = state.items;
          if (!items.find((item) => item.id === id)) {
            return {
              items: [...state.items, { id, status }],
            };
          } else {
            const newItems = items.map((item) => {
              if (item.id === id) {
                return {
                  ...item,
                  status: !item.status,
                };
              } else {
                return item;
              }
            });
            return {
              items: newItems,
            };
          }
        }),
    }),
    {
      name: "Cart",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useCartStore;
