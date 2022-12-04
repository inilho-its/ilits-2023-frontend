import * as React from 'react';

type FakultasFormProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
} & React.HTMLAttributes<HTMLDivElement>;

import { FormProvider, useForm } from 'react-hook-form';

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

  const { handleSubmit, register } = methods;

  // const sesi = watch('sesi');

  const upsert = useOpenCampusStore.useUpsert();

  const onSubmit = (data: BiodataFormState) => {
    upsert(data);
    setStep(3);
  };

  return (
    <div className='pt-10'>
      <div className='rounded-lg bg-[#D7E3F3] py-4 px-10'>
        <Typography variant='body' className='text-center text-neutral-800'>
          Sebelum memilih harap membaca guidebook terlebih dahulu!{' '}
          <span className='text-neutral-900 underline'>
            <PrimaryLink href='#'>Unduh Guidebook</PrimaryLink>
          </span>
        </Typography>
      </div>
      <div className='mt-4 flex flex-col items-center justify-center'>
        <Typography variant='body'>
          Pilih Sesi Open Campus Nirwana Asa
        </Typography>
        <FormProvider {...methods}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex w-1/2 flex-col justify-center'
          >
            {/* Sesi */}
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
            <div>
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
            </div>
            {/* Departemen 1*/}
            <div>
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
            </div>
            {/* Departemen 2*/}
            <div>
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
            </div>
            <div className='flex justify-center space-x-4 pt-8'>
              <button
                className='rounded-md bg-[#3872C3]/30 px-6 py-3 text-[#3872C3] hover:bg-[#3872C3]/10'
                onClick={() => setStep(1)}
              >
                Kembali
              </button>
              <button className='rounded-md bg-[#3872C3] px-6 py-3 text-neutral-100 hover:bg-[#3872C3]/95'>
                Lanjutkan
              </button>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}
