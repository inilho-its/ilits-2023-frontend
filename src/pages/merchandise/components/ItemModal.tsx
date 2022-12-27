import React from 'react';

import ButtonLink from '@/components/links/ButtonLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import Modal from '@/components/modal/Modal';
import NextImage from '@/components/NextImage';

type ModalReturnType = {
  openModal: () => void;
};

type ItemDetail = {
  imageId: number;
  imagePreview: string;
  imageOriginal: string;
};

type MerchDataType = {
  itemId: string;
  itemImage: string;
  itemName: string;
  itemPrice: string;
  itemSize: string;
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
          <div className='flex w-full flex-row rounded-2xl border-2 border-neutral-1000 bg-white lg:h-[661px] lg:max-w-5xl'>
            <div className='flex w-2/3 flex-col'>
              {data.itemSubImage
                .filter((item) => item.imageId === id)
                .map((item, i) => (
                  <div className='w-full border-2 border-neutral-1000' key={i}>
                    <NextImage
                      src={`/images/merchandisePage/${item.imageOriginal}.png`}
                      width='100%'
                      height='90%'
                      layout='responsive'
                      objectFit='contain'
                      alt='item-1'
                    />
                  </div>
                ))}
              <div className='flex flex-row'>
                {data.isSub &&
                  data.itemSubImage?.map((item, i) => (
                    <div
                      className='w-24 cursor-pointer border-2 border-neutral-1000'
                      key={i}
                      onClick={() => setId(item.imageId)}
                    >
                      <NextImage
                        src={`/images/merchandisePage/${item.imagePreview}.png`}
                        width='100%'
                        height='90%'
                        layout='responsive'
                        objectFit='contain'
                        alt='item-1'
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className='mx-2 my-4 flex w-1/3 flex-col justify-between'>
              <div>
                <h2>{data.itemId}</h2>
                <h1>"{data.itemName}"</h1>
                <ul className='list-disc'>
                  {data.itemDesc.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <p>Ukuran</p>
                <p>{data.itemSize}</p>
              </div>
              <div className='flex flex-col space-y-4'>
                <h3>{data.itemPrice}</h3>
                <ButtonLink
                  href='/'
                  variant='yellow'
                  className='flex justify-center'
                >
                  Order Now!
                </ButtonLink>
                <UnstyledLink
                  href='#'
                  className='flex justify-center underline'
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
