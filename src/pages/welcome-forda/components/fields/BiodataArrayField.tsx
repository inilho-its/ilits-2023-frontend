// import * as React from 'react';

import { useEffect } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import Input from '@/components/forms/Input';
import Typography from '@/components/typography/Typography';

import { BiodataFormState } from '@/types/entitas/forda';

type BiodataFormProps = {
  jumlah_tiket: number;
};

export default function BiodataArrayField({ jumlah_tiket }: BiodataFormProps) {
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
  //#region  //*=========== Field Array build ===========

  //#endregion  //*======== Field Array ===========

  return (
    <div>
      {fields &&
        fields.map((item, index) => (
          <>
            <Typography variant='h5' className='text-center'>
              Data Peserta {index + 1}
            </Typography>
            <Input
              required={true}
              label='Asal Sekolah/Institusi'
              id={`peserta.${index}.asal_sekolah`}
              placeholder='Asal Sekolah'
              helperText='Contoh : SMA Negeri 1 Surabaya'
              validation={{
                required: {
                  value: true,
                  message: 'Wajib mengisi asal sekolah',
                },
              }}
            />
            <Input
              required={true}
              label='Nama Lengkap'
              id={`peserta.${index}.nama`}
              placeholder='Nama Pendaftar'
              validation={{
                required: { value: true, message: 'Wajib mengisi nama' },
              }}
            />

            <Input
              required={true}
              label='NIK'
              id={`peserta.${index}.nik`}
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
              required={true}
              label='Alamat Sekolah'
              id={`peserta.${index}.alamat_sekolah`}
              placeholder='Masukkan Alamat Sekolah'
              validation={{
                required: {
                  value: true,
                  message: 'Wajib mengisi alamat sekolah',
                },
              }}
            />
            <Input
              required={true}
              label='Nomor Telepon'
              id={`peserta.${index}.no_hp`}
              placeholder='No. Telepon'
              validation={{
                required: {
                  value: true,
                  message: 'Wajib mengisi nomor telepon',
                },
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
              required={true}
              label='Email'
              id={`peserta.${index}.email`}
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
                      type='radio'
                      value='1'
                      {...register(`peserta.${index}.jenis_tryout` as const)}
                    />
                    <span className='ml-4'>Saintek</span>
                  </div>
                </label>
                <label>
                  <div>
                    <input
                      type='radio'
                      value='2'
                      {...register(`peserta.${index}.jenis_tryout` as const, {
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
              {errors?.peserta?.[index]?.jenis_tryout && (
                <p className='text-sm text-red-500'>Jenis Tryout Wajib Diisi</p>
              )}
            </div>
          </>
        ))}
    </div>
  );
}
