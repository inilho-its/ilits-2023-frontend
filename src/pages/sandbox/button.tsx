import * as React from 'react';
import { FiGlobe } from 'react-icons/fi';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function ButtonPage() {
  return (
    <Layout>
      <Seo templateTitle='Button' />

      <main>
        <section className='bg-bone-500'>
          <div className='layout min-h-screen py-20'>
            <Typography as='h2' variant='h2'>
              Button Normal
            </Typography>
            <div className='mt-2'>
              <Typography as='p' variant='paragraph'>
                Button bone
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button variant='bone' size='small' round='medium'>
                  Text Icon
                </Button>
                <Button variant='bone' size='medium' round='medium'>
                  Text Icon
                </Button>
                <Button variant='bone' size='large' round='medium'>
                  Text Icon
                </Button>
                <Button variant='bone' size='small' round='large'>
                  Text Icon
                </Button>
                <Button variant='bone' size='medium' round='large'>
                  Text Icon
                </Button>
                <Button variant='bone' size='large' round='large'>
                  Text Icon
                </Button>
              </div>
            </div>
            <div className='mt-2'>
              <Typography as='p' variant='paragraph'>
                Button pink
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button variant='pink' size='small' round='medium'>
                  Text Icon
                </Button>
                <Button variant='pink' size='medium' round='medium'>
                  Text Icon
                </Button>
                <Button variant='pink' size='large' round='medium'>
                  Text Icon
                </Button>
                <Button variant='pink' size='small' round='large'>
                  Text Icon
                </Button>
                <Button variant='pink' size='medium' round='large'>
                  Text Icon
                </Button>
                <Button variant='pink' size='large' round='large'>
                  Text Icon
                </Button>
              </div>
            </div>
            <div className='mt-2'>
              <Typography as='p' variant='paragraph'>
                Button orange
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button variant='orange' size='small' round='medium'>
                  Text Icon
                </Button>
                <Button variant='orange' size='medium' round='medium'>
                  Text Icon
                </Button>
                <Button variant='orange' size='large' round='medium'>
                  Text Icon
                </Button>
                <Button variant='orange' size='small' round='large'>
                  Text Icon
                </Button>
                <Button variant='orange' size='medium' round='large'>
                  Text Icon
                </Button>
                <Button variant='orange' size='large' round='large'>
                  Text Icon
                </Button>
              </div>
            </div>
            <div className='mt-2'>
              <Typography as='p' variant='paragraph'>
                Button red Normal
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button variant='red' size='small' round='medium'>
                  Text Icon
                </Button>
                <Button variant='red' size='medium' round='medium'>
                  Text Icon
                </Button>
                <Button variant='red' size='large' round='medium'>
                  Text Icon
                </Button>
                <Button variant='red' size='small' round='large'>
                  Text Icon
                </Button>
                <Button variant='red' size='medium' round='large'>
                  Text Icon
                </Button>
                <Button variant='red' size='large' round='large'>
                  Text Icon
                </Button>
              </div>
            </div>
            <div className='mt-2'>
              <Typography as='p' variant='paragraph'>
                Button yellow
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button variant='yellow' size='small' round='medium'>
                  Text Icon
                </Button>
                <Button variant='yellow' size='medium' round='medium'>
                  Text Icon
                </Button>
                <Button variant='yellow' size='large' round='medium'>
                  Text Icon
                </Button>
                <Button variant='yellow' size='small' round='large'>
                  Text Icon
                </Button>
                <Button variant='yellow' size='medium' round='large'>
                  Text Icon
                </Button>
                <Button variant='yellow' size='large' round='large'>
                  Text Icon
                </Button>
              </div>
            </div>
            <div className='mt-2'>
              <Typography as='p' variant='paragraph'>
                Button lightBlue
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button variant='lightBlue' size='small' round='medium'>
                  Text Icon
                </Button>
                <Button variant='lightBlue' size='medium' round='medium'>
                  Text Icon
                </Button>
                <Button variant='lightBlue' size='large' round='medium'>
                  Text Icon
                </Button>
                <Button variant='lightBlue' size='small' round='large'>
                  Text Icon
                </Button>
                <Button variant='lightBlue' size='medium' round='large'>
                  Text Icon
                </Button>
                <Button variant='lightBlue' size='large' round='large'>
                  Text Icon
                </Button>
              </div>
            </div>

            <div className='pt-12'>
              <Typography as='h2' variant='h2'>
                Button Loading Left Icon
              </Typography>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button bone
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='bone'
                    size='small'
                    round='medium'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='medium'
                    round='medium'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='large'
                    round='medium'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='small'
                    round='large'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='medium'
                    round='large'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='large'
                    round='large'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button pink
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='pink'
                    size='small'
                    round='medium'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='medium'
                    round='medium'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='large'
                    round='medium'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='small'
                    round='large'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='medium'
                    round='large'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='large'
                    round='large'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button orange
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='orange'
                    size='small'
                    round='medium'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='medium'
                    round='medium'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='large'
                    round='medium'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='small'
                    round='large'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='medium'
                    round='large'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='large'
                    round='large'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button red Normal
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='red'
                    size='small'
                    round='medium'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='medium'
                    round='medium'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='large'
                    round='medium'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='small'
                    round='large'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='medium'
                    round='large'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='large'
                    round='large'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button yellow
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='yellow'
                    size='small'
                    round='medium'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='medium'
                    round='medium'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='large'
                    round='medium'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='small'
                    round='large'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='medium'
                    round='large'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='large'
                    round='large'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button lightBlue
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='lightBlue'
                    size='small'
                    round='medium'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='medium'
                    round='medium'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='large'
                    round='medium'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='small'
                    round='large'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='medium'
                    round='large'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='large'
                    round='large'
                    leftIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
            </div>

            <div className='pt-12'>
              <Typography as='h2' variant='h2'>
                Button Normal Right Icon
              </Typography>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button bone Left Icon
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='bone'
                    size='small'
                    round='medium'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='medium'
                    round='medium'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='large'
                    round='medium'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='small'
                    round='large'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='medium'
                    round='large'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='large'
                    round='large'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button pink
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='pink'
                    size='small'
                    round='medium'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='medium'
                    round='medium'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='large'
                    round='medium'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='small'
                    round='large'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='medium'
                    round='large'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='large'
                    round='large'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button orange
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='orange'
                    size='small'
                    round='medium'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='medium'
                    round='medium'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='large'
                    round='medium'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='small'
                    round='large'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='medium'
                    round='large'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='large'
                    round='large'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button red Normal
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='red'
                    size='small'
                    round='medium'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='medium'
                    round='medium'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='large'
                    round='medium'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='small'
                    round='large'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='medium'
                    round='large'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='large'
                    round='large'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button yellow
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='yellow'
                    size='small'
                    round='medium'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='medium'
                    round='medium'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='large'
                    round='medium'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='small'
                    round='large'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='medium'
                    round='large'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='large'
                    round='large'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button lightBlue
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='lightBlue'
                    size='small'
                    round='medium'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='medium'
                    round='medium'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='large'
                    round='medium'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='small'
                    round='large'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='medium'
                    round='large'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='large'
                    round='large'
                    rightIcon={FiGlobe}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
            </div>

            <div className='pt-12'>
              <Typography as='h2' variant='h2'>
                Button Normal Icon Only
              </Typography>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button bone
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    isIcon={true}
                    variant='bone'
                    size='small'
                    round='medium'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='bone'
                    size='medium'
                    round='medium'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='bone'
                    size='large'
                    round='medium'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='bone'
                    size='small'
                    round='large'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='bone'
                    size='medium'
                    round='large'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='bone'
                    size='large'
                    round='large'
                  >
                    <FiGlobe size={24} />
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button pink
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    isIcon={true}
                    variant='pink'
                    size='small'
                    round='medium'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='pink'
                    size='medium'
                    round='medium'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='pink'
                    size='large'
                    round='medium'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='pink'
                    size='small'
                    round='large'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='pink'
                    size='medium'
                    round='large'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='pink'
                    size='large'
                    round='large'
                  >
                    <FiGlobe size={24} />
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button orange
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    isIcon={true}
                    variant='orange'
                    size='small'
                    round='medium'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='orange'
                    size='medium'
                    round='medium'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='orange'
                    size='large'
                    round='medium'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='orange'
                    size='small'
                    round='large'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='orange'
                    size='medium'
                    round='large'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='orange'
                    size='large'
                    round='large'
                  >
                    <FiGlobe size={24} />
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button red Normal
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    isIcon={true}
                    variant='red'
                    size='small'
                    round='medium'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='red'
                    size='medium'
                    round='medium'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='red'
                    size='large'
                    round='medium'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='red'
                    size='small'
                    round='large'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='red'
                    size='medium'
                    round='large'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='red'
                    size='large'
                    round='large'
                  >
                    <FiGlobe size={24} />
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button yellow
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    isIcon={true}
                    variant='yellow'
                    size='small'
                    round='medium'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='yellow'
                    size='medium'
                    round='medium'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='yellow'
                    size='large'
                    round='medium'
                  >
                    <FiGlobe size={24} />{' '}
                  </Button>
                  <Button
                    isIcon={true}
                    variant='yellow'
                    size='small'
                    round='large'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='yellow'
                    size='medium'
                    round='large'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='yellow'
                    size='large'
                    round='large'
                  >
                    <FiGlobe size={24} />
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button lightBlue
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    isIcon={true}
                    variant='lightBlue'
                    size='small'
                    round='medium'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='lightBlue'
                    size='medium'
                    round='medium'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='lightBlue'
                    size='large'
                    round='medium'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='lightBlue'
                    size='small'
                    round='large'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='lightBlue'
                    size='medium'
                    round='large'
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isIcon={true}
                    variant='lightBlue'
                    size='large'
                    round='large'
                  >
                    <FiGlobe size={24} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className='layout min-h-screen py-20'>
            <Typography as='h2' variant='h2'>
              Button Disabled
            </Typography>
            <div className='mt-2'>
              <Typography as='p' variant='paragraph'>
                Button bone
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button
                  variant='bone'
                  size='small'
                  round='medium'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='bone'
                  size='medium'
                  round='medium'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='bone'
                  size='large'
                  round='medium'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='bone'
                  size='small'
                  round='large'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='bone'
                  size='medium'
                  round='large'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='bone'
                  size='large'
                  round='large'
                  disabled={true}
                >
                  Text Icon
                </Button>
              </div>
            </div>
            <div className='mt-2'>
              <Typography as='p' variant='paragraph'>
                Button pink
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button
                  variant='pink'
                  size='small'
                  round='medium'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='pink'
                  size='medium'
                  round='medium'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='pink'
                  size='large'
                  round='medium'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='pink'
                  size='small'
                  round='large'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='pink'
                  size='medium'
                  round='large'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='pink'
                  size='large'
                  round='large'
                  disabled={true}
                >
                  Text Icon
                </Button>
              </div>
            </div>
            <div className='mt-2'>
              <Typography as='p' variant='paragraph'>
                Button orange
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button
                  variant='orange'
                  size='small'
                  round='medium'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='orange'
                  size='medium'
                  round='medium'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='orange'
                  size='large'
                  round='medium'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='orange'
                  size='small'
                  round='large'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='orange'
                  size='medium'
                  round='large'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='orange'
                  size='large'
                  round='large'
                  disabled={true}
                >
                  Text Icon
                </Button>
              </div>
            </div>
            <div className='mt-2'>
              <Typography as='p' variant='paragraph'>
                Button red Normal
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button
                  variant='red'
                  size='small'
                  round='medium'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='red'
                  size='medium'
                  round='medium'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='red'
                  size='large'
                  round='medium'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='red'
                  size='small'
                  round='large'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='red'
                  size='medium'
                  round='large'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='red'
                  size='large'
                  round='large'
                  disabled={true}
                >
                  Text Icon
                </Button>
              </div>
            </div>
            <div className='mt-2'>
              <Typography as='p' variant='paragraph'>
                Button yellow
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button
                  variant='yellow'
                  size='small'
                  round='medium'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='yellow'
                  size='medium'
                  round='medium'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='yellow'
                  size='large'
                  round='medium'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='yellow'
                  size='small'
                  round='large'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='yellow'
                  size='medium'
                  round='large'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='yellow'
                  size='large'
                  round='large'
                  disabled={true}
                >
                  Text Icon
                </Button>
              </div>
            </div>
            <div className='mt-2'>
              <Typography as='p' variant='paragraph'>
                Button lightBlue
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button
                  variant='lightBlue'
                  size='small'
                  round='medium'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='lightBlue'
                  size='medium'
                  round='medium'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='lightBlue'
                  size='large'
                  round='medium'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='lightBlue'
                  size='small'
                  round='large'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='lightBlue'
                  size='medium'
                  round='large'
                  disabled={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='lightBlue'
                  size='large'
                  round='large'
                  disabled={true}
                >
                  Text Icon
                </Button>
              </div>
            </div>

            <div className='pt-12'>
              <Typography as='h2' variant='h2'>
                Button Disabled Left Icon
              </Typography>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button bone
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='bone'
                    size='small'
                    round='medium'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='medium'
                    round='medium'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='large'
                    round='medium'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='small'
                    round='large'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='medium'
                    round='large'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='large'
                    round='large'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button pink
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='pink'
                    size='small'
                    round='medium'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='medium'
                    round='medium'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='large'
                    round='medium'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='small'
                    round='large'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='medium'
                    round='large'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='large'
                    round='large'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button orange
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='orange'
                    size='small'
                    round='medium'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='medium'
                    round='medium'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='large'
                    round='medium'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='small'
                    round='large'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='medium'
                    round='large'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='large'
                    round='large'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button red Normal
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='red'
                    size='small'
                    round='medium'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='medium'
                    round='medium'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='large'
                    round='medium'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='small'
                    round='large'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='medium'
                    round='large'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='large'
                    round='large'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button yellow
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='yellow'
                    size='small'
                    round='medium'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='medium'
                    round='medium'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='large'
                    round='medium'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='small'
                    round='large'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='medium'
                    round='large'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='large'
                    round='large'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button lightBlue
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='lightBlue'
                    size='small'
                    round='medium'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='medium'
                    round='medium'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='large'
                    round='medium'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='small'
                    round='large'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='medium'
                    round='large'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='large'
                    round='large'
                    leftIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
            </div>

            <div className='pt-12'>
              <Typography as='h2' variant='h2'>
                Button Disabled Right Icon
              </Typography>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button bone
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='bone'
                    size='small'
                    round='medium'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='medium'
                    round='medium'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='large'
                    round='medium'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='small'
                    round='large'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='medium'
                    round='large'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='large'
                    round='large'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button pink
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='pink'
                    size='small'
                    round='medium'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='medium'
                    round='medium'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='large'
                    round='medium'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='small'
                    round='large'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='medium'
                    round='large'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='large'
                    round='large'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button orange
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='orange'
                    size='small'
                    round='medium'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='medium'
                    round='medium'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='large'
                    round='medium'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='small'
                    round='large'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='medium'
                    round='large'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='large'
                    round='large'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button red Normal
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='red'
                    size='small'
                    round='medium'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='medium'
                    round='medium'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='large'
                    round='medium'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='small'
                    round='large'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='medium'
                    round='large'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='large'
                    round='large'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button yellow
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='yellow'
                    size='small'
                    round='medium'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='medium'
                    round='medium'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='large'
                    round='medium'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='small'
                    round='large'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='medium'
                    round='large'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='large'
                    round='large'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button lightBlue
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='lightBlue'
                    size='small'
                    round='medium'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='medium'
                    round='medium'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='large'
                    round='medium'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='small'
                    round='large'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='medium'
                    round='large'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='large'
                    round='large'
                    rightIcon={FiGlobe}
                    disabled={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
            </div>

            <div className='pt-12'>
              <Typography as='h2' variant='h2'>
                Button Disabled Icon Only
              </Typography>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button bone
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    disabled={true}
                    variant='bone'
                    size='small'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='bone'
                    size='medium'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='bone'
                    size='large'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='bone'
                    size='small'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='bone'
                    size='medium'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='bone'
                    size='large'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button pink
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    disabled={true}
                    variant='pink'
                    size='small'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='pink'
                    size='medium'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='pink'
                    size='large'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='pink'
                    size='small'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='pink'
                    size='medium'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='pink'
                    size='large'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button orange
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    disabled={true}
                    variant='orange'
                    size='small'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='orange'
                    size='medium'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='orange'
                    size='large'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='orange'
                    size='small'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='orange'
                    size='medium'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='orange'
                    size='large'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button red Normal
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    disabled={true}
                    variant='red'
                    size='small'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='red'
                    size='medium'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='red'
                    size='large'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='red'
                    size='small'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='red'
                    size='medium'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='red'
                    size='large'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button yellow
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    disabled={true}
                    variant='yellow'
                    size='small'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='yellow'
                    size='medium'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='yellow'
                    size='large'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />{' '}
                  </Button>
                  <Button
                    disabled={true}
                    variant='yellow'
                    size='small'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='yellow'
                    size='medium'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='yellow'
                    size='large'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button lightBlue
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    disabled={true}
                    variant='lightBlue'
                    size='small'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='lightBlue'
                    size='medium'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='lightBlue'
                    size='large'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='lightBlue'
                    size='small'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='lightBlue'
                    size='medium'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    disabled={true}
                    variant='lightBlue'
                    size='large'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className='layout min-h-screen py-20'>
            <Typography as='h2' variant='h2'>
              Button Loading
            </Typography>
            <div className='mt-2'>
              <Typography as='p' variant='paragraph'>
                Button bone
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button
                  variant='bone'
                  size='small'
                  round='medium'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='bone'
                  size='medium'
                  round='medium'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='bone'
                  size='large'
                  round='medium'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='bone'
                  size='small'
                  round='large'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='bone'
                  size='medium'
                  round='large'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='bone'
                  size='large'
                  round='large'
                  isLoading={true}
                >
                  Text Icon
                </Button>
              </div>
            </div>
            <div className='mt-2'>
              <Typography as='p' variant='paragraph'>
                Button pink
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button
                  variant='pink'
                  size='small'
                  round='medium'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='pink'
                  size='medium'
                  round='medium'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='pink'
                  size='large'
                  round='medium'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='pink'
                  size='small'
                  round='large'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='pink'
                  size='medium'
                  round='large'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='pink'
                  size='large'
                  round='large'
                  isLoading={true}
                >
                  Text Icon
                </Button>
              </div>
            </div>
            <div className='mt-2'>
              <Typography as='p' variant='paragraph'>
                Button orange
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button
                  variant='orange'
                  size='small'
                  round='medium'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='orange'
                  size='medium'
                  round='medium'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='orange'
                  size='large'
                  round='medium'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='orange'
                  size='small'
                  round='large'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='orange'
                  size='medium'
                  round='large'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='orange'
                  size='large'
                  round='large'
                  isLoading={true}
                >
                  Text Icon
                </Button>
              </div>
            </div>
            <div className='mt-2'>
              <Typography as='p' variant='paragraph'>
                Button red Normal
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button
                  variant='red'
                  size='small'
                  round='medium'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='red'
                  size='medium'
                  round='medium'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='red'
                  size='large'
                  round='medium'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='red'
                  size='small'
                  round='large'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='red'
                  size='medium'
                  round='large'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='red'
                  size='large'
                  round='large'
                  isLoading={true}
                >
                  Text Icon
                </Button>
              </div>
            </div>
            <div className='mt-2'>
              <Typography as='p' variant='paragraph'>
                Button yellow
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button
                  variant='yellow'
                  size='small'
                  round='medium'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='yellow'
                  size='medium'
                  round='medium'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='yellow'
                  size='large'
                  round='medium'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='yellow'
                  size='small'
                  round='large'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='yellow'
                  size='medium'
                  round='large'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='yellow'
                  size='large'
                  round='large'
                  isLoading={true}
                >
                  Text Icon
                </Button>
              </div>
            </div>
            <div className='mt-2'>
              <Typography as='p' variant='paragraph'>
                Button lightBlue
              </Typography>
              <div className='mt-3 space-x-3'>
                <Button
                  variant='lightBlue'
                  size='small'
                  round='medium'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='lightBlue'
                  size='medium'
                  round='medium'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='lightBlue'
                  size='large'
                  round='medium'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='lightBlue'
                  size='small'
                  round='large'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='lightBlue'
                  size='medium'
                  round='large'
                  isLoading={true}
                >
                  Text Icon
                </Button>
                <Button
                  variant='lightBlue'
                  size='large'
                  round='large'
                  isLoading={true}
                >
                  Text Icon
                </Button>
              </div>
            </div>

            <div className='pt-12'>
              <Typography as='h2' variant='h2'>
                Button Normal Left Icon
              </Typography>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button bone
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='bone'
                    size='small'
                    round='medium'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='medium'
                    round='medium'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='large'
                    round='medium'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='small'
                    round='large'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='medium'
                    round='large'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='large'
                    round='large'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button pink
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='pink'
                    size='small'
                    round='medium'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='medium'
                    round='medium'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='large'
                    round='medium'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='small'
                    round='large'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='medium'
                    round='large'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='large'
                    round='large'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button orange
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='orange'
                    size='small'
                    round='medium'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='medium'
                    round='medium'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='large'
                    round='medium'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='small'
                    round='large'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='medium'
                    round='large'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='large'
                    round='large'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button red Normal
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='red'
                    size='small'
                    round='medium'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='medium'
                    round='medium'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='large'
                    round='medium'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='small'
                    round='large'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='medium'
                    round='large'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='large'
                    round='large'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button yellow
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='yellow'
                    size='small'
                    round='medium'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='medium'
                    round='medium'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='large'
                    round='medium'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='small'
                    round='large'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='medium'
                    round='large'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='large'
                    round='large'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button lightBlue
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='lightBlue'
                    size='small'
                    round='medium'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='medium'
                    round='medium'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='large'
                    round='medium'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='small'
                    round='large'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='medium'
                    round='large'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='large'
                    round='large'
                    leftIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
            </div>

            <div className='pt-12'>
              <Typography as='h2' variant='h2'>
                Button Loading Right Icon
              </Typography>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button bone Left Icon
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='bone'
                    size='small'
                    round='medium'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='medium'
                    round='medium'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='large'
                    round='medium'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='small'
                    round='large'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='medium'
                    round='large'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='bone'
                    size='large'
                    round='large'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button pink
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='pink'
                    size='small'
                    round='medium'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='medium'
                    round='medium'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='large'
                    round='medium'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='small'
                    round='large'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='medium'
                    round='large'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='pink'
                    size='large'
                    round='large'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button orange
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='orange'
                    size='small'
                    round='medium'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='medium'
                    round='medium'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='large'
                    round='medium'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='small'
                    round='large'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='medium'
                    round='large'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='orange'
                    size='large'
                    round='large'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button red Normal
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='red'
                    size='small'
                    round='medium'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='medium'
                    round='medium'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='large'
                    round='medium'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='small'
                    round='large'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='medium'
                    round='large'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='red'
                    size='large'
                    round='large'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button yellow
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='yellow'
                    size='small'
                    round='medium'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='medium'
                    round='medium'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='large'
                    round='medium'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='small'
                    round='large'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='medium'
                    round='large'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='yellow'
                    size='large'
                    round='large'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button lightBlue
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    variant='lightBlue'
                    size='small'
                    round='medium'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='medium'
                    round='medium'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='large'
                    round='medium'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='small'
                    round='large'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='medium'
                    round='large'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                  <Button
                    variant='lightBlue'
                    size='large'
                    round='large'
                    rightIcon={FiGlobe}
                    isLoading={true}
                  >
                    Text Icon
                  </Button>
                </div>
              </div>
            </div>

            <div className='pt-12'>
              <Typography as='h2' variant='h2'>
                Button Loading Icon Only
              </Typography>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button bone
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    isLoading={true}
                    variant='bone'
                    size='small'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='bone'
                    size='medium'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='bone'
                    size='large'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='bone'
                    size='small'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='bone'
                    size='medium'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='bone'
                    size='large'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button pink
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    isLoading={true}
                    variant='pink'
                    size='small'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='pink'
                    size='medium'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='pink'
                    size='large'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='pink'
                    size='small'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='pink'
                    size='medium'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='pink'
                    size='large'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button orange
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    isLoading={true}
                    variant='orange'
                    size='small'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='orange'
                    size='medium'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='orange'
                    size='large'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='orange'
                    size='small'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='orange'
                    size='medium'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='orange'
                    size='large'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button red Normal
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    isLoading={true}
                    variant='red'
                    size='small'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='red'
                    size='medium'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='red'
                    size='large'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='red'
                    size='small'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='red'
                    size='medium'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='red'
                    size='large'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button yellow
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    isLoading={true}
                    variant='yellow'
                    size='small'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='yellow'
                    size='medium'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='yellow'
                    size='large'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />{' '}
                  </Button>
                  <Button
                    isLoading={true}
                    variant='yellow'
                    size='small'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='yellow'
                    size='medium'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='yellow'
                    size='large'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                </div>
              </div>
              <div className='mt-2'>
                <Typography as='p' variant='paragraph'>
                  Button lightBlue
                </Typography>
                <div className='mt-3 space-x-3'>
                  <Button
                    isLoading={true}
                    variant='lightBlue'
                    size='small'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='lightBlue'
                    size='medium'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='lightBlue'
                    size='large'
                    round='medium'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='lightBlue'
                    size='small'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='lightBlue'
                    size='medium'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                  <Button
                    isLoading={true}
                    variant='lightBlue'
                    size='large'
                    round='large'
                    isIcon={true}
                  >
                    <FiGlobe size={24} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
