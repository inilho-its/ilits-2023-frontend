import * as React from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

import Button from '@/components/buttons/Button';

type DepartemenFormState = {
  departemen: string;
};

type DepartemenCardProps = {
  departemen: string;
  number: number;
  setNextPage: () => void;
  setPrevPage: () => void;
  handleSubmit: (data: DepartemenFormState) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export default function DepartemenCard({
  departemen,
  number,
  setNextPage,
  setPrevPage,
  handleSubmit,
}: DepartemenCardProps) {
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
          <p>Nama : {departemen}</p>
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
        <Button
          variant='lightBlue'
          onClick={() => handleSubmit({ departemen })}
        >
          Lanjutkan
        </Button>
      </div>
    </div>
  );
}
