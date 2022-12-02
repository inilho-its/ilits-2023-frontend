import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce from 'immer';
import create from 'zustand';

type OpenCampusForm = {
  nama?: string;
  asal_sekolah?: string;
  asal_kota?: string;
  no_telp?: string;
  email?: string;
  image_vaksin?: File;
  image_poster?: File;
  image_followig?: File;
  fakultas?: string;
  departemen?: string;
};

type OpenCampusStoreType = {
  formData: OpenCampusForm;
  upsert: (data: OpenCampusForm) => void;
  setFakultas: (fakultas: string) => void;
  setDepartemen: (departemen: string) => void;
};

const useOpenCampusStoreBase = create<OpenCampusStoreType>((set) => ({
  formData: {},
  upsert: (data) => {
    set(
      produce<OpenCampusStoreType>((state) => {
        state.formData = { ...state.formData, ...data };
      })
    );
  },
  setFakultas: (fakultas: string) => {
    set(
      produce<OpenCampusStoreType>((state) => {
        state.formData.fakultas = fakultas;
      })
    );
  },
  setDepartemen: (departemen: string) => {
    set(
      produce<OpenCampusStoreType>((state) => {
        state.formData.departemen = departemen;
      })
    );
  },
}));

const useOpenCampusStore = createSelectorHooks(useOpenCampusStoreBase);

export default useOpenCampusStore;
