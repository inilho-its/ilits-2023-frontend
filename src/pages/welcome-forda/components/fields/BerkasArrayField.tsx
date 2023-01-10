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
            <Typography
              variant='h6'
              className='mt-4 text-center font-semibold text-gray-700'
            >
              Peserta {index + 1}
            </Typography>
            <Input
              name='repost_feeds'
              required={true}
              label='Repost Feeds poster Welcome Forda
              '
              id={`peserta.${index}.repost_feeds`}
              placeholder='Please kindly drop links here'
              validation={{
                required: {
                  value: true,
                  message: 'Wajib mengisi bukti repost feeds',
                },
              }}
            />
            <Input
              name='follow_ig'
              required={true}
              label='Follow Instagram @inilhoits dan Akun Forda masing-masing'
              id={`peserta.${index}.follow_ig`}
              placeholder='Please kindly drop links here'
              validation={{
                required: {
                  value: true,
                  message: 'Wajib mengisi bukti follow ig',
                },
              }}
            />
            <Input
              name='upload_vaksin'
              required={true}
              label='Upload Vaksin'
              id={`peserta.${index}.upload_vaksin`}
              placeholder='Please kindly drop links here'
              validation={{
                required: {
                  value: true,
                  message: 'Wajib mengisi bukti upload vaksin',
                },
              }}
            />
          </>
        ))}
    </div>
  );
}
