// import * as React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';
import Input from '@/components/forms/Input';
import Typography from '@/components/typography/Typography';

import useOpenCampusStore from '@/store/useOpenCampusStore';

type BiodataFormState = {
  name: string;
  asal_sekolah: string;
  asal_kota: string;
  no_telpon: string;
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

  const onSubmit = (data: BiodataFormState) => {
    upsert(data);
    setStep(1);
  };

  return (
    <div className='rounded-lg border-2 border-bone-1000 bg-white p-10'>
      <Typography variant='h6' as='h6' className='font-bold'>
        Pendaftaran Open Campus Nirwana Asa
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-3'>
          <Input
            required={true}
            label='Nama'
            id='nama'
            placeholder='Nama Pendaftar'
            validation={{
              required: { value: true, message: 'Wajib mengisi nama' },
            }}
          />
          <Input
            required={true}
            label='Asal Sekolah/Institusi'
            id='asal_sekolah'
            placeholder='Asal Sekolah'
            validation={{
              required: { value: true, message: 'Wajib mengisi asal sekolah' },
            }}
          />
          <Input
            required={true}
            label='Asal Kota'
            id='asal_kota'
            placeholder='Asal Kota'
            validation={{
              required: { value: true, message: 'Wajib mengisi asal kota' },
            }}
          />
          <Input
            required={true}
            label='Nomor Telepon'
            id='no_telpon'
            placeholder='No. Telepon'
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
            validation={{
              required: { value: true, message: 'Wajib mengisi email' },
            }}
          />
          <DropzoneInput
            label='Upload Bukti Follow Instagram @inilhoits'
            id='followig'
            helperText='Ukuran maksimal file 1 Mb.'
            validation={{
              required: {
                value: true,
                message: 'Wajib mengupload bukti follow instagram @inilhoits',
              },
            }}
          />
          <DropzoneInput
            label='Upload Bukti Share Poster'
            id='poster'
            helperText='Ukuran maksimal file 1 Mb.'
            validation={{
              required: {
                value: true,
                message: 'Wajib mengupload bukti share poster',
              },
            }}
          />
          <DropzoneInput
            label='Upload Serifikat Vaksin Dosis ke-3'
            id='vaksin'
            helperText='Ukuran maksimal file 1 Mb.'
            validation={{
              required: {
                value: true,
                message: 'Wajib mengupload bukti vaksinasi ke-3',
              },
            }}
          />
          <Button
            variant='lightBlue'
            round='medium'
            size='medium'
            type='submit'
            className='ml-auto'
          >
            Lanjutkan
          </Button>
        </form>
      </FormProvider>
    </div>
  );
}
