import { createSelectorHooks } from 'auto-zustand-selectors-hook';
import produce from 'immer';
import create from 'zustand';

import { OpenCampusForm } from '@/types/open-campus';

type FormDataFile = {
  [0]: File;
  [1]: File;
};

type ImageOpenCampus = {
  sertifikat_vaksin: FormDataFile;
  repost_poster: FormDataFile;
  follow_ig: FormDataFile;
};

type OpenCampusStoreType = {
  formData: OpenCampusForm;
  upsert: (data: OpenCampusForm) => void;
  setImage: (image_data: ImageOpenCampus) => void;
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
  setImage: (image_data) => {
    set(
      produce<OpenCampusStoreType>((state) => {
        state.formData = { ...state.formData, ...image_data };
      })
    );
  },
}));

const useOpenCampusStore = createSelectorHooks(useOpenCampusStoreBase);

export default useOpenCampusStore;
