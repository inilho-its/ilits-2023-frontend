import React from 'react';

import Button from '@/components/buttons/Button';
import Modal from '@/components/modal/Modal';
import Typography from '@/components/typography/Typography';

type ModalReturnType = {
  openModal: () => void;
};

export default function ExampleModal({
  children,
  data,
}: {
  children: (props: ModalReturnType) => JSX.Element;
  data: {
    name: string;
    image: string;
  };
}) {
  const [open, setOpen] = React.useState(false);
  const modalReturn: ModalReturnType = {
    openModal: () => setOpen(true),
  };

  return (
    <>
      {children(modalReturn)}
      <Modal open={open} setOpen={setOpen}>
        <Modal.Title>{data.name}</Modal.Title>
        <Modal.Body>
          <Typography variant='b2'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            ex cumque assumenda! Nesciunt reiciendis dolores sit atque incidunt
            debitis repudiandae.
          </Typography>
          <div className='mt-3 grid grid-cols-[1fr,3fr] gap-2'>
            <Button className='justify-center' variant='bone'>
              Hi
            </Button>
            <Button className='justify-center'>Hello</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
