import { StarIcon } from "./icons";

const testimonials = [
  {
    quote: "Daging sapinya juicy banget dan sausnya luar biasa enak.",
    name: "Amanda",
  },
  {
    quote: "Jelas smash burger terenak di kota ini. Lelehan kejunya juara.",
    name: "Rizky",
  },
  {
    quote: "Bahan segar, antar cepat, dan kentangnya tetap renyah. Nilai 10/10.",
    name: "Dinda",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 md:py-24 bg-surface-secondary">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center">
          <h2 className="font-display text-[40px] sm:text-5xl lg:text-6xl tracking-wide text-text-primary">
            Semua Orang Suka Burger Kami
          </h2>
          <p className="mt-3 text-base md:text-lg text-text-secondary">
            Cerita jujur dari pelanggan yang sangat puas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-surface border border-border-subtle rounded-[24px] p-8"
            >
              <div className="flex gap-1 text-secondary" aria-label="5 dari 5 bintang">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5" />
                ))}
              </div>
              <blockquote className="mt-4 text-text-primary text-lg leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 font-bold text-text-secondary">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
