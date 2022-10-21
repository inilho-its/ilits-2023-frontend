import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

const components = [
  {
    name: 'Typography',
    path: '/sandbox/typography',
  },
  {
    name: 'Button',
    path: '/sandbox/button',
  },
  {
    name: 'Form',
    path: '/sandbox/form',
  },
];

export default function SandboxPage() {
  return (
    <Layout>
      <Seo templateTitle='Index' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>
            <Typography variant='h2' as='h2' className='text-center'>
              Design System
            </Typography>

            <div className='mt-10'>
              <Typography variant='h3' as='h3' className='text-center'>
                Pages
              </Typography>
            </div>
            <div className='mt-10'>
              <Typography variant='h3' as='h3' className='my-3 text-center'>
                Components
              </Typography>
              <div className='flex flex-wrap items-center justify-center space-x-3'>
                {components.map((component) => (
                  <ButtonLink href={component.path} key={component.name}>
                    {component.name}
                  </ButtonLink>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
