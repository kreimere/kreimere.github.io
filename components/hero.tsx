"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import VideoModal from "@/components/video-modal";
import { btnPrimary, btnSecondary } from "@/components/ui/buttons";
import { whatsappLink, WhatsappIcon } from "@/components/ui/social";
import { hero, angka } from "@/data/portofolio";

const muncul = (delay: number) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const, delay },
});

export default function Hero() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pb-12 pt-32 md:pb-20 md:pt-40">
          <div className="pb-12 text-center md:pb-16">
            <motion.div {...muncul(0)} className="mb-5 inline-flex items-center gap-2 rounded-full border border-gray-800 bg-gray-900/60 px-3 py-1 text-sm text-indigo-200/80">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:hidden" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
              </span>
              {hero.label}
            </motion.div>
            <motion.h1
              {...muncul(0.1)}
              className="text-shimmer mx-auto max-w-4xl pb-5 font-nacelle text-4xl font-semibold md:text-6xl"
            >
              {hero.judul}
            </motion.h1>
            <div className="mx-auto max-w-3xl">
              <motion.p {...muncul(0.2)} className="mb-8 text-lg text-indigo-200/65 md:text-xl">
                {hero.deskripsi}
              </motion.p>
              <motion.div {...muncul(0.3)} className="mx-auto flex max-w-xs flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">
                <a className={`${btnPrimary} w-full sm:w-auto`} href="#karya">
                  <span className="relative inline-flex items-center">
                    {hero.tombolUtama}
                    <ArrowRight className="ml-1.5 size-4 text-white/60 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </a>
                <a className={`${btnSecondary} w-full gap-2 sm:w-auto`} href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <WhatsappIcon className="size-4" />
                  {hero.tombolKedua}
                </a>
              </motion.div>
            </div>
          </div>

          <VideoModal link={hero.showreel} sampul={hero.sampulShowreel} judul="Showreel" />

          {/* Angka pencapaian */}
          <motion.div
            {...muncul(0.7)}
            className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 md:mt-16 md:grid-cols-4"
          >
            {angka.map((a) => (
              <div key={a.label} className="text-center">
                <p className="font-nacelle text-3xl font-semibold text-gray-100 md:text-4xl">{a.nilai}</p>
                <p className="mt-1 text-sm text-indigo-200/65">{a.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
