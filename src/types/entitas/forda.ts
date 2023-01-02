export interface Forda {
  forda_id?: number;
  harga?: number;
  jumlah_tiket?: number;
  opsi_pembayaran?: string;
  peserta?: Peserta[];
}

export interface Peserta {
  [key: string]: string | number | undefined;
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

export interface BiodataFormState {
  peserta: {
    [key: string]: string | number | undefined;
    nama: string;
    asal_sekolah: string;
    asal_kota: string;
    alamat_sekolah: string;
    no_hp: string;
    email: string;
    jenis_tryout: string;
  }[];
}

export interface DiksonRequest {
  kode_diskon: string;
  jumlah_pendaftar: number;
  forda_id: string | number;
}

export interface BerkasFormType {
  peserta: Berkas[];
}

export interface Berkas {
  [key: string]: string | number | undefined;
  repost_feeds: string;
  follow_ig: string;
  upload_vaksin: string;
}
