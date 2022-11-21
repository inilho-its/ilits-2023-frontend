import React, { ReactElement } from 'react';

import clsxm from '@/lib/clsxm';

import Typography from '@/components/typography/Typography';

const TitleTable = ({
  title,
  header,
  items,
  className = 'mb-20',
  headerClass,
  tableClass,
}: {
  title: string;
  header: string[];
  items: string[][];
  className?: string;
  headerClass: string;
  tableClass: string;
}): ReactElement => {
  return (
    <div className={className}>
      <Typography
        variant='h5'
        className='stroke mb-10 text-center font-sans font-bold text-white'
      >
        {title}
      </Typography>
      <div className='layout min-h-min max-w-4xl rounded-xl border-2 border-black'>
        {/* HEADER */}
        <div
          className={clsxm(
            'flex h-14 items-center justify-center rounded-t-lg border-b-2 border-black bg-red-500',
            headerClass
          )}
        >
          {header?.map((title, index) => (
            <Typography
              style={{ width: `${100 / header.length}%` }} // we use style  here for readibility (integrating to tailwind results in unneeded complexity)
              key={index}
              className='stroke text-center font-sans font-bold text-white' // Global stroke looks really bad
              variant='body'
            >
              {title?.toUpperCase()}
            </Typography>
          ))}
        </div>

        {/* CONTENT */}
        {items?.map((item, indexRow) => {
          return (
            // Rounded bottom corners on the last item
            <div
              key={indexRow}
              className={clsxm(
                'flex h-10 items-center justify-center border-b-2 border-black bg-red-200',
                indexRow + 1 == items.length ? 'rounded-b-lg border-b-0' : '',
                tableClass
              )}
            >
              {item?.map((value, indexItem) => {
                return (
                  <Typography
                    key={indexItem}
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
