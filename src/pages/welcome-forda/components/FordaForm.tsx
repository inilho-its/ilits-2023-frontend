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
    const harga = queryData?.data.find((item) => {
      if (item.id == data.forda_id) return item.harga;
    });
    data.harga = harga?.harga;
    setFormData(data);
    setStep(1);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-5'>
        <SelectInput
          required={true}
          label='Pilih Forum Daerah'
          id='forda_id'
          placeholder='Masukkan Forum Daerah Anda'
          validation={{
            required: { value: true, message: 'Wajib mengisi nama forda' },
          }}
        >
          {queryData?.data.map((item) => {
            if (
              item.nama_forda !== 'Sidoarjo' &&
              item.nama_forda !== 'Tuban Jawa Timur' &&
              item.nama_forda !== 'Situbondo' &&
              item.nama_forda !== 'Pamekasan' &&
              item.nama_forda !== 'Madiun'
              item.nama_forda !== 'Tulungagung'
            ) {
              return (
                <option key={item.id} value={item.id}>
                  {item.nama_forda}
                </option>
              );
            }
          })}
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
          <option value='6'>6</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
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
