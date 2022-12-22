import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
type FakultasFormProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
} & React.HTMLAttributes<HTMLDivElement>;

import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import apiMock, { mockQuery } from '@/lib/apiMock';
import useDialog from '@/hooks/useDialog';

import Button from '@/components/buttons/Button';
import SelectInput from '@/components/forms/SelectInput';
import PrimaryLink from '@/components/links/PrimaryLink';
import Typography from '@/components/typography/Typography';

import useOpenCampusStore from '@/store/useOpenCampusStore';

import { ApiReturn } from '@/types/api-return';
import { KuotaOpenCampus } from '@/types/open-campus';

type BiodataFormState = {
  pilihan_fakultas1: string;
  pilihan_fakultas2: string;
  pilihan_departemen1: string;
  pilihan_departemen2: string;
};
type FormDataFile = {
  [0]: File;
  [1]: File;
};

type ApiResponse = {
  status: boolean;
  message: string;
};

type OpenCampusForm = {
  [key: string]: string | File | FormDataFile;
  nama: string;
  asal_sekolah: string;
  asal_kota: string;
  no_hp: string;
  email: string;
  jenis_tryout: string;
  pilihan_fakultas1: string;
  pilihan_fakultas2: string;
  pilihan_departemen1: string;
  pilihan_departemen2: string;
  sertifikat_vaksin: FormDataFile;
  repost_poster: FormDataFile;
  follow_ig: FormDataFile;
};

export default function FakultasDepartemenForm({ setStep }: FakultasFormProps) {
  const form_data = useOpenCampusStore.useFormData();
  const methods = useForm<BiodataFormState>({
    mode: 'onTouched',
    defaultValues: {
      pilihan_fakultas1: form_data?.pilihan_fakultas1 || '1',
      pilihan_fakultas2: form_data?.pilihan_fakultas2 || '3',
      pilihan_departemen1: form_data?.pilihan_departemen1 || '2',
      pilihan_departemen2: form_data?.pilihan_departemen2 || '12',
    },
  });

  const dialog = useDialog();
  const { handleSubmit, watch } = methods;

  const url = 'https://inilho.its.ac.id/api/open-campus/kuota';

  const { data: queryData } = useQuery<ApiReturn<KuotaOpenCampus>, Error>([
    url,
    mockQuery,
    {
      keepPreviousData: true,
    },
  ]);

  const departemen = watch(['pilihan_fakultas1', 'pilihan_fakultas2']);

  const data_departemen = React.useMemo(() => {
    if (!queryData) return [];
    const data = queryData.data;
    const fakultas1 = data.sesi1.find(
      (item) => item.id_fakultas === parseInt(departemen[0])
    );
    const fakultas2 = data.sesi2.find(
      (item) => item.id_fakultas === parseInt(departemen[1])
    );
    return [fakultas1, fakultas2];
  }, [queryData, departemen]);

  if (!queryData)
    return (
      <div className='mt-20 flex items-center justify-center'>
        <Typography
          variant='body'
          className='text-center font-semibold text-neutral-900'
        >
          Loading...
        </Typography>
      </div>
    );
  // Watch

  const onSubmit = (data: BiodataFormState) => {
    const Form_Data = {
      ...data,
      ...form_data,
    } as OpenCampusForm;

    const formdata: FormData = new FormData();

    for (const key in Form_Data) {
      if (
        key === 'sertifikat_vaksin' ||
        key === 'repost_poster' ||
        key === 'follow_ig'
      ) {
        formdata.append(key, Form_Data[key][0] as File);
      }
      formdata.append(key, Form_Data[key] as string);
    }

    toast.promise(
      apiMock
        .post<ApiResponse>('/open-campus', formdata, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          if (res.data.status) {
            setStep(3);
          } else {
            throw res.data.message;
          }
        })
        .catch((err) => {
          throw err;
        }),
      {
        loading: 'Loading',
        success: "You've successfully registered",
        error: (err) => (
          <p>
            {err.response
              ? err.response.data.message
              : 'Something Happened. Wait a bit then try again'}
          </p>
        ),
      }
    );
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
          <span className='text-neutral-900 underline transition duration-100 hover:text-orange-400'>
            <PrimaryLink href='https://drive.google.com/file/d/1F3qzerr-T9BCJro8afBmtslw2EqEUu7G/view'>
              Unduh Guidebook
            </PrimaryLink>
          </span>
        </Typography>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mt-4 '>
            {/* Fakultas */}
            <Typography variant='body' className='mt-4'>
              Yuk Pilih Fakultas Sesi Pertama!
            </Typography>
            <SelectInput
              label='Pilih Fakultas Sesi Pertama'
              id='pilihan_fakultas1'
              name='pilihan_fakultas1'
              isLabel={false}
            >
              {queryData.data.sesi1.map((fakultas, index) => (
                <option value={fakultas.id_fakultas} key={index}>
                  {fakultas.nama}
                </option>
              ))}
            </SelectInput>
            <Typography variant='body' className='mt-4'>
              Yuk Pilih Fakultas Sesi Kedua!
            </Typography>
            <SelectInput
              label='Pilih Fakultas Sesi Pertama'
              id='pilihan_fakultas2'
              name='pilihan_fakultas2'
              isLabel={false}
            >
              {queryData.data.sesi2.map((fakultas, index) => (
                <option value={fakultas.id_fakultas} key={index}>
                  {fakultas.nama}
                </option>
              ))}
            </SelectInput>
            {data_departemen[0] && data_departemen[1] && (
              <>
                {/* Departemen 1*/}
                <Typography variant='body' className='mt-4'>
                  Yuk Pilih Departemen Sesi Pertama!
                </Typography>
                <SelectInput
                  label='Pilih Departemen Sesi Kedua'
                  id='pilihan_departemen1'
                  name='pilihan_departemen1'
                  isLabel={false}
                >
                  {data_departemen[0].departemen.map((depart, index) => (
                    <option value={depart.id_departemen} key={index}>
                      {`${depart.nama} - ${depart.pendaftar} dari ${depart.kuota}`}
                    </option>
                  ))}
                </SelectInput>
                {/* Departemen 2*/}
                <Typography variant='body' className='mt-4'>
                  Yuk Pilih Departemen Sesi Kedua!
                </Typography>
                <SelectInput
                  label='Pilih Departemen Sesi Kedua'
                  id='pilihan_departemen2'
                  name='pilihan_departemen2'
                  isLabel={false}
                >
                  {data_departemen[1].departemen.map((depart, index) => (
                    <option value={depart.id_departemen} key={index}>
                      {`${depart.nama} - ${depart.pendaftar} dari ${depart.kuota}`}
                    </option>
                  ))}
                </SelectInput>
              </>
            )}
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
