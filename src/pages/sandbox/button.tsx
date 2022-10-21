import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function ButtonPage() {
  return (
    <Layout>
      <Seo templateTitle='Button' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <div className='mt-3'>
              <Typography as='h2' variant='h2'>
                Button Primary
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button variant='primary'>Primary</Button>
                <Button variant='primary' disabled={true}>
                  Primary
                </Button>
                <Button variant='primary' isLoading={true}>
                  Primary
                </Button>
              </div>
            </div>
            <div className='mt-3'>
              <Typography as='h2' variant='h2'>
                Button Outline
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button variant='outline'>Outline</Button>
                <Button variant='outline' disabled={true}>
                  Outline
                </Button>
                <Button variant='outline' isLoading={true}>
                  Outline
                </Button>
              </div>
            </div>
            <div className='mt-3'>
              <Typography as='h2' variant='h2'>
                Button Ghost
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button variant='ghost'>Ghost</Button>
                <Button variant='ghost' disabled={true}>
                  Ghost
                </Button>
                <Button variant='ghost' isLoading={true}>
                  Ghost
                </Button>
              </div>
            </div>
            <div className='mt-3'>
              <Typography as='h2' variant='h2'>
                Button Light
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button variant='light'>Light</Button>
                <Button variant='light' disabled={true}>
                  Light
                </Button>
                <Button variant='light' isLoading={true}>
                  Light
                </Button>
              </div>
            </div>
            <div className='mt-3'>
              <Typography as='h2' variant='h2'>
                Button Dark
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button variant='dark'>Dark</Button>
                <Button variant='dark' disabled={true}>
                  Dark
                </Button>
                <Button variant='dark' isLoading={true}>
                  Dark
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
