"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import Spotlight from "@/components/spotlight";
import SectionHeading from "@/components/ui/section-heading";
import { karya, kategoriKarya } from "@/data/portofolio";

export default function Karya() {
  const [kategori, setKategori] = useState(kategoriKarya[0]);
  const daftar = kategori === kategoriKarya[0] ? karya : karya.filter((k) => k.kategori === kategori);

  return (
    <section id="karya">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <SectionHeading
            label="Portofolio"
            judul="Karya pilihan"
            deskripsi="Beberapa video yang pernah saya kerjakan. Klik untuk menonton."
          />

          {/* Tombol filter */}
          <div className="flex justify-center pb-10 md:pb-12">
            <div
              className="relative inline-flex max-w-full flex-wrap justify-center gap-1 rounded-[1.25rem] bg-gray-800/40 p-1"
              role="group"
              aria-label="Filter kategori karya"
            >
              {kategoriKarya.map((k) => {
                const aktif = k === kategori;
                return (
                  <button
                    key={k}
                    type="button"
                    aria-pressed={aktif}
                    onClick={() => setKategori(k)}
                    className={`relative flex h-8 cursor-pointer items-center whitespace-nowrap rounded-full px-3 text-sm font-medium transition-opacity duration-200 focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 ${aktif ? "text-white" : "text-gray-300 opacity-70 hover:opacity-100"}`}
                  >
                    {aktif && (
                      <motion.span
                        layoutId="filter-aktif"
                        className="absolute inset-0 rounded-full bg-linear-to-b from-gray-900 via-gray-800/60 to-gray-900 ring-1 ring-indigo-500/50"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative">{k}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Kartu karya */}
          <Spotlight
            key={kategori}
            className="group mx-auto grid max-w-sm items-start gap-6 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {daftar.map((k, i) => (
                <motion.a
                  key={k.judul}
                  href={k.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group/card relative h-full cursor-pointer overflow-hidden rounded-2xl bg-gray-800 p-px before:pointer-events-none before:absolute before:-left-40 before:-top-40 before:z-10 before:h-80 before:w-80 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:rounded-full before:bg-indigo-500/80 before:opacity-0 before:blur-3xl before:transition-opacity before:duration-500 after:pointer-events-none after:absolute after:-left-48 after:-top-48 after:z-30 after:h-64 after:w-64 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:rounded-full after:bg-indigo-500 after:opacity-0 after:blur-3xl after:transition-opacity after:duration-500 hover:after:opacity-20 focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200 group-hover:before:opacity-100"
                >
                  <div className="relative z-20 h-full overflow-hidden rounded-[inherit] bg-gray-950 after:pointer-events-none after:absolute after:inset-0 after:bg-linear-to-br after:from-gray-900/50 after:via-gray-800/25 after:to-gray-900/50">
                    <div
                      className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full border border-gray-700/50 bg-gray-800/80 text-gray-200 opacity-0 transition-opacity duration-200 group-hover/card:opacity-100"
                      aria-hidden="true"
                    >
                      <ArrowUpRight className="size-4" />
                    </div>
                    <div className="relative aspect-[350/288] overflow-hidden">
                      <Image
                        className="object-cover transition-transform duration-500 group-hover/card:scale-105"
                        src={k.sampul}
                        fill
                        sizes="(min-width: 1024px) 352px, (min-width: 640px) 50vw, 384px"
                        alt={k.judul}
                      />
                    </div>
                    <div className="p-6">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-gray-800/60 px-2.5 py-0.5 text-xs ring-1 ring-gray-700/60">
                          <span className="bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                            {k.kategori}
                          </span>
                        </span>
                        <span className="text-xs text-gray-500">{k.klien}</span>
                      </div>
                      <h3 className="mb-1 font-nacelle text-lg font-semibold text-gray-100">{k.judul}</h3>
                      <p className="text-indigo-200/65">{k.deskripsi}</p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </Spotlight>
        </div>
      </div>
    </section>
  );
}
