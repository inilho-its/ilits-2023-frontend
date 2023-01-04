import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';

import useFordaStore from '@/store/useFordaStore';

import BiodataArrayField from '@/pages/welcome-forda/components/fields/BiodataArrayField';

import { BiodataFormState } from '@/types/entitas/forda';

type BiodataFormProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function BiodataForm({ setStep }: BiodataFormProps) {
  //#region  //*=========== Store ===========
  const defaultPeserta = useFordaStore.usePesertaData();
  const setPesertaData = useFordaStore.useSetPesertaData();

  const methods = useForm<BiodataFormState>({
    defaultValues: {
      peserta: Object.entries(defaultPeserta).map(([, value]) => value),
    },
  });

  const formData = useFordaStore.useFormData();
  const { handleSubmit } = methods;

  const onSubmit = (data: BiodataFormState) => {
    setPesertaData(data.peserta);
    setStep(2);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-5'>
        {formData && (
          <BiodataArrayField jumlah_tiket={formData?.jumlah_tiket || 0} />
        )}
        <div>
          <Button
            variant='red'
            round='medium'
            size='medium'
            onClick={() => setStep(0)}
          >
            Kembali
          </Button>
          <Button
            variant='lightBlue'
            round='medium'
            size='medium'
            type='submit'
            className='ml-4'
          >
            Lanjutkan
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
