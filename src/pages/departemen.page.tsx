import * as React from 'react';

import Layout from '@/components/layout/Layout';

import DepartemenTemplate from '@/pages/departemen/DepartemenTemplate';

export default function DepartemenPage() {
  return (
    <Layout>
      <DepartemenTemplate
        departmentName='Departemen Sistem Informasi'
        facultyName='FTEIC / ELECTICS'
        kenaliLebihDesc='Departemen Sistem Informasi ITS merupakan jurusan sistem
          informasi pertama di Indonesia. Dalam bidang keilmuan, sistem
          informasi akan mempelajari pengembangan dan manajemen suatu
          informasi, pemodelan proses bisnis, hingga integrasi sistem.
          Mata kuliah pada Departemen Sistem Informasi merupakan gabungan
          dari Departemen Teknik Industri dan Departemen Teknik
          Informatika.'
        buildingName='Gedung Departemen Informasi ITS'
        buildingImg='/images/pageDepartemen/knowMoreSisfor.png'
        akreditasiImg1='/images/pageDepartemen/aunqa.png'
        akreditasiImg2='/images/pageDepartemen/banpt.png'
        akreditasiTitle1='AUN-QA'
        akreditasiTitle2='BAN-PT'
        akreditasiDesc1='Memperoleh sertifikasi Asean University Network Quality Assurance (AUN-QA)  '
        akreditasiDesc2='Mendapatkan akreditasi “A” pada program studi S1, S2, dan S3'
        srcDayaTampungDesktop='/images/pageDepartemen/dayatampungSisfor.png'
        srcDayaTampungMobile='/images/pageDepartemen/m-sisfordayatampung.png'
        bidangKeahlian1='Infrastruktur dan Keamanan Teknologi Informasi'
        bidangKeahlian2='Rekayasa Data dan Integrasi Bisnis'
        bidangKeahlian3='Akuisisi Data dan Diseminasi Informasi'
        bidangKeahlian4='Manajemen Sistem Informasi'
        bidangKeahlian5='Sistem Enterprise'
      />
    </Layout>
  );
}
