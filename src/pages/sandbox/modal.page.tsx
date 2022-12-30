import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

import ExampleModal from '@/pages/sandbox/components/ExampleModal';

export default function ModalPage() {
  const merchendasing = [
    {
      name: 'Typography',
      image: '/sandbox/typography',
    },
    {
      name: 'Button',
      image: '/sandbox/button',
    },
    {
      name: 'Button Link',
      image: '/sandbox/button-link',
    },
  ];

  return (
    <Layout>
      <Seo templateTitle='Modal' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <div className='flex flex-wrap gap-3'>
              {merchendasing.map((item, index) => (
                <ExampleModal key={index} data={item}>
                  {({ openModal }) => (
                    <div className='max-w-[300px]'>
                      <div>
                        <NextImage
                          src='/images/merchandisePage/item-1.png'
                          alt='alt'
                          width='100%'
                          height='100%'
                        />
                      </div>
                      <div className=''>
                        <div>
                          <Typography variant='b2' as='p'>
                            {' '}
                            {item.name}{' '}
                          </Typography>
                        </div>
                        <Button onClick={openModal}>Open Modal</Button>
                      </div>
                    </div>
                  )}
                </ExampleModal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
