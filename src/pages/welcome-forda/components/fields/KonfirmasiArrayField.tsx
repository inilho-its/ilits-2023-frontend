import * as React from 'react';
import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import Input from '@/components/forms/Input';
import Typography from '@/components/typography/Typography';

import { BiodataFormState } from '@/types/entitas/forda';

type BiodataFormProps = {
  jumlah_tiket: number;
};

export default function KonfirmasiArrayField({
  jumlah_tiket,
}: BiodataFormProps) {
  //#region  //*=========== Field Array build ===========
  const {
    register,
    formState: { errors },
  } = useFormContext<BiodataFormState>();

  const { fields, append } = useFieldArray({
    name: 'peserta',
    shouldUnregister: true,
    rules: { required: true },
  });

  useEffect(() => {
    if (fields.length < jumlah_tiket) {
      append({});
    }
  });

  //#endregion  //*======== Field Array ===========

  return (
    <div>
      {fields &&
        fields.map((item, index) => (
          <>
            <Typography variant='h6' className='mt-4 text-center text-gray-700'>
              Peserta {index + 1}
            </Typography>
            <Input
              disabled={true}
              readOnly={true}
              label='Asal Sekolah/Institusi'
              name='asal_sekolah'
              id={`peserta.${index}.asal_sekolah`}
              placeholder='Asal Sekolah'
              helperText='Contoh : SMA Negeri 1 Surabaya'
            />
            <Input
              disabled={true}
              readOnly={true}
              label='Nama Lengkap'
              name='nama'
              id={`peserta.${index}.nama`}
              placeholder='Nama Pendaftar'
            />

            <Input
              readOnly={true}
              disabled={true}
              label='NIK'
              name='nik'
              id={`peserta.${index}.nik`}
              placeholder='Masukkan NIK'
            />
            <Input
              readOnly={true}
              name='alamat_sekolah'
              disabled={true}
              label='Alamat Sekolah'
              id={`peserta.${index}.alamat_sekolah`}
              placeholder='Masukkan Alamat Sekolah'
            />
            <Input
              readOnly={true}
              disabled={true}
              label='Nomor Telepon'
              id={`peserta.${index}.no_hp`}
              placeholder='No. Telepon'
            />
            <Input
              readOnly={true}
              disabled={true}
              label='Email'
              id={`peserta.${index}.email`}
              type='email'
              placeholder='email'
            />
            <div className='mt-4 '>
              <label>
                Pilih Jenis Tryout <span className='text-red-500'>*</span>
              </label>
              <div className='mt-2 flex space-x-6'>
                <label>
                  <div>
                    <input
                      disabled={true}
                      type='radio'
                      value='1'
                      {...register(`peserta.${index}.kelompok_ujian` as const)}
                    />
                    <span className='ml-4'>Saintek</span>
                  </div>
                </label>
                <label>
                  <div>
                    <input
                      disabled={true}
                      type='radio'
                      value='2'
                      {...register(`peserta.${index}.kelompok_ujian` as const)}
                    />
                    <span className='ml-4'>Soshum</span>
                  </div>
                </label>
              </div>
              {errors?.peserta?.[index]?.kelompok_ujian && (
                <p className='text-sm text-red-500'>Jenis Tryout Wajib Diisi</p>
              )}
            </div>
          </>
        ))}
    </div>
  );
}
