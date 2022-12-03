import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import CardInfo from '@/pages/fasilitas/CardInfo';
import Divider from '@/pages/fasilitas/Divider';
import FacilityBanner from '@/pages/fasilitas/FacilityBanner';
import FacilityCards from '@/pages/fasilitas/FacilityCards';
import HeroSection from '@/pages/fasilitas/HeroSection';

export default function FasilitasPage() {
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

  return (
    <Layout>
      <Seo templateTitle='Fasilitas' />
      <main>
        <section className='Fasilitas'>
          <div className='m-auto min-h-screen place-items-center self-center bg-bone-500'>
            <section className='relative'>
              <HeroSection />
            </section>
            <section className='relative'>
              <Divider />
            </section>
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
