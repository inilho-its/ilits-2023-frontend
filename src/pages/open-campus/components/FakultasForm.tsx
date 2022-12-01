import * as React from 'react';

import Typography from '@/components/typography/Typography';

type FakultasFormProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
} & React.HTMLAttributes<HTMLDivElement>;

import useOpenCampusStore from '@/store/useOpenCampusStore';

import _OpenCampusForm from '@/constant/OpenCampusForm';
import FakultasCard from '@/pages/open-campus/components/FakultasCard';

export default function FakultasForm({ setStep }: FakultasFormProps) {
  const [page, setPage] = React.useState(1);

  const OpenCampusForm = _OpenCampusForm.slice(page - 1, page);
  const setFakultas = useOpenCampusStore.useSetFakultas();
  const setNextPage = () => {
    const max = _OpenCampusForm.length;
    if (page < max) {
      setPage(page + 1);
    }
  };

  const setPrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleSubmit = (fakultas: string) => {
    setFakultas(fakultas);
    setStep(2);
  };

  return (
    <div>
      <Typography variant='h2' as='h2' className='text-orange-300'>
        Tour de Campus
      </Typography>
      <Typography variant='h5' as='h5' className='font-bold'>
        Yuk Pilih Dua Fakultas Impianmu!
      </Typography>
      <FakultasCard
        data={OpenCampusForm[0]}
        number={page}
        setPrevPage={setPrevPage}
        setNextPage={setNextPage}
        handleSubmit={handleSubmit}
      />
      <button onClick={() => setStep(0)}>Back</button>
    </div>
  );
}
