import { StaticImageData } from 'next/image';
import React from 'react';

import clsxm from '@/lib/clsxm';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Modal from '@/components/modal/Modal';
import NextImage from '@/components/NextImage';

type ModalReturnType = {
  openModal: (data: MerchDataType) => void;
};

type ItemDetail = {
  imageId: number;
  imagePreview: string | StaticImageData;
  imageOriginal: string | StaticImageData;
};

type MerchDataType = {
  itemId: string;
  itemImage: string;
  itemName: string;
  itemPrice: string;
  itemSize?: string;
  itemLink: string;
  itemOngkir: string;
  isSub: boolean;
  numOfSub?: number;
  itemDesc: string[];
  itemSubImage: ItemDetail[];
};

export default function ItemModal({
  children,
}: {
  children: (props: ModalReturnType) => JSX.Element;
}) {
  const [state, setState] = React.useState<MerchDataType>();
  const [open, setOpen] = React.useState(false);
  const modalReturn: ModalReturnType = {
    openModal: (data) => {
      setState(data);
      setOpen(true);
    },
  };

  return (
    <>
      {children(modalReturn)}
      <Modal open={open} setOpen={setOpen}>
        {state && <ModalMain state={state} />}
      </Modal>
    </>
  );
}

function ModalMain({ state }: { state: MerchDataType }) {
  const [id, setId] = React.useState(1);
  return (
    <>
      <Modal.Body>
        <div className='flex w-full max-w-lg flex-col overflow-hidden rounded-2xl border-2 border-neutral-1000 bg-white sm:max-w-xl xl:h-[650px] xl:max-w-5xl xl:flex-row'>
          <div className={clsxm('flex flex-col xl:w-2/3')}>
            {state.itemSubImage
              .filter((item) => item.imageId === id)
              .map((item, i) => (
                <div className='w-full' key={i}>
                  <NextImage
                    src={item.imageOriginal}
                    width='100%'
                    height={state.isSub ? '77%' : '95%'}
                    layout='responsive'
                    imgClassName='rounded-l-2xl'
                    objectFit='contain'
                    alt='item-1'
                  />
                </div>
              ))}
            <div
              className={clsxm(
                'flex flex-row',
                state.isSub && 'border-t-2 border-neutral-1000'
              )}
            >
              {state.isSub &&
                state.itemSubImage.map((item, i) => (
                  <div
                    className={clsxm(
                      'w-full cursor-pointer bg-[#fdfdfd]',
                      item.imageId >= state.itemSubImage.length
                        ? ''
                        : 'border-r-2 border-neutral-1000',
                      item.imageId != id ? 'brightness-75' : ''
                    )}
                    key={i}
                    onClick={() => setId(item.imageId)}
                  >
                    <NextImage
                      src={item.imagePreview}
                      width='100%'
                      height={state.numOfSub == 2 ? '36%' : '54%'}
                      layout='responsive'
                      objectFit='contain'
                      alt='item-1'
                    />
                  </div>
                ))}
            </div>
          </div>
          <div
            className={clsxm(
              'flex flex-col justify-between border-t-2 border-neutral-1000 px-4 py-4 xl:w-1/3 xl:border-t-0',
              state.isSub && 'border-neutral-700 xl:border-l-2'
            )}
          >
            <div className='space-y-2'>
              <h2 className='text-xl font-normal text-neutral-600'>
                {state.itemId}
              </h2>
              <h1 className='text-2xl font-semibold'>"{state.itemName}"</h1>
              <ul className='ml-6 list-disc'>
                {state.itemDesc.map((desc, i) => (
                  <li key={i} className='text-base font-normal'>
                    {desc}
                  </li>
                ))}
              </ul>
              {state?.itemSize && (
                <div>
                  <p>Ukuran</p>
                  <p>{state.itemSize}</p>
                </div>
              )}
            </div>
            <div className='mt-4 flex flex-col space-y-4 sm:mt-0'>
              <h3 className='fonr-bold text-xl sm:text-[32px] sm:leading-[48px]'>
                {state.itemPrice}
              </h3>
              <ButtonLink
                href={state.itemLink}
                variant='yellow'
                className='flex justify-center text-base font-medium'
              >
                Order Now!
              </ButtonLink>
              {/* Disabled */}
              <UnstyledLink
                href={state.itemOngkir}
                className='flex cursor-not-allowed justify-center text-base font-medium text-neutral-400 underline'
              >
                Mau Free Ongkir?
              </UnstyledLink>
            </div>
          </div>
        </div>
      </Modal.Body>
    </>
  );
}
