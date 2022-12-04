import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce from 'immer';
import create from 'zustand';

type DialogStoreType = {
  data: boolean;
  setOpen: () => void;
};

const useDialogStoreBase = create<DialogStoreType>((set) => ({
  data: false,

  setOpen: () => {
    set(
      produce<DialogStoreType>((state) => {
        state.data = !state.data;
      })
    );
  },
}));
const useDialogStore = createSelectorHooks(useDialogStoreBase);

export default useDialogStore;
