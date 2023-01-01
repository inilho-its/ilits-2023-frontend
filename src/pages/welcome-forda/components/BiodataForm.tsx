// import * as React from 'react';

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
  // const defaultPeserta = useFordaStore.usePesertaData();
  const setPesertaData = useFordaStore.useSetPesertaData();
  //#endregion  //*======== Store ===========

  /**
   * Task
   * nilai dari defaultPeserta
   * {[
   *  {nama, jenis_tryout}
   *  {nama, jenis_tryout}
   * ]}
   *
   * Nilai yang diharpakan
   * [
   *  {nama, jenis_tryout}
   *  {nama, jenis_tryout}
   * ]
   *
   * Nilai awal
   * {}
   */

  const methods = useForm<BiodataFormState>({
    defaultValues: {
      peserta: [
        {
          jenis_tryout: '1',
          nama: 'Test',
        },
      ],
    },
  });

  const formData = useFordaStore.useFormData();
  const { handleSubmit } = methods;

  const onSubmit = (data: BiodataFormState) => {
    setPesertaData(data.peserta);
    setStep(2);
  };

  //#endregion  //*======== Build id Form ===========

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
            className='ml-auto'
          >
            Lanjutkan
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
