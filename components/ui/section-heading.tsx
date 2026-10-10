import Reveal from "./reveal";

type SectionHeadingProps = {
  label: string;
  judul: string;
  deskripsi?: string;
};

export default function SectionHeading({ label, judul, deskripsi }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto max-w-3xl pb-12 text-center md:pb-16">
      <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
        <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
          {label}
        </span>
      </div>
      <h2 className="text-shimmer pb-4 font-nacelle text-3xl font-semibold md:text-4xl">
        {judul}
      </h2>
      {deskripsi && <p className="text-lg text-indigo-200/65">{deskripsi}</p>}
    </Reveal>
  );
}
