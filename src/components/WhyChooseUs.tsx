import { LeafIcon, FlameIcon, ClockIcon } from "./icons";

const features = [
  {
    title: "Bahan Segar",
    description: "100% bahan disiapkan segar setiap hari.",
    icon: <LeafIcon className="w-6 h-6" />,
    color: "bg-accent-green",
  },
  {
    title: "Daging Sapi Premium",
    description: "Daging sapi pilihan dengan rasa dan tekstur kaya.",
    icon: <FlameIcon className="w-6 h-6" />,
    color: "bg-primary",
  },
  {
    title: "Antar Cepat",
    description: "Burger panas diantar langsung ke depan pintumu.",
    icon: <ClockIcon className="w-6 h-6" />,
    color: "bg-accent-orange",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center">
          <h2 className="font-display text-[40px] sm:text-5xl lg:text-6xl tracking-wide text-text-primary">
            Kenapa Memilih Kami
          </h2>
          <p className="mt-3 text-base md:text-lg text-text-secondary">
            Kami memperhatikan detail kecil agar burgermu selalu sempurna.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-surface border border-border-subtle rounded-[24px] p-8 text-center"
            >
              <div
                className={`mx-auto inline-flex items-center justify-center w-14 h-14 rounded-[16px] ${feature.color} text-on-primary`}
              >
                {feature.icon}
              </div>
              <h3 className="mt-5 text-xl font-bold text-text-primary">{feature.title}</h3>
              <p className="mt-2 text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
