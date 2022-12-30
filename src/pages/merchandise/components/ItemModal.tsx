import { StaticImageData } from 'next/image';
import React from 'react';

import clsxm from '@/lib/clsxm';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Modal from '@/components/modal/Modal';
import NextImage from '@/components/NextImage';

type ModalReturnType = {
  openModal: () => void;
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
  itemDesc: string[];
  itemSubImage: ItemDetail[];
};

export default function ItemModal({
  children,
  data,
}: {
  children: (props: ModalReturnType) => JSX.Element;
  data: MerchDataType;
}) {
  const [id, setId] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const modalReturn: ModalReturnType = {
    openModal: () => setOpen(true),
  };

  return (
    <>
      {children(modalReturn)}
      <Modal open={open} setOpen={setOpen}>
        <Modal.Body>
          <div className='flex h-[650px] w-full max-w-5xl flex-row overflow-hidden rounded-2xl border-2 border-neutral-1000 bg-white'>
            <div className={clsxm('flex w-2/3 flex-col')}>
              {data.itemSubImage
                .filter((item) => item.imageId === id)
                .map((item, i) => (
                  <div className='w-full' key={i}>
                    <NextImage
                      src={item.imageOriginal}
                      width='100%'
                      height={data.isSub ? '77%' : '95%'}
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
                  data.isSub && 'border-t-2 border-neutral-1000'
                )}
              >
                {data.isSub &&
                  data.itemSubImage.map((item, i) => (
                    <div
                      className={clsxm(
                        'w-full cursor-pointer bg-[#fdfdfd]',
                        item.imageId >= data.itemSubImage.length
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
                        height='54%'
                        layout='responsive'
                        objectFit='contain'
                        alt='item-1'
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className='flex w-1/3 flex-col justify-between px-4 py-4'>
              <div className='space-y-2'>
                <h2 className='text-xl font-normal text-neutral-600'>
                  {data.itemId}
                </h2>
                <h1 className='text-2xl font-semibold'>"{data.itemName}"</h1>
                <ul className='ml-6 list-disc'>
                  {data.itemDesc.map((desc, i) => (
                    <li key={i} className='text-base font-normal'>
                      {desc}
                    </li>
                  ))}
                </ul>
                {data?.itemSize && (
                  <div>
                    <p>Ukuran</p>
                    <p>{data.itemSize}</p>
                  </div>
                )}
              </div>
              <div className='flex flex-col space-y-4'>
                <h3 className='fonr-bold text-[32px] leading-[48px]'>
                  {data.itemPrice}
                </h3>
                <ButtonLink
                  href={data.itemLink}
                  variant='yellow'
                  className='flex justify-center text-base font-medium'
                >
                  Order Now!
                </ButtonLink>
                <UnstyledLink
                  href={data.itemOngkir}
                  className='flex justify-center text-base font-medium underline'
                >
                  Mau Free Ongkir?
                </UnstyledLink>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
