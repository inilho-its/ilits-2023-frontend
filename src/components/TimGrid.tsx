import * as React from 'react';

import clsxm from '@/lib/clsxm';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

type teamProps = {
  teamName: string;
  imgSrc: string;
  desc: string;
  isLeft: boolean;
};

export default function TimGrid(props: teamProps) {
  return (
    <div
      className={clsxm(
        'flex rounded-2xl border-2 border-black bg-neutral-100',
        props.isLeft ? ' flex-row' : ' flex-row-reverse'
      )}
    >
      <div className='rounded-2xl'>
        <NextImage
          src={props.imgSrc}
          width={297}
          height={239}
          objectFit='contain'
          layout='responsive'
          alt='tim'
          className='rounded-2xl'
        />
      </div>
      <div className='pt-5 pl-7 pr-7'>
        <Typography variant='h4' className='font-bold text-bone-1000'>
          {props.teamName}
        </Typography>
        <Typography variant='body' className='pt-4 text-bone-1000'>
          {props.desc}
        </Typography>
      </div>
    </div>
  );
}
