// import * as React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import clsxm from '@/lib/clsxm';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';
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

export default function KonfirmasiForm({ setStep }: BiodataFormProps) {
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
    setStep(1);
  };

  return (
    <FormProvider {...methods}>
      <h2 className='text-center font-bold'>Konfirmasi Akhir Pendaftaran</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-5'>
        <h4>Verifikasi Dokumen</h4>
        <Input
          disabled
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
          disabled
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
          disabled
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
          disabled
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
          disabled
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
          disabled
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
                <input
                  disabled
                  type='radio'
                  value='1'
                  {...register('jenis_tryout')}
                />
                <span className='ml-4'>Saintek</span>
              </div>
            </label>
            <label>
              <div>
                <input
                  disabled
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
        <div className='space-y-3 font-semibold'>
          <h4>Check Out</h4>
          <div className='flex items-center justify-between'>
            <p>3x Tiket Welcome</p>
            <p>Rp30.000</p>
          </div>
          <div className='flex items-center justify-between'>
            <p>Kode Refferal</p>
            <input
              type='text'
              className={clsxm(
                'block rounded-md shadow-sm hover:border-blue-400',
                'focus:ring-primary-500 border-neutral-300 focus:border-blue-400'
              )}
            />
          </div>
          <div className='flex items-center justify-between'>
            <p>Diskon Kode Refferal</p>
            <p>-Rp10.000</p>
          </div>
          <hr className='border-[1px] bg-neutral-300' />
          <div className='flex items-center justify-between text-xl font-bold text-success-main'>
            <p>Total Bayar</p>
            <p>Rp50.000</p>
          </div>
          <div className='space-y-5 font-normal'>
            <SelectInput
              required
              id='opsi_pembayaran'
              label='Opsi Pembayaran'
              validation={{ required: 'Wajib memilih opsi pembayaran' }}
              placeholder='Pilih opsi pembayaran anda'
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </SelectInput>
            <DropzoneInput
              label='Upload Bukti Pembayaran'
              id='bukti_pembayaran'
              helperText='Ukuran maksimal file 1 Mb (.jpeg/.png)'
              validation={{
                required: {
                  value: true,
                  message: 'Wajib mengupload bukti pembayaran',
                },
              }}
            />
          </div>
        </div>
        <div className='flex justify-center space-x-2 pt-2'>
          <Button
            variant='red'
            round='medium'
            size='medium'
            onClick={() => setStep(2)}
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
