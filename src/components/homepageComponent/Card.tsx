import * as React from 'react';

import Typography from '@/components/typography/Typography';

type Contents = {
  title: string;
  content: string;
};

function Card({ title, content }: Contents) {
  return (
    <div className='hover:shadow-box-md 1xl:hover:shadow-box flex flex-col gap-4 rounded-xl border-2 border-black p-5 hover:bg-yellow-300'>
      <Typography variant='title' className='font-semibold'>
        {title}
      </Typography>
      <Typography variant='paragraph'>{content}</Typography>
    </div>
  );
}

export default Card;
