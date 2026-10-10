# portofolio-karya

- **Pemilik:** Brian (content creator & video editor, pemula coding). Jelaskan dalam Bahasa Indonesia sederhana.
- **Isi:** website portofolio video (hero + showreel, galeri karya dengan filter, layanan, tentang, pengalaman/pendidikan dari CV, testimoni, kontak).
- **Asal desain:** template gratis Cruip `open-react-template` (github.com/cruip/open-react-template), diubah jadi portofolio.

## Stack
- Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4 (tanpa `src/`, alias `@/*` = root).
- Animasi: `motion/react` dengan `MotionConfig reducedMotion="user"` di `app/providers.tsx`. AOS dari template sudah dihapus.
- Ikon: `lucide-react`; logo merek (WhatsApp, IG, TikTok, YouTube) dari `simple-icons` (`components/ui/social.tsx`).
- Font: Inter via `@fontsource-variable/inter` (jangan `next/font/google`), Nacelle via `next/font/local` dari `public/fonts`.
- shadcn/ui sengaja tidak dipasang supaya tidak menimpa gaya template.

## File penting
- **Semua teks:** `data/portofolio.ts` (nama, kontak, karya, layanan, pengalaman, testimoni). Isi diambil dari CV Brian. Nilai kosong `""` / daftar kosong otomatis disembunyikan (YouTube, showreel, testimoni).
- Gambar sampul karya: `public/karya/`, foto profil: `public/foto/`. Video = link YouTube/TikTok/IG.
- Efek CSS bersama (`text-shimmer`, `border-glow`): `app/css/style.css`. Gaya tombol: `components/ui/buttons.tsx`.

## Lingkungan
- Node.js ada di `D:\Website` (folder program, jangan dipakai/dihapus). Muat ulang PATH di PowerShell sebelum `npm`.
- Preview: `.claude/launch.json` → `D:\Website\npm.cmd run dev --prefix D:\portofolio-karya`, port 3000.
- Python belum terpasang: baca CSV UI/UX Pro Max di `.claude/skills/ui-ux-pro-max/data/` langsung.
