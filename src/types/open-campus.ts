type KuotaDepartemen = {
  id_departemen: number;
  nama: string;
  kuota: number;
  pendaftar: number;
};

type KuotaFakultas = {
  id_fakultas: number;
  nama: string;
  singkatan: string;
  departemen: KuotaDepartemen[];
};

export type KuotaOpenCampus = {
  sesi1: KuotaFakultas[];
  sesi2: KuotaFakultas[];
};

type FormDataFile = {
  [0]: File;
  [1]: File;
};

export type OpenCampusForm = {
  [key: string]: string | File | Blob | undefined | FormDataFile;
  nama?: string;
  asal_sekolah?: string;
  asal_kota?: string;
  no_hp?: string;
  email?: string;
  jenis_tryout?: string;
  pilihan_fakultas1?: string;
  pilihan_fakultas2?: string;
  pilihan_departemen1?: string;
  pilihan_departemen2?: string;
  sertifikat_vaksin?: FormDataFile;
  repost_poster?: FormDataFile;
  follow_ig?: FormDataFile;
};

// export type OpenCampusForm = {
//   nama?: string;
//   asal_sekolah?: string;
//   asal_kota?: string;
//   no_hp?: string;
//   email?: string;
//   jenis_tryout?: string;
//   pilihan_fakultas1?: string;
//   pilihan_fakultas2?: string;
//   pilihan_departemen1?: string;
//   pilihan_departemen2?: string;
//   sertifikat_vaksin?: File;
//   repost_poster?: File;
//   follow_ig?: File;
// };
