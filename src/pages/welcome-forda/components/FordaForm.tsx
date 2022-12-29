// import * as React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';
import SelectInput from '@/components/forms/SelectInput';

import useOpenCampusStore from '@/store/useOpenCampusStore';

type BiodataFormState = {
  name: string;
  asal_sekolah: string;
  asal_kota: string;
  no_hp: string;
  email: string;
  jenis_tryout: string;
};

type BiodataFormProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function BiodataForm({ setStep }: BiodataFormProps) {
  const methods = useForm<BiodataFormState>();
  const { handleSubmit } = methods;

  // Store
  const upsert = useOpenCampusStore.useUpsert();
  const data = useOpenCampusStore.useFormData();

  const onSubmit = (data: BiodataFormState) => {
    upsert(data);
    setStep(1);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-5'>
        <Input
          required={true}
          label='Pilih Forum Daerah'
          id='forda'
          defaultValue={data?.nama}
          placeholder='Masukkan Forum Daerah Anda'
          validation={{
            required: { value: true, message: 'Wajib mengisi nama' },
          }}
        />
        <SelectInput
          id='jumlah-tiket'
          label='Pilih Jumlah Tiket'
          validation={{ required: 'Wajib memilih jumlah tiket' }}
          placeholder='Masukkan Jumlah Tiket Anda'
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
        </SelectInput>
        <div className='flex justify-center'>
          <Button
            variant='lightBlue'
            round='medium'
            size='medium'
            type='submit'
          >
            Lanjutkan
          </Button>
        </div>
      </form>
    </FormProvider>
  );
}
