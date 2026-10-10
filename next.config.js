/** @type {import('next').NextConfig} */
// Alamat dasar diisi otomatis oleh GitHub Actions saat deploy ke GitHub Pages.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
