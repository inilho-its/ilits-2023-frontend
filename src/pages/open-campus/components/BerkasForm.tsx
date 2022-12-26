// import * as React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';

import useOpenCampusStore from '@/store/useOpenCampusStore';
type FormDataFile = {
  [0]: File;
  [1]: File;
};

type BiodataFormState = {
  sertifikat_vaksin: FormDataFile;
  repost_poster: FormDataFile;
  follow_ig: FormDataFile;
};

type BiodataFormProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function BerkasForm({ setStep }: BiodataFormProps) {
  // Yup Validator Image FIle Size
  // const schema = Joi.object({
  //   sertifikat_vaksin: Joi.any().required().meta({ type: 'image' }),
  //   repost_poster: Joi.any().required(),
  //   follow_ig: Joi.any().required(),
  // });
  const methods = useForm<BiodataFormState>({
    // resolver: joiResolver(schema, { abortEarly: false }, { mode: 'sync' }),
    mode: 'onChange',
  });

  const { handleSubmit } = methods;

  // Store
  const setImage = useOpenCampusStore.useSetImage();

  const onSubmit = (data: BiodataFormState) => {
    setImage(data);

    setStep(2);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-3'>
        <DropzoneInput
          label='Upload Bukti Follow Instagram @inilhoits'
          id='follow_ig'
          helperText='Ukuran maksimal file 1 Mb (.jpeg/.png)'
          validation={{
            required: {
              value: true,
              message: 'Wajib mengupload bukti follow Instagram @inilhoits',
            },
          }}
        />
        <DropzoneInput
          label='Upload Bukti Share Poster'
          id='repost_poster'
          helperText='Ukuran maksimal file 1 Mb (.jpeg/.png)'
          validation={{
            required: {
              value: true,
              message: 'Wajib mengupload bukti share poster',
            },
          }}
        />
        <DropzoneInput
          label='Upload Serifikat Vaksin Dosis ke-2'
          id='sertifikat_vaksin'
          helperText='Ukuran maksimal file 1 Mb (.jpeg/.png)'
          validation={{
            required: {
              value: true,
              message: 'Wajib mengupload bukti vaksinasi dosis ke-2',
            },
          }}
        />
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
