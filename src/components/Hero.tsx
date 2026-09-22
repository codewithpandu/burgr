import Image from "next/image";
import { Button } from "./Button";
import { ArrowRightIcon } from "./icons";
import { heroBurger } from "@/lib/images";

function Tomato() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <circle cx="32" cy="32" r="28" fill="#e6392f" />
      <path d="M32 4c2 8 10 10 12 14-2-8-8-10-12-14Z" fill="#49794a" />
      <ellipse cx="24" cy="24" rx="7" ry="5" fill="#ef5350" />
    </svg>
  );
}

function Cheese() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <path
        d="M8 20 56 8v34a6 6 0 0 1-6 6H14a6 6 0 0 1-6-6V20Z"
        fill="#f4b942"
      />
      <circle cx="22" cy="36" r="4" fill="#dfa62e" />
      <circle cx="38" cy="24" r="3" fill="#dfa62e" />
      <circle cx="44" cy="40" r="4" fill="#dfa62e" />
    </svg>
  );
}

function Lettuce() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <path
        d="M8 36c6-8 12-8 16-2 5-7 11-7 16-1 5-7 11-6 16-1v16H8V36Z"
        fill="#6fbf4a"
      />
      <path
        d="M8 40c5-5 11-5 16 0 5-5 11-5 16 0 5-5 11-5 16 0v8H8v-8Z"
        fill="#83cc5c"
      />
    </svg>
  );
}

function Chili() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <path
        d="M14 18c0-8 12-10 16-4 4-6 22-2 20 12-2 14-14 22-20 22-10 0-16-14-16-30Z"
        fill="#e6392f"
      />
      <path
        d="M30 10c-4 4-2 8 2 10"
        stroke="#49794a"
        strokeWidth="4"
        fill="none"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-10 pt-10 pb-20 md:pt-16 md:pb-28 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-8">
        <div className="order-1 text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full bg-surface-secondary px-4 py-2 text-sm font-semibold text-accent-green">
            <span className="w-2 h-2 rounded-full bg-accent-green" />
            Segar. Lezat. Dibuat Saat Dipesan.
          </p>

          <h1 className="mt-6 font-display text-[40px] leading-[0.95] sm:text-[48px] lg:text-[72px] text-text-primary tracking-wide">
            Burger
            <br />
            yang Selalu
            <br />
            <span className="text-primary">Kamu Idamkan.</span>
          </h1>

          <p className="mt-6 text-base md:text-lg leading-relaxed text-text-secondary max-w-md mx-auto lg:mx-0">
            Daging sapi juicy, keju leleh, sayuran segar, dan saus rahasia
            khas kami. Dibuat untuk para pecinta burger sejati.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-center lg:justify-start">
            <Button href="#menu" className="w-full sm:w-auto">
              Pesan Sekarang
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
            <Button
              href="#menu"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Lihat Menu
            </Button>
          </div>
        </div>

        <div className="order-2 relative flex items-center justify-center">
          <Image
            src={heroBurger}
            alt="Burger smash BURGER yang juicy dengan keju leleh dan selada segar"
            width={900}
            height={900}
            priority
            className="w-[300px] sm:w-[400px] lg:w-[460px] aspect-square object-cover rounded-[28px] rotate-[-6deg] shadow-2xl"
          />

          <div className="absolute top-2 right-0 sm:right-6 rotate-[-8deg] bg-secondary text-on-secondary rounded-full w-28 h-28 sm:w-32 sm:h-32 flex flex-col items-center justify-center shadow-lg">
            <span className="font-display text-xl leading-none">Paling</span>
            <span className="font-display text-2xl leading-none">Laris</span>
            <span className="text-sm font-bold mt-1">Rp 39K</span>
          </div>

          <div className="absolute -top-2 left-0 sm:left-4 w-12 h-12 sm:w-16 sm:h-16 animate-float">
            <Tomato />
          </div>
          <div className="absolute bottom-16 left-2 sm:left-0 w-12 h-12 sm:w-16 sm:h-16 animate-float-slow">
            <Lettuce />
          </div>
          <div className="absolute top-8 left-16 sm:left-24 w-10 h-10 sm:w-12 sm:h-12 animate-float-slow">
            <Cheese />
          </div>
          <div className="absolute bottom-4 right-8 sm:right-14 w-10 h-10 sm:w-14 sm:h-14 animate-float">
            <Chili />
          </div>
        </div>
      </div>
    </section>
  );
}
