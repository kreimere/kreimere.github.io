import { Film, Smartphone, Palette, Sparkles, Music, Captions, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { layanan, layananBagian } from "@/data/portofolio";

const ikon: Record<string, LucideIcon> = {
  film: Film,
  smartphone: Smartphone,
  palette: Palette,
  sparkles: Sparkles,
  music: Music,
  captions: Captions,
};

export default function Layanan() {
  return (
    <section id="layanan" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <SectionHeading {...layananBagian} />
          <div className="mx-auto grid max-w-sm gap-x-12 gap-y-10 sm:max-w-none sm:grid-cols-2 md:gap-y-14 lg:grid-cols-3">
            {layanan.map((l, i) => {
              const Ikon = ikon[l.ikon] ?? Sparkles;
              return (
                <Reveal key={l.judul} delay={(i % 3) * 0.1}>
                  <article>
                    <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-indigo-500/10 ring-1 ring-indigo-500/30">
                      <Ikon className="size-5 text-indigo-400" aria-hidden="true" />
                    </div>
                    <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">{l.judul}</h3>
                    <p className="text-indigo-200/65">{l.deskripsi}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
