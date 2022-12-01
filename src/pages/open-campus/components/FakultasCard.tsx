import * as React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import Button from '@/components/buttons/Button';

type FakultasCardState = {
  name: string;
  image: string;
  singkatan: string;
  departemen: string[];
};

type FakultasCardProps = {
  data: FakultasCardState;
  number: number;
  setNextPage: () => void;
  setPrevPage: () => void;
  handleSubmit: (fakultas: string) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export default function FakultasCard({
  data,
  number,
  setNextPage,
  setPrevPage,
  handleSubmit,
}: FakultasCardProps) {
  return (
    <div className='flex flex-col items-center'>
      <div className='flex justify-between gap-24 p-12'>
        <div>
          <Button variant='yellow' onClick={setPrevPage} isIcon={true}>
            <AiOutlineArrowLeft size={24} />
          </Button>
        </div>
        <div>
          <p>Kelompok {number}</p>
          <p>Nama : {data.name}</p>
          <br />
          <h1>Page {number}</h1>
        </div>
        <div>
          <Button variant='yellow' onClick={setNextPage} isIcon={true}>
            <AiOutlineArrowRight size={24} />
          </Button>
        </div>
      </div>
      <div>
        <Button variant='lightBlue' onClick={() => handleSubmit(data.name)}>
          Lanjutkan
        </Button>
      </div>
    </div>
  );
}
