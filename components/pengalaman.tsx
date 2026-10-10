import { Award, Briefcase, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/ui/section-heading";
import Reveal from "@/components/ui/reveal";
import { pengalaman, pengalamanBagian, pendidikan, pelatihan } from "@/data/portofolio";

function Judul({ ikon, teks }: { ikon: React.ReactNode; teks: string }) {
  return (
    <h3 className="mb-6 flex items-center gap-2 font-nacelle text-lg font-semibold text-gray-200">
      <span className="flex size-8 items-center justify-center rounded-lg bg-indigo-500/10 text-indigo-400 ring-1 ring-indigo-500/30">
        {ikon}
      </span>
      {teks}
    </h3>
  );
}

export default function Pengalaman() {
  return (
    <section id="pengalaman">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          <SectionHeading {...pengalamanBagian} />
          <div className="grid gap-12 md:grid-cols-[3fr_2fr] md:gap-16">
            {/* Pekerjaan */}
            <div>
              <Judul ikon={<Briefcase className="size-4" aria-hidden="true" />} teks="Pengalaman Kerja" />
              <ol className="space-y-8 border-l border-gray-800 pl-6">
                {pengalaman.map((p, i) => (
                  <li key={p.tempat} className="relative">
                    <Reveal delay={i * 0.1}>
                      <span className="absolute -left-[31px] top-1.5 size-3 rounded-full bg-indigo-500 ring-4 ring-gray-950" aria-hidden="true" />
                      <p className="text-sm text-indigo-300">{p.tahun}</p>
                      <p className="font-nacelle text-lg font-semibold text-gray-100">{p.tempat}</p>
                      <p className="mb-3 text-indigo-200/65">{p.posisi}</p>
                      <ul className="flex flex-wrap gap-2">
                        {p.poin.map((x) => (
                          <li key={x} className="rounded-full bg-gray-800/60 px-3 py-1 text-sm text-gray-300 ring-1 ring-gray-700/60">
                            {x}
                          </li>
                        ))}
                      </ul>
                    </Reveal>
                  </li>
                ))}
              </ol>
            </div>

            {/* Pendidikan */}
            <div>
              <Judul ikon={<GraduationCap className="size-4" aria-hidden="true" />} teks="Pendidikan" />
              <div className="space-y-4">
                {pendidikan.map((p, i) => (
                  <Reveal key={p.tempat} delay={i * 0.1}>
                    <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900 p-5 ring-1 ring-gray-800">
                      <p className="text-sm text-indigo-300">{p.tahun}</p>
                      <p className="font-nacelle font-semibold text-gray-100">{p.tempat}</p>
                      {p.keterangan && <p className="mt-1 text-indigo-200/65">{p.keterangan}</p>}
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-10">
                <Judul ikon={<Award className="size-4" aria-hidden="true" />} teks="Pelatihan" />
                <div className="space-y-4">
                  {pelatihan.map((p, i) => (
                    <Reveal key={p.tempat} delay={i * 0.1}>
                      <div className="rounded-2xl bg-linear-to-br from-gray-900/50 via-gray-800/25 to-gray-900 p-5 ring-1 ring-gray-800">
                        <p className="text-sm text-indigo-300">{p.tahun}</p>
                        <p className="font-nacelle font-semibold text-gray-100">{p.tempat}</p>
                        <p className="mt-1 text-indigo-200/65">{p.keterangan}</p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
