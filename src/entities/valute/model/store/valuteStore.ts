import { create } from "zustand";

import { persist } from "zustand/middleware";
import { Valute } from "../..";

//Store for Selects
interface SelectsStore {
  giveSelect: Valute | null;
  getSelect: Valute | null;
  setGiveSelect: (valute: Valute | null) => void;
  setGetSelect: (valute: Valute | null) => void;
  switcher: () => Promise<void>;
}

export const useSelectsStore = create<SelectsStore>()(
  persist(
    (set) => ({
      giveSelect: null,
      getSelect: null,
      setGiveSelect: (valute) => set({ giveSelect: valute }),
      setGetSelect: (valute) => set({ getSelect: valute }),
      switcher: async () => {
        await set((state) => ({
          giveSelect: state.getSelect,
          getSelect: state.giveSelect,
        }));
      },
    }),
    { name: "selects-store" },
  ),
);
