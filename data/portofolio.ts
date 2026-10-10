// =====================================================================
//  SEMUA TEKS WEBSITE ADA DI FILE INI.
//  Ubah tulisan di antara tanda kutip "..." lalu simpan (Ctrl+S).
//  Jangan hapus tanda kutip, koma, atau kurung kurawal { }.
// =====================================================================

export const profil = {
  nama: "Brian Anderson",
  inisial: "BA",
  profesi: "Content Creator & Video Editor",
  lokasi: "Jatinegara, Jakarta",
  // Foto profil: taruh file di folder public/foto, lalu tulis namanya di sini.
  // Kalau dikosongkan "", tampil inisial nama.
  foto: "/foto/profil.jpg",
};

export const kontak = {
  // Nomor WhatsApp pakai format 62..., tanpa + dan tanpa spasi.
  whatsapp: "628780696102",
  pesanWhatsapp: "Halo Brian, saya lihat portofoliomu dan ingin diskusi soal konten.",
  email: "brian.workstudio@gmail.com",
  instagram: "https://instagram.com/briannderson",
  tiktok: "https://www.tiktok.com/@brianndersonn",
  // Kosongkan "" kalau belum mau ditampilkan.
  youtube: "",
};

export const menu = [
  { label: "Karya", href: "#karya" },
  { label: "Layanan", href: "#layanan" },
  { label: "Tentang", href: "#tentang" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Kontak", href: "#kontak" },
];

export const hero = {
  label: "Tersedia untuk proyek baru",
  judul: "Konten yang bikin orang berhenti scroll",
  deskripsi:
    "Saya membantu brand dan bisnis tampil menarik di media sosial, dari editing video pendek sampai desain konten, berbekal pengalaman langsung memegang marketing media sosial dan e-commerce.",
  tombolUtama: "Lihat Karya",
  tombolKedua: "Chat WhatsApp",
  // Showreel: link video YouTube kamu (misalnya https://www.youtube.com/watch?v=xxxx).
  // Kalau dikosongkan "", bagian video di atas disembunyikan.
  showreel: "",
  // Gambar sampul showreel (taruh di public/karya)
  sampulShowreel: "/karya/showreel.jpg",
};

export const angka = [
  { nilai: "4+ th", label: "Pengalaman kerja" },
  { nilai: "3", label: "Perusahaan" },
  { nilai: "9", label: "Software dikuasai" },
  { nilai: "S1", label: "BINUS University" },
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
  deskripsi: "Dari ide konten sampai siap upload. Pilih yang kamu butuhkan.",
};

// ikon yang tersedia: "film", "smartphone", "palette", "sparkles", "music", "captions", "megaphone", "shopping"
export const layanan = [
  { ikon: "smartphone", judul: "Video Reels & TikTok", deskripsi: "Video vertikal pendek dengan hook kuat, tempo cepat, dan musik yang pas." },
  { ikon: "film", judul: "Editing Video", deskripsi: "Merapikan footage mentah jadi video yang enak ditonton, pakai CapCut dan Filmora." },
  { ikon: "captions", judul: "Subtitle & Teks", deskripsi: "Subtitle dan teks di layar supaya pesan tetap sampai walau ditonton tanpa suara." },
  { ikon: "palette", judul: "Desain Konten", deskripsi: "Feed, carousel, dan materi promosi dengan Canva, Photoshop, dan Figma." },
  { ikon: "megaphone", judul: "Kelola Media Sosial", deskripsi: "Perencanaan konten dan pengelolaan akun bisnis supaya aktif dan konsisten." },
  { ikon: "shopping", judul: "Konten E-Commerce", deskripsi: "Visual produk dan materi toko online yang membantu menaikkan penjualan." },
];

export const tentang = {
  label: "Tentang Saya",
  judul: "Halo, saya Brian",
  paragraf: [
    "Saya lulusan International Business Management dari BINUS University, berdomisili di Jakarta. Pengalaman kerja saya mulai dari barista, agen properti, sampai supervisor marketing yang memegang media sosial dan e-commerce.",
    "Dari situ saya belajar bahwa konten yang bagus bukan cuma enak dilihat, tapi juga harus membantu bisnis. Saya pekerja keras, cepat beradaptasi, dan senang berkolaborasi dengan orang dari berbagai latar belakang.",
  ],
  alat: ["CapCut", "Filmora", "Adobe Photoshop", "Canva", "Figma", "Microsoft Excel", "PowerPoint"],
};

// Riwayat kerja & pendidikan (dari CV). Urutkan dari yang terbaru.
export const pengalamanBagian = {
  label: "Pengalaman",
  judul: "Perjalanan saya",
};

export const pengalaman = [
  {
    tahun: "2024 - 2026",
    tempat: "Max Auto Parts",
    posisi: "Supervisor Marketing (Social Media & E-Commerce)",
    poin: ["Marketing media sosial & e-commerce", "HRD", "Finance (AR/AP/Payment)", "Operasional (SAP System)", "Data analyst (Excel)"],
  },
  {
    tahun: "2022",
    tempat: "MJO Property",
    posisi: "Agent",
    poin: ["Admin media sosial", "Show unit ke calon pembeli"],
  },
  {
    tahun: "2022",
    tempat: "Underground Coffee",
    posisi: "Junior - Senior Barista",
    poin: ["Barista & kasir", "Marketing", "Stok inventaris"],
  },
];

export const pendidikan = [
  { tahun: "2021 - 2025", tempat: "BINUS University, Alam Sutera", keterangan: "International Business Management. Panitia Dana & Panitia Keamanan." },
  { tahun: "2018 - 2021", tempat: "SMAK 7 Penabur, Jakarta", keterangan: "" },
];

export const testimoniBagian = {
  label: "Testimoni",
  judul: "Kata mereka yang pernah bekerja sama",
};

// Bagian testimoni otomatis tersembunyi selama daftar ini kosong.
// Contoh isi: { nama: "Nama Klien", peran: "Owner, Nama Brand", isi: "Hasilnya rapi dan cepat!" },
export const testimoni: { nama: string; peran: string; isi: string }[] = [];

export const ajakan = {
  judul: "Siap bikin kontenmu lebih menarik?",
  deskripsi: "Ceritakan kebutuhanmu. Saya balas secepatnya.",
};

export const footer = {
  tagline: "Konten & video untuk brand dan bisnis.",
};
