import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function TypographyPage() {
  return (
    <Layout>
      <Seo templateTitle='Typography' />

      <main>
        <section className='bg-bone-500 text-primary-main'>
          <div className='layout min-h-screen space-y-3 py-20'>
            <Typography as='h1' variant='h1'>
              Heading 1
            </Typography>
            <Typography as='h2' variant='h2'>
              Heading 2
            </Typography>
            <Typography as='h3' variant='h3'>
              Heading 3
            </Typography>
            <Typography as='h4' variant='h4'>
              Heading 4
            </Typography>
            <Typography as='h5' variant='h5'>
              Heading 5
            </Typography>
            <Typography as='h6' variant='h6'>
              Heading 6
            </Typography>
            <br />
            <Typography variant='title'>Title</Typography>
            <Typography variant='paragraph'>Paragraph</Typography>
            <Typography variant='body'>Body</Typography>
            <Typography variant='button'>Button</Typography>
            <Typography variant='caption'>Caption</Typography>
          </div>
        </section>
      </main>
    </Layout>
  );
}
