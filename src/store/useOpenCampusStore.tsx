import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

export default function UseOpenCampusStorePage() {
  return (
    <Layout>
      <Seo templateTitle='UseOpenCampusStore' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'></div>
        </section>
      </main>
    </Layout>
  );
}

// import { createSelectorHooks } from 'auto-zustand-selectors-hook';
// import produce from 'immer';
// import create from 'zustand';

// type OpenCampusForm = {
//   nama?: string;
//   asalSekolah?: string;
//   asalKota?: string;
//   noTelp?: string;
//   email?: string;
//   vaksin?: File;
//   link_poster?: string;
//   link_followig?: string;
//   fakultas?: string;
//   departemen?: string;
// }

// type OpenCampusStoreType = {
//   formData : OpenCampusForm | null;
//   upsert: (data: OpenCampusForm) => void;
// }

// const useOpenCampusStoreBase = create<OpenCampusStoreType>((set) => ({

//   upsert: (data) => {
//     set(
//       produce<OpenCampusStoreType>((state) => {
//         state.formData = data;
//       })
//     )
//   }
// }))

// const useOpenCampusStore = createSelectorHooks(useOpenCampusStoreBase);

// export default useOpenCampusStore;
