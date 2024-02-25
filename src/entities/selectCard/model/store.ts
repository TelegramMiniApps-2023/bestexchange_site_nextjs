import { create } from "zustand";
import { Valute } from "@/shared/types";
import { persist } from "zustand/middleware";

//Store for Selects
interface SelectsStore {
  giveSelect: Valute | null;
  getSelect: Valute | null;
  setGiveSelect: (valute: Valute | null) => void;
  setGetSelect: (valute: Valute | null) => void;
}

export const useSelectsStore = create<SelectsStore>()(
  persist(
    (set) => ({
      giveSelect: null,
      getSelect: null,
      setGiveSelect: (valute) => set({ giveSelect: valute }),
      setGetSelect: (valute) => set({ getSelect: valute }),
    }),
    { name: "selects-store" }
  )
);
