import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';

const CompletedForm = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-4 text-gray-700'>
      <h6 className='font-medium'>
        Terimakasih telah melakukan pendaftaran pada event :
      </h6>
      <h1 className=' text-orange-500'>WELCOME FORDA</h1>
      <p className='text-center font-medium'>
        Kami sedang memproses pembayaran Anda, silahkan cek "My Tickets" pada
        halaman utama web Ini Lho ITS! untuk melihat verifikasi pembayaran Anda.
        {/* Berikut No. Pendaftaran Anda untuk pengecekan status tiket : */}
        Pembayaran anda sudah kami terima, kami akan segera mengirimkan email
        kapada anda.
      </p>
      <div className='flex flex-col items-center font-medium'>
        <p>CP 1 : Maharani (maharaniglh/081906398138)</p>
        <p>CP 2 : Aufa (aufahakimmm/085705782769)</p>
      </div>
      <ButtonLink href='/' variant='yellow' size='medium'>
        Kembali ke halaman utama
      </ButtonLink>
    </div>
  );
};

export default CompletedForm;
