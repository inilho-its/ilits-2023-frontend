import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce from 'immer';
import create from 'zustand';

import { Berkas, Peserta } from '@/types/entitas/forda';

export type FormDataType = {
  forda_id?: string | number;
  jumlah_tiket?: number;
  harga?: number;
};
type FordaStoreType = {
  formData: FormDataType;
  pesertaData: Peserta[];
  imageFile: Berkas[];
  setFormData: (data: FormDataType) => void;
  setPesertaData: (data: Peserta[]) => void;
  setImageFile: (data: Berkas[]) => void;
};

const useFordaStoreBase = create<FordaStoreType>((set) => ({
  // Page 1
  formData: {},
  // Page 2
  pesertaData: [],
  // Page 3
  imageFile: [],
  // Set Page 1

  setFormData: (data) =>
    set(
      produce<FordaStoreType>((state) => {
        state.formData = { ...state.formData, ...data };
      })
    ),
  // Memasukan data peserta ke dalam store
  setPesertaData: (data) =>
    set(
      produce<FordaStoreType>((state) => {
        state.pesertaData = { ...state.pesertaData, ...data };
      })
    ),
  // Memasukan data image ke dalam store
  setImageFile: (data) =>
    set(
      produce<FordaStoreType>((state) => {
        state.imageFile = { ...state.imageFile, ...data };
      })
    ),
}));

const useFordaStore = createSelectorHooks(useFordaStoreBase);

export default useFordaStore;
