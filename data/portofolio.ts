// =====================================================================
//  SEMUA TEKS WEBSITE ADA DI FILE INI.
//  Ubah tulisan di antara tanda kutip "..." lalu simpan (Ctrl+S).
//  Jangan hapus tanda kutip, koma, atau kurung kurawal { }.
// =====================================================================

export const profil = {
  nama: "Brian Anderson",
  inisial: "BA",
  profesi: "Video Editor & Content Creator",
  // Foto profil: taruh file di folder public/foto, lalu tulis namanya di sini.
  // Contoh: "/foto/profil.jpg". Kalau dikosongkan "", tampil inisial nama.
  foto: "",
};

export const kontak = {
  // Nomor WhatsApp pakai format 62..., tanpa + dan tanpa spasi.
  whatsapp: "6281234567890",
  pesanWhatsapp: "Halo Brian, saya lihat portofoliomu dan ingin diskusi proyek video.",
  email: "brian.workstudio@gmail.com",
  instagram: "https://instagram.com/username",
  tiktok: "https://tiktok.com/@username",
  youtube: "https://youtube.com/@username",
};

export const menu = [
  { label: "Karya", href: "#karya" },
  { label: "Layanan", href: "#layanan" },
  { label: "Tentang", href: "#tentang" },
  { label: "Kontak", href: "#kontak" },
];

export const hero = {
  label: "Tersedia untuk proyek baru",
  judul: "Video yang bikin orang berhenti scroll",
  deskripsi:
    "Saya membantu brand dan kreator mengubah footage mentah jadi video yang rapi, bercerita, dan siap tayang di YouTube, Reels, dan TikTok.",
  tombolUtama: "Lihat Karya",
  tombolKedua: "Chat WhatsApp",
  // Showreel: link video YouTube kamu (yang biasa, misalnya https://www.youtube.com/watch?v=xxxx)
  showreel: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  // Gambar sampul showreel (taruh di public/karya)
  sampulShowreel: "/karya/showreel.jpg",
};

export const angka = [
  { nilai: "150+", label: "Video selesai" },
  { nilai: "40+", label: "Klien & brand" },
  { nilai: "5 th", label: "Pengalaman" },
  { nilai: "10jt+", label: "Total penonton" },
];

// Kategori untuk tombol filter di bagian Karya.
export const kategoriKarya = ["Semua", "YouTube", "Reels & TikTok", "Brand & Iklan"];

// Daftar karya. Tambah/hapus satu blok { ... } untuk menambah/menghapus karya.
// - link: link YouTube / TikTok / Instagram
// - sampul: gambar di folder public/karya (kalau kosong, pakai gambar contoh)
export const karya = [
  {
    judul: "Travel Vlog: Seminggu di Labuan Bajo",
    kategori: "YouTube",
    klien: "Channel pribadi",
    deskripsi: "Editing cinematic, color grading, dan sound design untuk vlog 12 menit.",
    link: "https://youtube.com",
    sampul: "/karya/contoh-1.png",
  },
  {
    judul: "Launching Produk Skincare",
    kategori: "Brand & Iklan",
    klien: "Nama Brand",
    deskripsi: "Iklan 30 detik dengan motion graphic dan teks kinetik.",
    link: "https://youtube.com",
    sampul: "/karya/contoh-2.png",
  },
  {
    judul: "Seri Reels Kuliner",
    kategori: "Reels & TikTok",
    klien: "Nama Restoran",
    deskripsi: "10 video pendek dengan hook kuat di 3 detik pertama.",
    link: "https://instagram.com",
    sampul: "/karya/contoh-3.png",
  },
  {
    judul: "Podcast Highlight Clips",
    kategori: "Reels & TikTok",
    klien: "Nama Podcast",
    deskripsi: "Potongan momen terbaik dengan subtitle animasi.",
    link: "https://tiktok.com",
    sampul: "/karya/contoh-2.png",
  },
  {
    judul: "Company Profile",
    kategori: "Brand & Iklan",
    klien: "Nama Perusahaan",
    deskripsi: "Video profil 3 menit, dari wawancara sampai b-roll.",
    link: "https://youtube.com",
    sampul: "/karya/contoh-1.png",
  },
  {
    judul: "Tutorial Editing untuk Pemula",
    kategori: "YouTube",
    klien: "Channel pribadi",
    deskripsi: "Video edukasi dengan zoom, callout, dan b-roll pendukung.",
    link: "https://youtube.com",
    sampul: "/karya/contoh-3.png",
  },
];

export const layananBagian = {
  label: "Layanan",
  judul: "Apa yang bisa saya bantu",
  deskripsi: "Dari ide sampai video siap upload. Pilih yang kamu butuhkan.",
};

// ikon yang tersedia: "film", "smartphone", "palette", "sparkles", "music", "captions"
export const layanan = [
  { ikon: "film", judul: "Video YouTube", deskripsi: "Vlog, edukasi, dan dokumenter dengan alur cerita yang enak ditonton." },
  { ikon: "smartphone", judul: "Reels & TikTok", deskripsi: "Video vertikal pendek dengan hook kuat dan tempo cepat." },
  { ikon: "sparkles", judul: "Motion Graphics", deskripsi: "Teks animasi, lower third, dan intro yang bikin video terlihat mahal." },
  { ikon: "palette", judul: "Color Grading", deskripsi: "Warna yang konsisten dan sinematik sesuai karakter brand kamu." },
  { ikon: "music", judul: "Sound Design", deskripsi: "Musik, efek suara, dan pembersihan audio supaya jernih." },
  { ikon: "captions", judul: "Subtitle Animasi", deskripsi: "Subtitle gaya kekinian supaya penonton tetap menonton tanpa suara." },
];

export const tentang = {
  label: "Tentang Saya",
  judul: "Halo, saya Brian",
  paragraf: [
    "Saya video editor dan content creator yang sudah bekerja dengan kreator, UMKM, sampai brand nasional.",
    "Buat saya, editing bukan sekadar memotong klip. Ini soal ritme, emosi, dan membuat penonton bertahan sampai detik terakhir.",
  ],
  alat: ["Premiere Pro", "After Effects", "DaVinci Resolve", "CapCut"],
};

export const testimoniBagian = {
  label: "Testimoni",
  judul: "Kata mereka yang pernah bekerja sama",
};

export const testimoni = [
  { nama: "Nama Klien", peran: "Owner, Nama Brand", isi: "Hasil editnya rapi dan cepat. Engagement Reels kami naik drastis sejak dipegang Brian." },
  { nama: "Nama Klien", peran: "YouTuber", isi: "Paham banget gaya channel saya. Revisi minim, komunikasi enak." },
  { nama: "Nama Klien", peran: "Marketing Manager", isi: "Video company profile kami jadi terlihat jauh lebih profesional. Recommended!" },
];

export const ajakan = {
  judul: "Punya footage yang menunggu diedit?",
  deskripsi: "Ceritakan proyekmu. Saya balas secepatnya, biasanya di hari yang sama.",
};

export const footer = {
  tagline: "Video editing untuk kreator dan brand.",
};
