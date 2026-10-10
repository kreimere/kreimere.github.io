import "@fontsource-variable/inter";
import "./css/style.css";

import type { Metadata } from "next";
import localFont from "next/font/local";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Providers from "./providers";
import { profil, hero } from "@/data/portofolio";

const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profil.nama} | ${profil.profesi}`,
  description: hero.deskripsi,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${nacelle.variable} bg-gray-950 font-inter text-base text-gray-200 antialiased`}
      >
        <Providers>
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header />
            <main className="relative flex grow flex-col">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
