import React from 'react';

import {
  PlaylistSaintek,
  PlaylistSoshum,
  PlaylistTPS,
} from '@/pages/pembahasan-tryout/components/Playlist';
const css = `.intrinsic-container {
  position: relative;
  height: 0;
}


/* 16x9 Aspect Ratio */

.intrinsic-container-16x9 {
  padding-bottom: 56.25%;
}


/* 4x3 Aspect Ratio */

.intrinsic-container-4x3 {
  padding-bottom:  60%;
}

.intrinsic-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
}`;

type jenis_tryout = {
  soshum: boolean;
  saintek: boolean;
  tps: boolean;
};

const Youtube = () => {
  const [jenis_tryout, SetJenisTryout] = React.useState<jenis_tryout>({
    soshum: false,
    saintek: true,
    tps: false,
  });
  function changeTryout(matkul: string) {
    if (matkul == 'soshum') {
      SetJenisTryout({
        soshum: true,
        saintek: false,
        tps: false,
      });
    } else if (matkul == 'saintek') {
      SetJenisTryout({
        soshum: false,
        saintek: true,
        tps: false,
      });
    } else if (matkul == 'tps') {
      SetJenisTryout({
        soshum: false,
        saintek: false,
        tps: true,
      });
    }
  }
  return (
    <div className='flex min-h-screen w-full flex-col items-center justify-center px-5 md:py-56 lg:py-64'>
      <div className='relative'>
        <div className='grid grid-cols-2 grid-rows-2 gap-6 pb-6'>
          <div
            className='col-span-1 w-full rounded-2xl border-2 border-dark bg-white py-3 px-4 text-center text-2xl font-bold hover:bg-red-200 '
            onClick={() => changeTryout('saintek')}
            role='button'
          >
            Saintek
          </div>
          <div
            className='col-span-1 w-full rounded-2xl border-2 border-black bg-white py-3 px-4 text-center text-2xl font-bold hover:bg-red-200 '
            onClick={() => changeTryout('soshum')}
            role='button'
          >
            Soshum
          </div>
          <div
            className='col-span-2 w-full rounded-2xl border-2 border-black bg-white py-3 px-4 text-center text-2xl font-bold hover:bg-red-200 '
            onClick={() => changeTryout('tps')}
            role='button'
          >
            TPS
          </div>
        </div>
        <div className='border-t-2xl flex h-9 w-full items-center justify-end gap-x-3 rounded-t-2xl bg-dark pr-5 md:h-12 md:pr-8'>
          <div className='h-3 w-3 rounded-full bg-green-300 md:h-4 md:w-4'></div>
          <div className='h-3 w-3 rounded-full bg-red-300 md:h-4 md:w-4'></div>
          <div className='h-3 w-3 rounded-full bg-yellow-300 md:h-4 md:w-4'></div>
        </div>
        <div className='tryout rounded-b-2xl  border-x-2 border-b-2 border-dark bg-white '>
          <style>{css}</style>

          {jenis_tryout.saintek && <PlaylistSaintek />}
          {jenis_tryout.soshum && <PlaylistSoshum />}
          {jenis_tryout.tps && <PlaylistTPS />}
        </div>
      </div>
    </div>
  );
};

export default Youtube;
