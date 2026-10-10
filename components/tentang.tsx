import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import { profil, tentang } from "@/data/portofolio";

export default function Tentang() {
  return (
    <section id="tentang">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:grid-cols-[2fr_3fr] md:gap-16 md:py-20">
          <Reveal className="mx-auto w-full max-w-xs md:max-w-none">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-linear-to-br from-gray-900 via-indigo-500/25 to-gray-900 ring-1 ring-gray-800">
              {profil.foto ? (
                <Image src={profil.foto} fill sizes="(min-width: 768px) 400px, 320px" className="object-cover" alt={`Foto ${profil.nama}`} />
              ) : (
                <div className="flex size-full items-center justify-center font-nacelle text-7xl font-semibold text-indigo-200/40" aria-hidden="true">
                  {profil.inisial}
                </div>
              )}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-3 pb-3 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                {tentang.label}
              </span>
            </div>
            <h2 className="text-shimmer pb-4 font-nacelle text-3xl font-semibold md:text-4xl">{tentang.judul}</h2>
            <div className="space-y-4 text-lg text-indigo-200/65">
              {tentang.paragraf.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Software yang dipakai">
              {tentang.alat.map((a) => (
                <li key={a} className="rounded-full bg-gray-800/60 px-3 py-1 text-sm text-gray-300 ring-1 ring-gray-700/60">
                  {a}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
