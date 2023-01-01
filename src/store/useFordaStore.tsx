import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce from 'immer';
import create from 'zustand';

import { Peserta } from '@/types/entitas/forda';

type ImageType = {
  [0]: File;
  [1]: File;
};

export type FormDataType = {
  forda_id?: string;
  jumlah_tiket?: number;
};
type ImageFileType = {
  [key: string]: ImageType | undefined;
  follow_ig?: ImageType;
  repost_poster?: ImageType;
};
type FordaStoreType = {
  formData: FormDataType;
  pesertaData: Peserta[];
  imageFile: ImageFileType;
  setFormData: (data: FormDataType) => void;
  setPesertaData: (data: Peserta[]) => void;
  setImageFile: (data: ImageFileType) => void;
};

const useFordaStoreBase = create<FordaStoreType>((set) => ({
  // Page 1
  formData: {},
  // Page 2
  pesertaData: [],
  // Page 3
  imageFile: {},
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
      produce((state) => ({
        ...state,
        ...data,
      }))
    ),
}));

const useFordaStore = createSelectorHooks(useFordaStoreBase);

export default useFordaStore;
