"use client";

import { useState } from "react";
import Image from "next/image";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Play, X } from "lucide-react";
import { motion } from "motion/react";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";

// Ambil kode video dari link YouTube biasa / youtu.be / shorts.
function youtubeId(url: string) {
  const m = url.match(/(?:youtu\.be\/|v=|shorts\/|embed\/)([\w-]{11})/);
  return m ? m[1] : null;
}

type VideoModalProps = {
  link: string;
  sampul: string;
  judul: string;
};

export default function VideoModal({ link, sampul, judul }: VideoModalProps) {
  const [open, setOpen] = useState(false);
  const id = youtubeId(link);

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      >
        <Image className="md:max-w-none" src={SecondaryIllustration} width={1165} height={1012} alt="" />
      </div>

      <motion.button
        type="button"
        className="group relative flex w-full cursor-pointer items-center justify-center rounded-2xl focus:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200"
        onClick={() => setOpen(true)}
        aria-label={`Putar ${judul}`}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      >
        <figure className="relative aspect-video w-full overflow-hidden rounded-2xl before:absolute before:inset-0 before:-z-10 before:bg-linear-to-br before:from-gray-900 before:via-indigo-500/20 before:to-gray-900">
          <Image
            className="object-cover opacity-60 grayscale transition duration-500 group-hover:scale-[1.02] group-hover:opacity-80 group-hover:grayscale-0"
            src={sampul}
            fill
            sizes="(min-width: 1152px) 1104px, 100vw"
            alt={judul}
            priority
          />
        </figure>
        <span className="pointer-events-none absolute flex items-center gap-3 rounded-full bg-gray-950/70 py-2 pl-2 pr-5 font-medium text-white shadow-lg backdrop-blur-sm transition duration-300 group-hover:scale-105">
          <span className="flex size-10 items-center justify-center rounded-full bg-linear-to-t from-indigo-600 to-indigo-500">
            <Play className="size-4 fill-current" aria-hidden="true" />
          </span>
          <span className="text-sm">Tonton showreel</span>
        </span>
      </motion.button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogBackdrop
          transition
          className="fixed inset-0 z-[99999] bg-black/80 transition-opacity duration-300 ease-out data-closed:opacity-0"
        />
        <div className="fixed inset-0 z-[99999] flex px-4 py-6 sm:px-6">
          <div className="mx-auto flex h-full max-w-6xl items-center">
            <DialogPanel
              transition
              className="relative aspect-video w-[min(90vw,1104px)] max-h-full overflow-hidden rounded-2xl bg-black shadow-2xl duration-300 ease-out data-closed:scale-95 data-closed:opacity-0"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 z-10 flex size-9 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white hover:bg-black focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200"
                aria-label="Tutup video"
              >
                <X className="size-5" />
              </button>
              {id ? (
                <iframe
                  className="size-full"
                  src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
                  title={judul}
                  allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              ) : (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex size-full items-center justify-center text-indigo-200 underline"
                >
                  Buka video di tab baru
                </a>
              )}
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
