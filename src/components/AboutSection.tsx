import Image from "next/image";
import { Button } from "./Button";
import { kitchen } from "@/lib/images";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        <div className="relative">
          <div className="absolute -top-6 -left-6 w-32 h-32 rounded-[28px] bg-secondary/50 -z-0" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-[28px] bg-primary/10 -z-0" />
          <div className="relative aspect-square overflow-hidden rounded-[28px] border border-border-subtle">
            <Image
              src={kitchen}
              alt="Dapur BURGR sedang menyiapkan burger segar"
              width={900}
              height={900}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="text-center lg:text-left">
          <h2 className="font-display text-[40px] sm:text-5xl lg:text-6xl tracking-wide text-text-primary">
            Dibuat Segar
            <br />
            Setiap Hari.
          </h2>
          <p className="mt-5 text-base md:text-lg leading-relaxed text-text-secondary max-w-lg mx-auto lg:mx-0">
            Semua berawal dari bahan terbaik. Kami menggiling daging sapi sendiri
            setiap pagi, memanggang roti hingga keemasan, dan memotong sayuran
            beberapa jam sebelum dibakar. Tanpa makanan beku. Tanpa jalan pintas.
            Hanya burger jujur yang dibuat saat dipesan dengan cinta sejak hari pertama.
          </p>
          <ul className="mt-6 space-y-3 text-text-primary font-semibold max-w-md mx-auto lg:mx-0">
            <li className="flex items-center justify-center lg:justify-start gap-3">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Patty sapi ditekan dengan tangan
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-3">
              <span className="w-2 h-2 rounded-full bg-accent-green" />
              Sayuran segar dari petani lokal
            </li>
            <li className="flex items-center justify-center lg:justify-start gap-3">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              Saus rahasia khas buatan sendiri
            </li>
          </ul>
          <div className="mt-8 flex justify-center lg:justify-start">
            <Button href="#contact" variant="secondary">
              Cerita Kami
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
