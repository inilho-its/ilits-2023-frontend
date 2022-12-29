// import * as React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import Input from '@/components/forms/Input';

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
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  // Store
  const upsert = useOpenCampusStore.useUpsert();
  const data = useOpenCampusStore.useFormData();

  const onSubmit = (data: BiodataFormState) => {
    upsert(data);
    setStep(2);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-5'>
        <Input
          required={true}
          label='Asal Sekolah/Institusi'
          id='asal_sekolah'
          defaultValue={data?.asal_sekolah}
          placeholder='Asal Sekolah'
          helperText='Contoh : SMA Negeri 1 Surabaya'
          validation={{
            required: { value: true, message: 'Wajib mengisi asal sekolah' },
          }}
        />
        <Input
          required={true}
          label='Nama Lengkap'
          id='nama'
          defaultValue={data?.nama}
          placeholder='Nama Pendaftar'
          validation={{
            required: { value: true, message: 'Wajib mengisi nama' },
          }}
        />

        <Input
          required={true}
          label='NIK'
          id='nik'
          defaultValue={data?.asal_kota}
          placeholder='Masukkan NIK'
          validation={{
            required: {
              value: true,
              message: 'Wajib mengisi NIK',
            },
            pattern: {
              value: /^[0-9]*$/,
              message: 'NIK harus berupa angka',
            },
            maxLength: {
              value: 16,
              message: 'NIK harus sejumlah 16 karakter',
            },
            minLength: {
              value: 16,
              message: 'NIK harus sejumlah 16 karakter',
            },
          }}
        />
        <Input
          required={true}
          label='Alamat Sekolah'
          defaultValue={data?.no_hp}
          id='alamat_sekolah'
          placeholder='Masukkan Alamat Sekolah'
          validation={{
            required: { value: true, message: 'Wajib mengisi alamat sekolah' },
          }}
        />
        <Input
          required={true}
          label='Nomor Telepon'
          defaultValue={data?.no_hp}
          id='no_hp'
          placeholder='No. Telepon'
          validation={{
            required: { value: true, message: 'Wajib mengisi nomor telepon' },
            pattern: {
              value: /^[0-9]*$/,
              message: 'Nomor telepon harus berupa angka',
            },
            maxLength: {
              value: 16,
              message: 'Nomor telepon maksimal 16 karakter',
            },
            minLength: {
              value: 8,
              message: 'Nomor telepon minimal 10 karakter',
            },
          }}
        />
        <Input
          required={true}
          label='Email'
          defaultValue={data?.email}
          id='email'
          type='email'
          placeholder='email'
          validation={{
            required: {
              value: true,
              message: 'Wajib mengisi email',
            },
            pattern: {
              value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              message: 'Email tidak valid',
            },
          }}
        />
        <div className='mt-4 '>
          <label>
            Pilih Jenis Tryout <span className='text-red-500'>*</span>
          </label>
          <div className='mt-2 flex space-x-6'>
            <label>
              <div>
                <input type='radio' value='1' {...register('jenis_tryout')} />
                <span className='ml-4'>Saintek</span>
              </div>
            </label>
            <label>
              <div>
                <input
                  type='radio'
                  value='2'
                  {...register('jenis_tryout', {
                    required: {
                      value: true,
                      message: 'Wajib memilih jenis tryout',
                    },
                  })}
                />
                <span className='ml-4'>Soshum</span>
              </div>
            </label>
          </div>
          {errors.jenis_tryout && (
            <p className='text-sm text-red-500'>Jenis Tryout Wajib Diisi</p>
          )}
        </div>
        <div className='flex justify-center space-x-2 pt-2'>
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
