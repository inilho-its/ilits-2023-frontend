// import * as React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import Input from '@/components/forms/Input';

import useOpenCampusStore from '@/store/useOpenCampusStore';

type BiodataFormState = {
  name: string;
  asal_sekolah: string;
  asal_kota: string;
  no_telp: string;
  email: string;
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
      <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-3'>
        <Input
          required={true}
          label='Nama'
          id='nama'
          defaultValue={data.nama}
          placeholder='Nama Pendaftar'
          validation={{
            required: { value: true, message: 'Wajib mengisi nama' },
          }}
        />
        <Input
          required={true}
          label='Asal Sekolah/Institusi'
          id='asal_sekolah'
          defaultValue={data.asal_sekolah}
          placeholder='Asal Sekolah'
          validation={{
            required: { value: true, message: 'Wajib mengisi asal sekolah' },
          }}
        />
        <Input
          required={true}
          label='Asal Kota'
          id='asal_kota'
          defaultValue={data.asal_kota}
          placeholder='Asal Kota'
          validation={{
            required: { value: true, message: 'Wajib mengisi asal kota' },
          }}
        />
        <Input
          required={true}
          label='Nomor Telepon'
          id='no_telp'
          placeholder='No. Telepon'
          defaultValue={data.no_telp}
          validation={{
            required: { value: true, message: 'Wajib mengisi nomor telepon' },
          }}
        />
        <Input
          required={true}
          label='Email'
          id='email'
          type='email'
          placeholder='email'
          defaultValue={data.email}
          validation={{
            required: { value: true, message: 'Wajib mengisi email' },
          }}
        />

        <p className='font-semibold'>Pilih jenis tryout</p>
        <div className='mt-4 flex w-max items-center space-x-4'>
          <Input
            labelType='row'
            required={true}
            label='Saintek'
            id='jurusan_to'
            type='radio'
            validation={{
              required: { value: true, message: 'Wajib memilih jenis tryout' },
            }}
          />
          <Input
            labelType='row'
            required={true}
            label='Soshum'
            id='jurusan_to'
            type='radio'
            validation={{
              required: { value: true, message: 'Wajib memilih jenis tryout' },
            }}
          />
        </div>
        <div className='flex justify-center pt-2'>
          <button className='rounded-md bg-[#3872C3] px-6 py-3 text-neutral-100 hover:bg-[#3872C3]/95'>
            Lanjutkan
          </button>
        </div>
      </form>
    </FormProvider>
  );
}
