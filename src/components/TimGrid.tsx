import * as React from 'react';

import NextImage from '@/components/NextImage';
import Typography from '@/components/typography/Typography';

type teamProps = {
  teamName: string;
  imgSrc: string;
  desc: string;
  isLeft: boolean;
};

export default function TimGrid(props: teamProps) {
  let gridStyle =
    'bg-neutral-100 border-2 border-black rounded-2xl flex flex-row' +
    props.isLeft
      ? ''
      : '-reverse';
  if (!props.isLeft) {
    gridStyle += '-reverse';
  }
  return (
    <div className={gridStyle}>
      <div className='rounded-2xl'>
        <NextImage
          src={props.imgSrc}
          width={297}
          height={239}
          objectFit='contain'
          layout='responsive'
          alt='tim'
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
