import Image from "next/image";
import BlurredShape from "@/public/images/blurred-shape.svg";
import Reveal from "@/components/ui/reveal";
import { btnPrimary } from "@/components/ui/buttons";
import { tautanSosial, whatsappLink, WhatsappIcon } from "@/components/ui/social";
import { ajakan } from "@/data/portofolio";

export default function Kontak() {
  return (
    <section id="kontak" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-24 ml-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image className="max-w-none" src={BlurredShape} width={760} height={668} alt="" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="bg-linear-to-r from-transparent via-gray-800/50 py-12 md:py-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-shimmer pb-4 font-nacelle text-3xl font-semibold md:text-4xl">
              {ajakan.judul}
            </h2>
            <p className="mb-8 text-lg text-indigo-200/65">{ajakan.deskripsi}</p>
            <a className={`${btnPrimary} gap-2`} href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <WhatsappIcon className="size-4" />
              Chat via WhatsApp
            </a>
            <ul className="mt-8 flex flex-wrap justify-center gap-3" aria-label="Cara lain menghubungi">
              {tautanSosial
                .filter((s) => s.nama !== "WhatsApp")
                .map((s) => (
                  <li key={s.nama}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-sm border-glow cursor-pointer gap-2 bg-gray-800/60 text-gray-300 transition-colors duration-200 hover:text-white focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200"
                    >
                      {s.ikon}
                      {s.nama}
                    </a>
                  </li>
                ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
