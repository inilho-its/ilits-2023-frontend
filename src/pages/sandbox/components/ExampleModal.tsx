import React from 'react';

import Button from '@/components/buttons/Button';
import Modal from '@/components/modal/Modal';
import Typography from '@/components/typography/Typography';

type DataType = {
  name: string;
  image: string;
};

type ModalReturnType = {
  openModal: (data: DataType) => void;
};

export default function ExampleModal({
  children,
}: {
  children: (props: ModalReturnType) => JSX.Element;
}) {
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState<DataType>();
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
        {state && <ModalExample state={state} setOpen={setOpen} />}
      </Modal>
    </>
  );
}

function ModalExample({
  state,
  setOpen,
}: {
  state: DataType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <>
      <Modal.Title>{state.name}</Modal.Title>
      <Modal.Body>
        <Typography variant='b2'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          ex cumque assumenda! Nesciunt reiciendis dolores sit atque incidunt
          debitis repudiandae.
        </Typography>
        <div className='mt-3 grid grid-cols-[1fr,3fr] gap-2'>
          <Button
            className='justify-center'
            variant='bone'
            onClick={() => setOpen(false)}
          >
            Hi
          </Button>
          <Button className='justify-center'>Hello</Button>
        </div>
      </Modal.Body>
    </>
  );
}
