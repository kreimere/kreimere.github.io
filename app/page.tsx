import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero";
import Karya from "@/components/karya";
import Layanan from "@/components/layanan";
import Tentang from "@/components/tentang";
import Pengalaman from "@/components/pengalaman";
import Testimoni from "@/components/testimoni";
import Kontak from "@/components/kontak";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />
      <Karya />
      <Layanan />
      <Tentang />
      <Pengalaman />
      <Testimoni />
      <Kontak />
    </>
  );
}
