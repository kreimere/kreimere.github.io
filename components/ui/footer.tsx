import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";
import Logo from "./logo";
import { tautanSosial } from "./social";
import { profil, footer } from "@/data/portofolio";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center gap-6 border-t py-10 text-center [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:flex-row md:justify-between md:text-left">
          <div className="space-y-2">
            <Logo />
            <p className="text-sm text-indigo-200/65">{footer.tagline}</p>
          </div>
          <ul className="flex gap-2" aria-label="Media sosial">
            {tautanSosial.map((s) => (
              <li key={s.nama}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.nama}
                  className="flex size-10 items-center justify-center rounded-full text-indigo-200/65 transition-colors duration-200 hover:bg-gray-800 hover:text-indigo-300 focus-visible:outline-hidden focus-visible:ring-3 focus-visible:ring-indigo-200"
                >
                  {s.ikon}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <p className="pb-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} {profil.nama}. Semua hak dilindungi.
        </p>
      </div>
    </footer>
  );
}
