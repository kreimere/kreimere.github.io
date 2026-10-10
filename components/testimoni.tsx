import { Quote } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { testimoni, testimoniBagian } from "@/data/portofolio";

export default function Testimoni() {
  if (testimoni.length === 0) return null;

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <SectionHeading label={testimoniBagian.label} judul={testimoniBagian.judul} />
          <div className="mx-auto grid max-w-sm gap-6 sm:max-w-none md:grid-cols-3">
            {testimoni.map((t, i) => (
              <Reveal key={i} delay={i * 0.1} className="h-full">
                <figure className="flex h-full flex-col rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900 p-6 ring-1 ring-gray-800">
                  <Quote className="mb-4 size-6 text-indigo-500" aria-hidden="true" />
                  <blockquote className="grow text-indigo-200/80">“{t.isi}”</blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-full bg-gray-800 text-sm font-semibold text-indigo-200" aria-hidden="true">
                      {t.nama.charAt(0)}
                    </span>
                    <span className="text-sm">
                      <span className="block text-gray-200">{t.nama}</span>
                      <span className="text-gray-500">{t.peran}</span>
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
