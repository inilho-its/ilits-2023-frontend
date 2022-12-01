import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/Seo';

import BiodataForm from '@/pages/open-campus/components/BiodataForm';
import CompletedPage from '@/pages/open-campus/components/Completed';
import FakultasForm from '@/pages/open-campus/components/FakultasForm';

export default function DaftarOpenCampusPage() {
  const [step, setStep] = React.useState(0);
  return (
    <Layout>
      <Seo templateTitle='Daftar Open Campus' />

      <main>
        <section className='bg-bone-500'>
          <div className='flex min-h-screen items-center justify-center py-10'>
            {step === 0 && <BiodataForm setStep={setStep} />}
            {step === 1 && <FakultasForm setStep={setStep} />}
            {step === 2 && <CompletedPage />}
          </div>
        </section>
      </main>
    </Layout>
  );
}
