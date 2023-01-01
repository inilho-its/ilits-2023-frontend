export interface Forda {
  [key: string]: string | number | Peserta[] | undefined;
  forda_id?: number;
  harga?: number;
  jumlah_tiket?: number;
  opsi_pembayaran?: string;
  bukti_pembayaran?: string;
  peserta?: Peserta[];
}

export interface Peserta {
  nama?: string;
  nik?: string;
  asal_sekolah?: string;
  alamat_sekolah?: string;
  no_hp?: string;
  email?: string;
  kelompok_ujian?: string;
  follow_ig?: string;
  repost_feeds?: string;
  upload_vaksin?: string;
}

export type BiodataFormState = {
  peserta: {
    nama: string;
    asal_sekolah: string;
    asal_kota: string;
    alamat_sekolah: string;
    no_hp: string;
    email: string;
    jenis_tryout: string;
  }[];
};
