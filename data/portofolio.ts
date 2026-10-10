// =====================================================================
//  SEMUA TEKS WEBSITE ADA DI FILE INI.
//  Ubah tulisan di antara tanda kutip "..." lalu simpan (Ctrl+S).
//  Jangan hapus tanda kutip, koma, atau kurung kurawal { }.
// =====================================================================

export const profil = {
  nama: "Brian Anderson",
  inisial: "BA",
  profesi: "Corporate Secretary & Creative Generalist",
  lokasi: "Jatinegara, Jakarta",
  // Foto profil: taruh file di folder public/foto, lalu tulis namanya di sini.
  // Kalau dikosongkan "", tampil inisial nama.
  foto: "/foto/satcy.jpg",
};

export const kontak = {
  // Nomor WhatsApp pakai format 62..., tanpa + dan tanpa spasi.
  whatsapp: "6285780696102",
  pesanWhatsapp: "Halo Brian, saya lihat portofoliomu dan ingin diskusi peluang kerja sama.",
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
  label: "Terbuka untuk peluang kerja & proyek",
  judul: "Satu orang, siap pegang banyak divisi",
  deskripsi:
    "Corporate Secretary yang terbiasa menangani finance, marketing, HRD, dan operasional sekaligus. Didukung keahlian Excel untuk data dan dashboard, serta kemampuan membuat konten kreatif untuk bisnis.",
  // Label bidang di bawah deskripsi
  bidang: ["Finance", "Marketing", "HRD", "Operasional", "Data & Excel", "Konten Kreatif"],
  tombolUtama: "Lihat Karya",
  tombolKedua: "Chat WhatsApp",
  // Showreel: link video YouTube kamu (misalnya https://www.youtube.com/watch?v=xxxx).
  // Kalau dikosongkan "", bagian video di atas disembunyikan.
  showreel: "",
  // Gambar sampul showreel (taruh di public/karya)
  sampulShowreel: "/karya/showreel.jpg",
};

export const angka = [
  { nilai: "5+ th", label: "Pengalaman kerja" },
  { nilai: "6", label: "Brand & perusahaan" },
  { nilai: "8", label: "Software dikuasai" },
  { nilai: "S1", label: "BINUS University" },
];

export const karyaBagian = {
  label: "Portofolio",
  judul: "Hasil karya",
  deskripsi: "Beberapa hasil kerja saya. Klik kartunya untuk melihat lebih jelas.",
};

// Kategori untuk tombol filter di bagian Karya. "Semua" harus tetap paling depan.
export const kategoriKarya = ["Semua", "Desain Konten", "Model & Talent", "Brand & Bisnis"];

// Daftar karya. Tambah/hapus satu blok { ... } untuk menambah/menghapus karya.
// - kategori: harus sama persis dengan salah satu kategori di atas
// - sampul: gambar di folder public/karya
// - link: link YouTube / TikTok / Instagram. Kalau dikosongkan "", klik kartu = gambar diperbesar.
export const karya = [
  {
    judul: "Visual Produk Bolt Active",
    kategori: "Desain Konten",
    klien: "Bolt Active",
    deskripsi: "Desain konten media sosial untuk produk bola Bolt Active (freelance).",
    link: "",
    sampul: "/karya/bolt-active.png",
  },
  {
    judul: "Poster Promo Single Meaty",
    kategori: "Desain Konten",
    klien: "Meaty Burger",
    deskripsi: "Poster pre-order untuk usaha burger milik sendiri, dari foto produk sampai desain.",
    link: "",
    sampul: "/karya/meaty-burger.jpg",
  },
  {
    judul: "Model Produk Tas Satcy",
    kategori: "Model & Talent",
    klien: "Satcy",
    deskripsi: "Model / talent untuk foto produk ransel Satcy.",
    link: "",
    sampul: "/karya/satcy.jpg",
  },
  {
    judul: "Foto Produk Kopi",
    kategori: "Brand & Bisnis",
    klien: "Underground Coffee",
    deskripsi: "Konten foto produk untuk marketing kedai kopi, selain bertugas sebagai barista.",
    link: "",
    sampul: "/karya/underground-coffee.jpg",
  },
  {
    judul: "Team Creative Properti",
    kategori: "Brand & Bisnis",
    klien: "MJO Property",
    deskripsi: "Bagian dari tim kreatif: admin media sosial dan materi promosi properti.",
    link: "",
    sampul: "/karya/mjo-property.jpg",
  },
  {
    judul: "Corporate Secretary",
    kategori: "Brand & Bisnis",
    klien: "Max Autoparts Indonesia",
    deskripsi: "Koordinasi tim untuk finance, marketing, HRD, dan operasional perusahaan.",
    link: "",
    sampul: "/karya/max-autoparts.jpg",
  },
];

export const layananBagian = {
  label: "Layanan",
  judul: "Apa yang bisa saya bantu",
  deskripsi: "Dari ide konten sampai siap upload. Pilih yang kamu butuhkan.",
};

// ikon yang tersedia: "film", "smartphone", "palette", "sparkles", "music", "captions", "megaphone", "shopping", "chart"
export const layanan = [
  { ikon: "smartphone", judul: "Video Reels & TikTok", deskripsi: "Video vertikal pendek dengan hook kuat, tempo cepat, dan musik yang pas." },
  { ikon: "film", judul: "Editing Video", deskripsi: "Merapikan footage mentah jadi video yang enak ditonton, lengkap dengan subtitle, pakai CapCut dan Filmora." },
  { ikon: "chart", judul: "Data & Dashboard Excel", deskripsi: "Analisis data, data cleaning, dan dashboard profesional di Excel untuk laporan bisnis." },
  { ikon: "palette", judul: "Desain Konten", deskripsi: "Feed, carousel, dan materi promosi dengan Canva dan Figma." },
  { ikon: "megaphone", judul: "Kelola Media Sosial", deskripsi: "Perencanaan konten dan pengelolaan akun bisnis supaya aktif dan konsisten." },
  { ikon: "shopping", judul: "Konten E-Commerce", deskripsi: "Visual produk dan materi toko online yang membantu menaikkan penjualan." },
];

export const tentang = {
  label: "Tentang Saya",
  judul: "Halo, saya Brian",
  paragraf: [
    "Saya lulusan International Business Management (S.E.) dari BINUS University, berdomisili di Jakarta. Saat ini saya Corporate Secretary di Max Autoparts Indonesia, memegang finance, marketing, HRD, dan operasional. Di luar itu saya aktif sebagai model/talent dan desainer konten media sosial freelance.",
    "Dari situ saya belajar bahwa konten yang bagus bukan cuma enak dilihat, tapi juga harus membantu bisnis. Saya pekerja keras, cepat beradaptasi, dan senang berkolaborasi dengan orang dari berbagai latar belakang.",
  ],
  // Keahlian utama (ditampilkan lebih menonjol)
  keahlianUtama: {
    judul: "Microsoft Excel (Expert)",
    poin: ["Data analyst", "Data cleaning", "Dashboard profesional"],
  },
  alat: ["Microsoft Excel", "CapCut", "Filmora 14", "Canva", "Figma", "Microsoft Word", "PowerPoint", "SAP System"],
};

// Riwayat kerja & pendidikan (dari CV). Urutkan dari yang terbaru.
export const pengalamanBagian = {
  label: "Pengalaman",
  judul: "Perjalanan saya",
};

export const pengalaman = [
  {
    tahun: "2024 - 2026",
    tempat: "Max Autoparts Indonesia",
    posisi: "Corporate Secretary",
    poin: ["Finance (AR/AP/Payment)", "Marketing (Social Media & E-Commerce)", "HRD", "Operasional (SAP System)", "Data analyst (Excel)"],
  },
  {
    tahun: "2026",
    tempat: "Bolt Active",
    posisi: "Freelance Design Social Media",
    poin: ["Desain konten media sosial"],
  },
  {
    tahun: "2025",
    tempat: "Satcy",
    posisi: "Model / Talent",
    poin: ["Foto produk & kampanye"],
  },
  {
    tahun: "2022",
    tempat: "MJO Property",
    posisi: "Agent Property & Team Creative",
    poin: ["Admin media sosial", "Show unit ke calon pembeli"],
  },
  {
    tahun: "2022",
    tempat: "Underground Coffee",
    posisi: "Junior - Senior Barista",
    poin: ["Barista & kasir", "Marketing", "Stok inventaris"],
  },
  {
    tahun: "2020 - 2021",
    tempat: "Meaty Burger",
    posisi: "Owner (Start-up Business)",
    poin: ["Membangun usaha kuliner sendiri", "Desain promosi"],
  },
];

export const pendidikan = [
  { tahun: "2021 - 2025", tempat: "BINUS University, Alam Sutera", keterangan: "S1 International Business Management (S.E.), IPK 3.48." },
  { tahun: "2018 - 2021", tempat: "SMAK 7 Penabur, Jakarta", keterangan: "" },
];

// Pelatihan yang pernah diikuti.
export const pelatihan = [
  { tahun: "2026", tempat: "Data Experts", keterangan: "Komunitas Excel Indonesia (KEI)" },
  { tahun: "2024", tempat: "Marketing & Sales", keterangan: "Max Autoparts" },
];

export const testimoniBagian = {
  label: "Testimoni",
  judul: "Kata mereka yang pernah bekerja sama",
};

// Bagian testimoni otomatis tersembunyi selama daftar ini kosong.
// Contoh isi: { nama: "Nama Klien", peran: "Owner, Nama Brand", isi: "Hasilnya rapi dan cepat!" },
export const testimoni: { nama: string; peran: string; isi: string }[] = [];

export const ajakan = {
  judul: "Butuh orang yang bisa diandalkan di banyak bidang?",
  deskripsi: "Ceritakan kebutuhan tim atau bisnismu. Saya balas secepatnya.",
};

export const footer = {
  tagline: "Corporate secretary, data, dan konten kreatif untuk bisnis.",
};
