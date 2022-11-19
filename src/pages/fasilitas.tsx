import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import NextImage from '@/components/NextImage';
import Seo from '@/components/Seo';
import Typography from '@/components/typography/Typography';

export default function FasilitasPage() {
  const HeroSection = () => {
    return (
      <div>
        <div className='flex w-full '>
          <div className='m-auto flex'>
            <div className='px-7 pt-7 text-center text-3xl font-bold sm:px-3 sm:text-4xl md:pt-6 md:text-5xl lg:pt-6 lg:text-6xl'>
              <Typography variant='h1' className='bordered text-[#FF9447]'>
                Fasilitas
              </Typography>
              <Typography variant='h5' className='text-bone-1000'>
                Institut Teknologi Sepuluh Nopember
              </Typography>
            </div>
          </div>
        </div>
        <div className='mt-[48px] flex justify-center'>
          <ButtonLink
            variant='yellow'
            size='large'
            className='md-[w-auto] justify-center'
            href='/'
          >
            Kenali Lebih Lanjut
          </ButtonLink>
        </div>
        <div className='mt-[74px] flex justify-center'>
          <div className='sm:w-[400px] md:w-[500px] lg:w-[897px]'>
            <NextImage
              alt='comingsoon'
              src='/images/pageFasilitas/fasilitas-img.png'
              width='100%'
              height='34.5%'
              layout='responsive'
              objectFit='contain'
              priority
            />
          </div>
        </div>
      </div>
    );
  };

  const Divider = () => {
    return (
      <div className='border-t-solid border-b-solid flex w-full justify-between border-t-[4px] border-b-[4px] border-t-bone-1000 border-b-bone-1000 bg-[#FF7A66] lg:h-[144px]'>
        <div className='lg:w-[300px]'>
          <NextImage
            alt='comingsoon'
            src='/images/pageFasilitas/fasilitas-deco-eyes.png'
            width='100%'
            height='34.5%'
            layout='responsive'
            objectFit='contain'
            priority
          />
        </div>
        <Typography
          variant='h4'
          className='bordered p-[40px] font-bold text-neutral-100'
        >
          Ada info Unik Buat Kamu!
        </Typography>
        <div className='pt-[34px] lg:w-[300px]'>
          <NextImage
            alt='comingsoon'
            src='/images/pageFasilitas/fasilitas-deco-megaphone.png'
            width='100%'
            height='34.5%'
            layout='responsive'
            objectFit='contain'
            priority
          />
        </div>
      </div>
    );
  };

  const CardInfo = () => {
    return (
      <div className='m-[80px] flex justify-center'>
        <div className='rounded-[12px] border-[2px] border-solid border-bone-1000 lg:h-[454px] lg:w-[1046px]'>
          <div className='border-b-solid flex w-full justify-end rounded-t-[9px] border-b-[2px] border-b-bone-1000 bg-lightBlue-500 lg:h-[36px]'></div>
          <div className='flex'>
            <div className='border-r-solid h-[414px]  w-full rounded-bl-[10px] bg-neutral-100'>
              <div className='p-[37px] pl-[66px] pr-[93px]'>
                <Typography variant='h5' className='mb-[16px] font-semibold'>
                  Info Unik Buat Kamu
                </Typography>
                <Typography variant='body' className='mb-[36px]'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </Typography>
                <ButtonLink
                  variant='lightBlue'
                  size='large'
                  className='md-[w-auto] justify-center'
                  href='/'
                >
                  Kenali Lebih Lanjut
                </ButtonLink>
              </div>
            </div>
            <div className='w-full rounded-br-[10px] bg-neutral-100'>
              <NextImage
                alt='comingsoon'
                src='/images/pageFasilitas/fasilitas-dummy.png'
                width='50%'
                height='41%'
                layout='responsive'
                objectFit='contain'
              />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const FacilityBanner = () => {
    return (
      <div className='flex justify-between rounded-[24px] border-[4px] border-solid border-bone-1000 bg-[#FF9447] lg:h-[144px] lg:w-[1255px]'>
        <div className='mt-[35px] ml-[-101px] lg:w-[300px]'>
          <NextImage
            alt='comingsoon'
            src='/images/pageFasilitas/fasilitas-deco-loc.png'
            width='100%'
            height='34.5%'
            layout='responsive'
            objectFit='contain'
          />
        </div>
        <Typography
          variant='h4'
          className='bordered p-[40px] font-bold text-neutral-100'
        >
          Apa Saja Fasilitas di ITS?
        </Typography>
        <div className='mr-[-97px] lg:w-[300px]'>
          <NextImage
            alt='comingsoon'
            src='/images/pageFasilitas/fasilitas-deco-star.png'
            width='100%'
            height='34.5%'
            layout='responsive'
            objectFit='contain'
          />
        </div>
      </div>
    );
  };

  type FacilityCardProps = {
    facilityName: string;
    imgSrc: string;
    desc: string;
    headerStyle: string;
  };

  const facilityData = [
    {
      facilityName: 'Nama Fasilitas 1',
      imgSrc: '/images/pageFasilitas/fasilitas-dummy2.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Tristique euismod curabitur tortor dolor. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Tristique euismod curabitur tortor dolor. Tristique euismod curabitur tortor dolor. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Tristique euismod curabitur tortor dolor.',
      headerStyle:
        'bg-yellow-500 relative z-10 flex justify-center rounded-[120px] border-[2px] border-solid border-neutral-1000 p-[10px] lg:h-[68px] lg:w-[618px]',
    },
    {
      facilityName: 'Nama Fasilitas 2',
      imgSrc: '/images/pageFasilitas/fasilitas-dummy2.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Tristique euismod curabitur tortor dolor. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Tristique euismod curabitur tortor dolor. Tristique euismod curabitur tortor dolor. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Tristique euismod curabitur tortor dolor.',
      headerStyle:
        'bg-yellow-500 relative z-10 flex justify-center rounded-[120px] border-[2px] border-solid border-neutral-1000 p-[10px] lg:h-[68px] lg:w-[618px]',
    },
    {
      facilityName: 'Nama Fasilitas 3',
      imgSrc: '/images/pageFasilitas/fasilitas-dummy2.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Tristique euismod curabitur tortor dolor. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Tristique euismod curabitur tortor dolor. Tristique euismod curabitur tortor dolor. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Tristique euismod curabitur tortor dolor.',
      headerStyle:
        'bg-[#FF7A66] relative z-10 flex justify-center rounded-[120px] border-[2px] border-solid border-neutral-1000 p-[10px] lg:h-[68px] lg:w-[618px]',
    },
    {
      facilityName: 'Nama Fasilitas 4',
      imgSrc: '/images/pageFasilitas/fasilitas-dummy2.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Tristique euismod curabitur tortor dolor. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Tristique euismod curabitur tortor dolor. Tristique euismod curabitur tortor dolor. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Tristique euismod curabitur tortor dolor.',
      headerStyle:
        'bg-[#FF7A66] relative z-10 flex justify-center rounded-[120px] border-[2px] border-solid border-neutral-1000 p-[10px] lg:h-[68px] lg:w-[618px]',
    },
    {
      facilityName: 'Nama Fasilitas 5',
      imgSrc: '/images/pageFasilitas/fasilitas-dummy2.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Tristique euismod curabitur tortor dolor. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Tristique euismod curabitur tortor dolor. Tristique euismod curabitur tortor dolor. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Tristique euismod curabitur tortor dolor.',
      headerStyle:
        'bg-lightBlue-500 relative z-10 flex justify-center rounded-[120px] border-[2px] border-solid border-neutral-1000 p-[10px] lg:h-[68px] lg:w-[618px]',
    },
    {
      facilityName: 'Nama Fasilitas 6',
      imgSrc: '/images/pageFasilitas/fasilitas-dummy2.png',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Tristique euismod curabitur tortor dolor. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Tristique euismod curabitur tortor dolor. Tristique euismod curabitur tortor dolor. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Ultricies massa nisl aliquam purus tortor leo, consectetur pharetra semper. Tristique euismod curabitur tortor dolor.',
      headerStyle:
        'bg-lightBlue-500 relative z-10 flex justify-center rounded-[120px] border-[2px] border-solid border-neutral-1000 p-[10px] lg:h-[68px] lg:w-[618px]',
    },
  ];

  const FacilityCards = ({
    facilityName,
    imgSrc,
    desc,
    headerStyle,
  }: FacilityCardProps) => {
    return (
      <div className='mb-[32px] last:mb-[82px]'>
        <div className={headerStyle}>
          <Typography variant='h5' className='font-semibold text-neutral-100'>
            {facilityName}
          </Typography>
        </div>
        <div className='z-0 mt-[-13px] flex justify-center rounded-[20px] border-[2px] border-solid border-neutral-1000 bg-neutral-100 p-[53px] pt-[48px] pb-[32px] lg:h-[661px] lg:w-[618px]'>
          <div>
            <div className='mb-[32px] lg:w-[512px]'>
              <NextImage
                alt='comingsoon'
                src={imgSrc}
                width='100%'
                height='55%'
                layout='responsive'
                objectFit='contain'
              />
            </div>
            <Typography variant='body' className='text-center font-medium'>
              {desc}
            </Typography>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      <Seo templateTitle='Fasilitas' />
      <main>
        <section className='Fasilitas'>
          <div className='m-auto min-h-screen place-items-center self-center bg-bone-500'>
            <HeroSection />
            <Divider />
            <CardInfo />
            <div className='mb-[86px] flex justify-center'>
              <FacilityBanner />
            </div>
            <div className='flex flex-wrap justify-center gap-[24px]'>
              {facilityData?.map((v, i) => (
                <FacilityCards key={`Card-Item-key-${i}`} {...v} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
