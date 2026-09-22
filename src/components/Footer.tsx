import { InstagramIcon, ClockIcon } from "./icons";

const columns = [
  {
    title: "Menu",
    links: [
      "Sapi Original",
      "Sapi Keju Spesial",
      "Ayam Crispy",
      "Telur Sosis",
    ],
  },
  {
    title: "Kontak",
    links: ["support@burgr.com", "+62 812 3456 7890"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-footer text-background">
      <div className="mx-auto max-w-7xl px-5 md:px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#home" className="font-display text-4xl tracking-wide">
              BURGR<span className="text-primary">.</span>
            </a>
            <p className="mt-4 text-background/70 leading-relaxed">
              Burger segar. Dibuat dengan cinta.
            </p>
            <div className="mt-5 flex items-center gap-2 text-background/70">
              <ClockIcon className="w-5 h-5" />
              <span className="text-sm">Buka setiap hari · 10.00 — 22.00</span>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-bold text-background uppercase tracking-wide text-sm">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-background/70 hover:text-background transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-bold text-background uppercase tracking-wide text-sm">
              Ikuti Kami
            </h3>
            <a
              href="#"
              aria-label="Instagram"
              className="mt-4 inline-flex items-center justify-center w-12 h-12 rounded-[12px] bg-background/10 hover:bg-primary transition-colors"
            >
              <InstagramIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/60">
            © 2026 BURGR. Seluruh hak cipta dilindungi.
          </p>
          <p className="text-sm text-background/60">
            Dibuat dengan cinta & keju ekstra.
          </p>
        </div>
      </div>
    </footer>
  );
}
