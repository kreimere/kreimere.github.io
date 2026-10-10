import { Mail } from "lucide-react";
import { siWhatsapp, siInstagram, siTiktok, siYoutube } from "simple-icons";
import { kontak } from "@/data/portofolio";

function BrandIcon({ path, className = "size-5" }: { path: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  );
}

export const whatsappLink = `https://wa.me/${kontak.whatsapp}?text=${encodeURIComponent(kontak.pesanWhatsapp)}`;

export const tautanSosial = [
  { nama: "WhatsApp", href: whatsappLink, ikon: <BrandIcon path={siWhatsapp.path} /> },
  { nama: "Email", href: `mailto:${kontak.email}`, ikon: <Mail className="size-5" aria-hidden="true" /> },
  { nama: "Instagram", href: kontak.instagram, ikon: <BrandIcon path={siInstagram.path} /> },
  { nama: "TikTok", href: kontak.tiktok, ikon: <BrandIcon path={siTiktok.path} /> },
  { nama: "YouTube", href: kontak.youtube, ikon: <BrandIcon path={siYoutube.path} /> },
];

export function WhatsappIcon({ className }: { className?: string }) {
  return <BrandIcon path={siWhatsapp.path} className={className} />;
}
