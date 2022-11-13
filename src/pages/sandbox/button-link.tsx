import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function ButtonLinkPage() {
  return (
    <Layout>
      <Seo templateTitle='Button-link' />

      <main>
        <section className='bg-bone-500'>
          <div className='layout min-h-screen py-20'>
            <Typography as='h2' variant='h2'>
              Button Link
            </Typography>
            <Typography ariant='body'>A linked button</Typography>
            <div className='mt-12 space-x-3'>
              <ButtonLink href='/' variant='bone'>
                Go There
              </ButtonLink>
              <ButtonLink href='/' variant='pink'>
                Home
              </ButtonLink>
              <ButtonLink href='/' variant='lightBlue'>
                Next
              </ButtonLink>
              <ButtonLink href='/' variant='red'>
                Submit
              </ButtonLink>
              <ButtonLink href='/sandbox' variant='orange'>
                Go Back
              </ButtonLink>
              <ButtonLink href='/' variant='yellow'>
                Next
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
