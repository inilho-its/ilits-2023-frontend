// import * as React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';

import useOpenCampusStore from '@/store/useOpenCampusStore';

type BiodataFormState = {
  image_vaksin: File;
  image_poster: File;
  image_followig: File;
};

type BiodataFormProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function BerkasForm({ setStep }: BiodataFormProps) {
  const methods = useForm<BiodataFormState>();
  const { handleSubmit } = methods;

  // Store
  const upsert = useOpenCampusStore.useUpsert();

  const onSubmit = (data: BiodataFormState) => {
    upsert(data);
    setStep(2);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-3'>
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
  );
}
