// import * as React from 'react';

import { useQuery } from '@tanstack/react-query';
import { FormProvider, useForm } from 'react-hook-form';

import { mockQuery } from '@/lib/apiMock';

import Button from '@/components/buttons/Button';
import SelectInput from '@/components/forms/SelectInput';

import useFordaStore, { FormDataType } from '@/store/useFordaStore';

import { ApiReturn } from '@/types/api-return';

type FordaMock = {
  id: string;
  nama_forda: string;
  harga: number;
};

type FordaFormPageProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function FordaFormPage({ setStep }: FordaFormPageProps) {
  const formData = useFordaStore.useFormData();
  const methods = useForm<FormDataType>({
    defaultValues: formData,
  });
  const setFormData = useFordaStore.useSetFormData();

  const { handleSubmit } = methods;

  // Store

  //#region  //*=========== Fetch Harga  ===========
  const { data: queryData } = useQuery<ApiReturn<FordaMock[]>, Error>([
    '/forda',
    mockQuery,
  ]);
  //#endregion  //*======== Fetch Harga  ===========

  const onSubmit = (data: FormDataType) => {
    setFormData(data);
    setStep(1);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-5'>
        <SelectInput
          required={true}
          label='Pilih Forum Daerah'
          id='forda'
          placeholder='Masukkan Forum Daerah Anda'
          validation={{
            required: { value: true, message: 'Wajib mengisi nama' },
          }}
        >
          <option>Pilih Forum Daerah</option>
          {queryData?.data.map((item) => (
            <option
              key={item.id}
              value={item.id}
              selected={formData.forda_id == item.id ? true : false}
            >
              {item.nama_forda}
            </option>
          ))}
        </SelectInput>
        <SelectInput
          id='jumlah_tiket'
          label='Pilih Jumlah Tiket'
          validation={{ required: 'Wajib memilih jumlah tiket' }}
          placeholder='Masukkan Jumlah Tiket Anda'
        >
          {/* <option value='1'>Pilih Jumlah Tiket</option> */}
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
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
