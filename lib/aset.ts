// Menambahkan alamat dasar website (dipakai saat online di GitHub Pages,
// misalnya /portofolio-karya) ke depan path gambar di folder public.
export function aset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
