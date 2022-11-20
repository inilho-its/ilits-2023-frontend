import React, { ReactElement } from 'react';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/typography/Typography';

const TitleTable = ({
  title,
  header,
  items,
  className = 'mb-20',
}: {
  title: string;
  header: string[];
  items: string[][];
  className?: string;
}): ReactElement => {
  let id = 0;

  return (
    <div className={className}>
      <Typography
        variant='h5'
        className='stroke mb-10 text-center font-sans font-bold text-white'
      >
        {title.toUpperCase()}
      </Typography>
      <div className='layout min-h-min max-w-4xl rounded-xl border-2 border-black'>
        {/* HEADER */}
        <div className='flex h-14 items-center justify-center rounded-t-lg border-b-2 border-black bg-red-500'>
          {header.map((title) => (
            <Typography
              key={title}
              className='stroke text-center font-sans font-bold text-white' // Global stroke looks really bad
              variant='body'
              style={{ width: `${100 / header.length}%` }}
            >
              {title}
            </Typography>
          ))}
        </div>

        {/* CONTENT */}
        {items.map((item) => {
          id += 1;
          let valueId = 0;

          return (
            // Rounded bottom corners on the last item
            <div
              key={id}
              className={clsxm(
                'flex h-10 items-center justify-center border-b-2 border-black bg-red-200',
                id == items.length ? 'rounded-b-lg border-b-0' : ''
              )}
            >
              {item.map((value) => {
                valueId += 1;
                return (
                  <Typography
                    key={valueId}
                    className='text-center font-sans font-medium text-black'
                    variant='caption'
                    style={{ width: `${100 / header.length}%` }}
                  >
                    {value}
                  </Typography>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleTable;
