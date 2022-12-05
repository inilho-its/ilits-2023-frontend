import * as React from 'react';

type FakultasFormProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
} & React.HTMLAttributes<HTMLDivElement>;

import { FormProvider, useForm } from 'react-hook-form';

import useDialog from '@/hooks/useDialog';

import Button from '@/components/buttons/Button';
import SelectInput from '@/components/forms/SelectInput';
import PrimaryLink from '@/components/links/PrimaryLink';
import Typography from '@/components/typography/Typography';

import useOpenCampusStore from '@/store/useOpenCampusStore';

type BiodataFormState = {
  sesi: string;
  fakultas: string;
  departemen: string;
};

export default function FakultasDepartemenForm({ setStep }: FakultasFormProps) {
  const methods = useForm<BiodataFormState>({
    mode: 'onChange',
    defaultValues: { sesi: '1' },
  });

  const dialog = useDialog();

  const { handleSubmit, register } = methods;

  // const sesi = watch('sesi');

  const upsert = useOpenCampusStore.useUpsert();

  const onSubmit = (data: BiodataFormState) => {
    upsert(data);
    setStep(3);
  };
  const openWarning = () => {
    dialog({
      title: 'Apakah Anda Yakin!!!',
      description:
        'Periksa kembali data yang anda masukan, dan pastikan semuanya benar',
      submitText: 'Daftar',
      variant: 'warning',
      catchOnCancel: true,
    }).then(() => handleSubmit(onSubmit)());
  };

  return (
    <div className='pt-12'>
      <div className='rounded-lg bg-[#D7E3F3] py-4 px-10'>
        <Typography variant='body' className='text-center text-neutral-800'>
          Sebelum memilih harap membaca guidebook terlebih dahulu!{' '}
          <span className='text-neutral-900 underline'>
            <PrimaryLink href='#'>Unduh Guidebook</PrimaryLink>
          </span>
        </Typography>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mt-4 '>
            <Typography variant='body'>
              Pilih Sesi Open Campus Nirwana Asa
            </Typography>
            <div className='mt-4 flex items-center justify-center'>
              <div className='flex space-x-6'>
                <label>
                  <div>
                    <input type='radio' value='1' {...register('sesi')} />
                    <span className='ml-2'>Sesi Pertama</span>
                  </div>
                </label>
                <label>
                  <div>
                    <input type='radio' value='2' {...register('sesi')} />
                    <span className='ml-2'>Sesi Kedua</span>
                  </div>
                </label>
              </div>
            </div>
            {/* Fakultas */}
            <Typography variant='body' className='mt-4'>
              Yuk Pilih Fakultas Impianmu!
            </Typography>
            <SelectInput
              label='Fakultas'
              id='fakultas'
              name='fakultas'
              isLabel={false}
            >
              <option value='fakultas-1'>Fakultas 1</option>
              <option value='fakultas-2'>Fakultas 2</option>
              <option value='fakultas-3'>Fakultas 3</option>
            </SelectInput>
            {/* Departemen 1*/}
            <Typography variant='body' className='mt-4'>
              Yuk Pilih Departemen Pertama!
            </Typography>
            <SelectInput
              label='Departemen Kedua'
              id='departemen-1'
              name='departemen-1'
              isLabel={false}
            >
              <option value='Teknik Rendy'>Departemen 1</option>
              <option value='Rendy Lelet'>Departemen 2</option>
              <option value='Rendy'>Departemen 3</option>
            </SelectInput>
            {/* Departemen 2*/}
            <Typography variant='body' className='mt-4'>
              Yuk Pilih Departemen Kedua!
            </Typography>
            <SelectInput
              label='Departemen Kedua'
              id='departemen-2'
              name='departemen-2'
              isLabel={false}
            >
              <option value='Teknik Rendy'>Departemen 1</option>
              <option value='Rendy Lelet'>Departemen 2</option>
              <option value='Rendy'>Departemen 3</option>
            </SelectInput>
            <div className='flex justify-center space-x-4 pt-8'>
              <Button onClick={() => setStep(1)} variant='red'>
                Kembali
              </Button>
              <Button variant='lightBlue' onClick={openWarning}>
                Lanjut
              </Button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
