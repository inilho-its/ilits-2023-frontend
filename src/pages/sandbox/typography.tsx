import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function TypographyPage() {
  return (
    <Layout>
      <Seo templateTitle='Typography' />

      <main>
        <section className=''>
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
            <Typography>Paragraph</Typography>
            <Typography as='subtitle1' variant='subtitle1'>
              Subtitle 1
            </Typography>
            <br></br>
            <Typography as='subtitle2' variant='subtitle2'>
              Subtitle 2
            </Typography>
            <br></br>
            <Typography as='body1' variant='body1'>
              Body 1
            </Typography>
            <br></br>
            <Typography as='body2' variant='body2'>
              Body 2
            </Typography>
            <Typography as='caption' variant='caption'>
              Caption
            </Typography>
            <Typography as='overline' variant='overline'>
              Overline
            </Typography>
          </div>
        </section>
      </main>
    </Layout>
  );
}
