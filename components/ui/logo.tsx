import Link from "next/link";
import { profil } from "@/data/portofolio";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200"
      aria-label={`${profil.nama}, kembali ke atas`}
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-linear-to-br from-indigo-400 to-indigo-700 font-nacelle text-sm font-semibold text-white">
        {profil.inisial}
      </span>
      <span className="hidden font-nacelle font-semibold text-gray-100 sm:inline">
        {profil.nama}
      </span>
    </Link>
  );
}
