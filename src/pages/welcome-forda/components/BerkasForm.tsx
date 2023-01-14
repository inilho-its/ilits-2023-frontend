// import * as React from 'react';

import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/buttons/Button';

import useFordaStore from '@/store/useFordaStore';

import BerkasArrayField from '@/pages/welcome-forda/components/fields/BerkasArrayField';

import { BerkasFormType } from '@/types/entitas/forda';
type BiodataFormProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function BerkasForm({ setStep }: BiodataFormProps) {
  //#region  //*=========== Store ===========

  const setImage = useFordaStore.useSetImageFile();
  const formData = useFordaStore.useFormData();
  const imageData = useFordaStore.useImageFile();

  //#endregion  //*======== Store ===========

  const methods = useForm<BerkasFormType>({
    mode: 'onChange',
    defaultValues: {
      peserta: Object.entries(imageData).map(([, value]) => value),
    },
  });

  const { handleSubmit } = methods;

  const openGuideBook = () => {
    window.open('https://inilho.its.ac.id/GuidebookPembayaranWelfor', '_blank');
  };

  // Store
  const onSubmit = (data: BerkasFormType) => {
    setImage(data.peserta);
    openGuideBook();
    setStep(3);
  };
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-3'>
        <div className='flex justify-center space-x-2 pt-2'>
          <div className='w-full'>
            {formData.jumlah_tiket && (
              <BerkasArrayField jumlah_tiket={formData?.jumlah_tiket || 0} />
            )}

            <div className='mt-5'>
              <Button
                variant='red'
                round='medium'
                size='medium'
                onClick={() => setStep(1)}
              >
                Kembali
              </Button>
              <Button
                variant='lightBlue'
                round='medium'
                size='medium'
                type='submit'
                className='ml-4'
              >
                Lanjutkan
              </Button>
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  );
}
