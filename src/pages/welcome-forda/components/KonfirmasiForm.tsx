import * as React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import apiMock from '@/lib/apiMock';
import clsxm from '@/lib/clsxm';

import Button from '@/components/buttons/Button';
import DropzoneInput from '@/components/forms/DropzoneInput';
import Input from '@/components/forms/Input';
import SelectInput from '@/components/forms/SelectInput';

import useFordaStore from '@/store/useFordaStore';

import { Bank_Forda } from '@/constant/bank';
import KonfirmasiArrayField from '@/pages/welcome-forda/components/fields/KonfirmasiArrayField';

import { ApiReturn } from '@/types/api-return';
import { BiodataFormState } from '@/types/entitas/forda';

type ImageFile = {
  [0]: File;
  [1]: File;
};

type KonfirmasiForm = {
  diskon_id: string;
  opsi_pembayaran: string;
  bukti_pembayaran: ImageFile;
} & BiodataFormState;

type DiskonReturn = {
  diskon_id: string;
  total_harga: number;
};

type BiodataFormProps = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export default function KonfirmasiForm({ setStep }: BiodataFormProps) {
  const [voucer, setVoucer] = React.useState<DiskonReturn>();
  const [currentHarga, setCurrentHarga] = React.useState(0);

  //#region  //*=========== Store  ===========
  const imageData = useFordaStore.useImageFile();
  const formData = useFordaStore.useFormData();
  const pesertaData = useFordaStore.usePesertaData();

  //#endregion  //*======== Store  ===========

  const methods = useForm<KonfirmasiForm>({
    defaultValues: {
      peserta: Object.entries(pesertaData).map(([, value]) => value),
    },
  });

  const {
    handleSubmit,
    watch,

    unregister,
  } = methods;

  // unrigister peserta
  React.useEffect(() => {
    unregister('peserta', { keepValue: true });
  }, [unregister]);

  //#region  //*=========== Get Diskon ===========
  const diskon_id = watch('diskon_id');

  const getDiskon = (data: {
    kode_diskon: string;
    jumlah_pendaftar: number;
    forda_id: string | number;
  }) => {
    toast.promise(
      apiMock
        .post<ApiReturn<DiskonReturn>>('/forda/diskon', data)
        .then((res) => {
          if (res.data.status) {
            setVoucer(res.data.data);
            setCurrentHarga(res.data.data.total_harga);
            return res.data;
          } else {
            throw Error(res.data.message);
          }
        }),
      {
        loading: 'Loading',
        success: (res) => (
          <>
            <div className='flex flex-col space-y-2'>
              <span className='font-bold'>{res.message}</span>
            </div>
          </>
        ),
        error: (err) => (
          <>
            <div className='flex flex-col space-y-2'>
              <span className='font-bold'>
                {typeof err.response.data.message === 'string'
                  ? err.response.data.message
                  : err.response.data.message[0].constraints.isNotEmpty}
              </span>
            </div>
          </>
        ),
      }
    );
  };

  const onDiskon = () => {
    const data = {
      kode_diskon: diskon_id,
      jumlah_pendaftar: formData.jumlah_tiket || 0,
      forda_id: formData.forda_id || 0,
    };

    if (data.kode_diskon !== '' || data.kode_diskon !== null) {
      getDiskon(data);
    }
  };

  //#endregion  //*======== Get Diskon ===========

  const onSubmit = (data: KonfirmasiForm) => {
    const formdata = new FormData();

    //#region  //*=========== Input Peserta ===========
    const peserta = Object.entries(pesertaData).map(([, value]) => value);
    // console.log(peserta);

    peserta.map((peserta, index) => {
      for (const key in peserta) {
        formdata.append(`peserta[${index}][${key}]`, peserta[key] as string);
      }
    });
    //#endregion  //*======== Input Peserta ===========

    //#region  //*=========== Input Image ===========
    const image = Object.entries(imageData).map(([, value]) => value);
    if (image.length >= 1) {
      image.map((image, index) => {
        for (const key in image) {
          formdata.append(`peserta[${index}][${key}]`, image[key] as string);
        }
      });
    }
    //#endregion  //*======== Input Image ===========

    //#region  //*=========== formForda ===========
    // jumlah_tiket
    formdata.append('jumlah_tiket', formData.jumlah_tiket?.toString() || '1');

    // Harga
    let harga = 0;
    if (voucer) {
      harga = currentHarga;
    } else {
      if (formData.harga) {
        harga =
          (formData.harga as number) * (formData.jumlah_tiket as number) || 1;
      }
    }
    formdata.append('harga', harga.toString());
    if (formData.forda_id) {
      formdata.append('forda_id', formData.forda_id.toString());
    }
    formdata.append('opsi_pembayaran', data.opsi_pembayaran as string);
    formdata.append('bukti_pembayaran', data.bukti_pembayaran[0] as File);

    //#endregion  //*======== formForda ===========

    // Sending data
    toast.promise(
      apiMock
        .post<ApiReturn<null>>('/forda', formdata, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          if (res.data.status) {
            setStep(4);
            return res.data;
          } else {
            throw Error(res.data.message);
          }
        }),
      {
        loading: 'Loading',
        success: (res) => (
          <div className='flex flex-col space-y-2'>
            <span className='font-bold'>{res.message}</span>
          </div>
        ),
        error: (err) => (
          <div className='flex flex-col space-y-2'>
            <span className='font-bold'>{err.response.data.message}</span>
          </div>
        ),
      }
    );
  };

  return (
    <FormProvider {...methods}>
      <h2 className='text-center font-bold'>Konfirmasi Akhir Pendaftaran</h2>
      <form onSubmit={handleSubmit(onSubmit)} className='mt-8 space-y-5'>
        <h4>Verifikasi Dokumen</h4>
        <div>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
          <pre>{JSON.stringify(pesertaData, null, 2)}</pre>
          <pre>{JSON.stringify(imageData, null, 2)}</pre>

          {/* Final Value */}
        </div>
        <KonfirmasiArrayField jumlah_tiket={formData?.jumlah_tiket || 0} />

        <div className='space-y-3 font-semibold'>
          <h4>Check Out</h4>
          <div className='flex items-center justify-between'>
            <p>{formData.jumlah_tiket} Tiket Welcome</p>
            {formData.jumlah_tiket && formData.harga && (
              <p>Rp{formData.harga * formData.jumlah_tiket}</p>
            )}
          </div>
          <div className='flex items-center justify-between'>
            <p>Kode Refferal</p>
            <div className='flex gap-1'>
              <Input
                disabled={!!voucer}
                label=''
                id='diskon_id'
                type='text'
                className={clsxm(
                  'block rounded-md shadow-sm hover:border-blue-400',
                  'focus:ring-primary-500 border-neutral-300 focus:border-blue-400'
                )}
              />
              {!voucer && (
                <Button
                  type='button'
                  onClick={onDiskon}
                  variant='lightBlue'
                  size='small'
                >
                  Apply
                </Button>
              )}
              {voucer && (
                <Button
                  type='reset'
                  onClick={() => {
                    setVoucer(undefined);
                    setCurrentHarga(0);
                  }}
                  variant='orange'
                  size='small'
                >
                  Reset
                </Button>
              )}
            </div>
          </div>
          {voucer && (
            <div className='flex items-center justify-between'>
              <p>Diskon Kode Refferal</p>
              {formData.harga && formData.jumlah_tiket && (
                <p>
                  -Rp{formData.harga * formData.jumlah_tiket - currentHarga}
                </p>
              )}
            </div>
          )}
          <hr className='border-[1px] bg-neutral-300' />
          <div className='flex items-center justify-between text-xl font-bold text-success-main'>
            <p>Total Bayar</p>
            {formData.harga && formData.jumlah_tiket && (
              <p>
                Rp
                {currentHarga === 0
                  ? formData.harga * formData.jumlah_tiket
                  : currentHarga}
              </p>
            )}
          </div>
          <div className='space-y-5 font-normal'>
            <SelectInput
              required
              id='opsi_pembayaran'
              label='Opsi Pembayaran'
              validation={{ required: 'Wajib memilih opsi pembayaran' }}
              placeholder='Pilih opsi pembayaran anda'
            >
              {Bank_Forda.map((bank) => (
                <option key={bank.id} value={bank.id}>
                  {bank.id} : {bank.name}
                </option>
              ))}
            </SelectInput>
            <DropzoneInput
              label='Upload Bukti Pembayaran'
              id='bukti_pembayaran'
              helperText='Ukuran maksimal file 1 Mb (.jpeg/.png)'
              validation={{
                required: {
                  value: true,
                  message: 'Wajib mengupload bukti pembayaran',
                },
              }}
            />
          </div>
        </div>
        <div className='flex justify-center space-x-2 pt-2'>
          <Button
            variant='red'
            round='medium'
            size='medium'
            onClick={() => {
              setStep(2), setCurrentHarga(0);
            }}
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
      </form>
    </FormProvider>
  );
}
