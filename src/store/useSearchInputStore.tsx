import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import create from 'zustand';

export type SearchInput = {
  text: string;
  status: boolean;
  disable: boolean;
  isVerified: (status: boolean, text: string) => void;
  defaultState: () => void;
};

const useSearchInputBase = create<SearchInput>((set, get) => ({
  text: 'Cek',
  status: false,
  disable: false,
  defaultState: () =>
    set({
      text: 'Cek',
      disable: false,
    }),
  isVerified: (status, text) => {
    set({
      disable: true,
    });
    if (status == false) {
      set({
        status: false,
      });
      setTimeout(() => set({ text: text }), 235);
    } else {
      set({
        status: true,
      });
      setTimeout(() => set({ text: text }), 230);
    }
    setTimeout(() => get().defaultState(), 3000);
  },
}));

const useSearchInputStore = createSelectorHooks(useSearchInputBase);

export default useSearchInputStore;
