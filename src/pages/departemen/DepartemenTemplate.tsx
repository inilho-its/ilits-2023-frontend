import * as React from 'react';

import Seo from '@/components/Seo';

import DepartemenAkreditasi, {
  DepartemenAkreditasiProps,
} from '@/pages/departemen/fragments/DepartemenAkreditasi';
import DepartemenBidangKeahlian, {
  DepartemenBidangKeahlianProps,
} from '@/pages/departemen/fragments/DepartemenBidangKeahlian';
import DepartemenDayaTampung, {
  DepartemenDayaTampungProps,
} from '@/pages/departemen/fragments/DepartemenDayaTampung';
import DepartemenHeroSection, {
  DepartemenHeroSectionProps,
} from '@/pages/departemen/fragments/DepartemenHeroSection';
import DepartemenKnowMore, {
  DepartemenKnowMoreProps,
} from '@/pages/departemen/fragments/DepartemenKnowMore';
import DepartemenOrnaments from '@/pages/departemen/fragments/DepartemenOrnaments';

export type DepartemenTemplateProps = {
  idScrollto: string;
};

export default function DepartemenTemplate({
  departmentName,
  facultyName,
  buttonScrollto,
  idScrollto,
  buildingName,
  kenaliLebihDesc,
  buildingImg,
  akreditasiImg1,
  akreditasiImg2,
  akreditasiTitle1,
  akreditasiTitle2,
  akreditasiDesc1,
  akreditasiDesc2,
  bidangKeahlian1,
  bidangKeahlian2,
  bidangKeahlian3,
  bidangKeahlian4,
  bidangKeahlian5,
  srcDayaTampungDesktop,
  srcDayaTampungMobile,
}: DepartemenHeroSectionProps &
  DepartemenTemplateProps &
  DepartemenKnowMoreProps &
  DepartemenAkreditasiProps &
  DepartemenBidangKeahlianProps &
  DepartemenDayaTampungProps) {
  return (
    <div>
      <Seo templateTitle={departmentName} />
      <main>
        <div className='m-auto min-h-screen place-items-center self-center bg-bone-500'>
          <DepartemenOrnaments />
          <section className='relative'>
            <DepartemenHeroSection
              departmentName={departmentName}
              facultyName={facultyName}
              buttonScrollto={buttonScrollto}
            />
          </section>
          <section id={idScrollto} className='relative z-20'>
            <DepartemenKnowMore
              buildingName={buildingName}
              kenaliLebihDesc={kenaliLebihDesc}
              buildingImg={buildingImg}
            />
          </section>
          <section className='relative'>
            <DepartemenAkreditasi
              akreditasiImg1={akreditasiImg1}
              akreditasiImg2={akreditasiImg2}
              akreditasiTitle1={akreditasiTitle1}
              akreditasiTitle2={akreditasiTitle2}
              akreditasiDesc1={akreditasiDesc1}
              akreditasiDesc2={akreditasiDesc2}
            />
          </section>
          <section className='relative'>
            <DepartemenDayaTampung
              srcDayaTampungDesktop={srcDayaTampungDesktop}
              srcDayaTampungMobile={srcDayaTampungMobile}
            />
          </section>
          <section className='relative'>
            <DepartemenBidangKeahlian
              bidangKeahlian1={bidangKeahlian1}
              bidangKeahlian2={bidangKeahlian2}
              bidangKeahlian3={bidangKeahlian3}
              bidangKeahlian4={bidangKeahlian4}
              bidangKeahlian5={bidangKeahlian5}
            />
          </section>
        </div>
      </main>
    </div>
  );
}
