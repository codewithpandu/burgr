import { Button } from "./Button";
import { ArrowRightIcon } from "./icons";

export default function CtaSection() {
  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="relative overflow-hidden rounded-[28px] bg-secondary text-on-secondary text-center p-10 md:p-20">
          <div className="absolute top-6 left-8 w-4 h-4 rounded-full bg-primary" />
          <div className="absolute bottom-10 right-12 w-6 h-6 rounded-full bg-primary/70" />
          <div className="absolute top-16 right-1/4 w-3 h-3 rounded-full bg-primary/50" />

          <h2 className="font-display text-[56px] sm:text-7xl lg:text-8xl leading-[0.9] tracking-wide">
            Sudah Lapar?
          </h2>
          <p className="mt-4 text-lg md:text-xl font-medium text-on-secondary/90 max-w-md mx-auto">
            Burger favoritmu hanya beberapa klik lagi.
          </p>
          <div className="mt-9">
            <Button
              href="#menu"
              className="bg-primary text-on-primary hover:bg-primary-hover hover:-translate-y-0.5 active:scale-95"
            >
              Pesan Sekarang
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
