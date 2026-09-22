import Image from "next/image";
import { Button } from "./Button";
import { ArrowRightIcon } from "./icons";
import { promoBurger } from "@/lib/images";

export default function PromoSection() {
  return (
    <section className="py-8 md:py-12">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="relative overflow-hidden rounded-[28px] bg-primary text-on-primary">
          <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-secondary/30" />
          <div className="absolute -bottom-16 -right-12 w-64 h-64 rounded-full bg-secondary/20" />
          <div className="absolute top-12 right-1/3 w-6 h-6 rounded-full bg-secondary" />
          <div className="absolute bottom-10 left-8 w-4 h-4 rounded-full bg-secondary" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 items-center gap-6 p-8 md:p-14">
            <div className="text-center lg:text-left">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary text-on-secondary px-4 py-2 text-sm font-bold">
                DISKON 20% AKHIR PEKAN INI
              </span>
              <h2 className="mt-5 font-display text-[40px] sm:text-5xl lg:text-6xl leading-[0.95] tracking-wide">
                Daging Sapi Ganda.
                <br />
                Bahagia Berlipat Ganda.
              </h2>
              <p className="mt-4 text-base md:text-lg text-on-primary/90 max-w-md mx-auto lg:mx-0">
                Dapatkan diskon 20% untuk setiap Double Smash Burger akhir pekan
                ini. Hanya untuk waktu terbatas.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <Button href="#menu" variant="yellow">
                  Pesan Sekarang
                  <ArrowRightIcon className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src={promoBurger}
                alt="Burger smash ganda dengan kentang goreng"
                width={900}
                height={900}
                className="w-[260px] sm:w-[340px] lg:w-[400px] aspect-square object-cover rounded-[24px] rotate-[6deg] shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
