import * as React from 'react';

import Typography from '@/components/typography/Typography';

import useOpenCampusStore from '@/store/useOpenCampusStore';

import _fakultas from '@/constant/OpenCampusForm';
import DepartemenCard from '@/pages/open-campus/components/DepartemenCard';

type BiodataFormState = {
  departemen: string;
};

type DepartemenFormProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
} & React.HTMLAttributes<HTMLDivElement>;

export default function DepartemenForm({ setStep }: DepartemenFormProps) {
  const [page, setPage] = React.useState(1);
  const data = useOpenCampusStore.useFormData();
  const upsert = useOpenCampusStore.useUpsert();

  const fakultas = _fakultas.find(
    (fakultas) => fakultas.name === data.fakultas
  );
  const departemen = fakultas?.departemen.slice(page - 1, page);

  // Loading
  if (!fakultas) return null;
  if (!departemen) return null;

  const setNextPage = () => {
    const max = fakultas.departemen.length;
    if (page < max) {
      setPage(page + 1);
    }
  };

  const setPrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const handleSubmit = (data: BiodataFormState) => {
    upsert(data);
    setStep(4);
  };
  return (
    <div>
      <Typography variant='h2' as='h2' className='text-orange-300'>
        Tour de Campus
      </Typography>
      <Typography variant='h5' as='h5' className='font-bold'>
        Yuk Pilih Dua Fakultas Impianmu!
      </Typography>
      <DepartemenCard
        departemen={departemen[0]}
        number={page}
        setNextPage={setNextPage}
        setPrevPage={setPrevPage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
