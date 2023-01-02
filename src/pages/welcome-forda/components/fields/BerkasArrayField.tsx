import * as React from 'react';
import { useEffect } from 'react';
import { useFieldArray } from 'react-hook-form';

import Input from '@/components/forms/Input';
import Typography from '@/components/typography/Typography';

export default function BerkasArrayField({
  jumlah_tiket,
}: {
  jumlah_tiket: number | string;
}) {
  //#region  //*=========== Field Array build ===========
  // const methods = useFormContext<BiodataFormState>();

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

  return (
    <div>
      {fields &&
        fields.map((item, index) => (
          <>
            <Typography variant='h5' className='text-center'>
              Peserta {index + 1}
            </Typography>
            <Input
              required={true}
              label='Repost Feeds'
              id={`peserta.${index}.repost_feeds`}
              placeholder='Repost Feeds'
              validation={{
                required: {
                  value: true,
                  message: 'Wajib mengisi asal sekolah',
                },
              }}
            />
            <Input
              required={true}
              label='Follow IG'
              id={`peserta.${index}.follow_ig`}
              placeholder='Follow IG'
              validation={{
                required: {
                  value: true,
                  message: 'Wajib mengisi asal sekolah',
                },
              }}
            />
            <Input
              required={true}
              label='Upload Vaksin'
              id={`peserta.${index}.upload_vaksin`}
              placeholder='Upload Vaksin'
              validation={{
                required: {
                  value: true,
                  message: 'Wajib mengisi asal sekolah',
                },
              }}
            />
          </>
        ))}
    </div>
  );
}
