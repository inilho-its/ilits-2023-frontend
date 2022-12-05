// import * as React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';

import useOpenCampusStore from '@/store/useOpenCampusStore';

import { FileWithPreview } from '@/types/dropzone';

type BiodataFormState = {
  sertifikat_vaksin: FileWithPreview;
  repost_poster: FileWithPreview;
  follow_ig: FileWithPreview;
};

type BiodataFormProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function BerkasForm({ setStep }: BiodataFormProps) {
  const methods = useForm<BiodataFormState>();
  const { handleSubmit } = methods;

  // Store
  // const data = useOpenCampusStore.useFormData();
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
          id='image_followig'
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
          id='image_poster'
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
          id='image_vaksin'
          helperText='Ukuran maksimal file 1 Mb.'
          validation={{
            required: {
              value: true,
              message: 'Wajib mengupload bukti vaksinasi ke-3',
            },
          }}
        />
        <div className='space-x-2'>
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
