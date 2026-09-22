"use client";

import { useEffect, useState } from "react";
import { Button } from "./Button";
import { MenuIcon, CloseIcon } from "./icons";

const links = [
  { label: "Beranda", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Tentang", href: "#about" },
  { label: "Ulasan", href: "#reviews" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-md shadow-text-primary/5" : ""
      }`}
    >
      <nav className="bg-background/95 backdrop-blur-sm border-b border-border-subtle">
        <div className="mx-auto max-w-7xl px-5 md:px-10 flex items-center justify-between h-[72px]">
          <a href="#home" className="font-display text-3xl tracking-wide text-text-primary">
            BURGR<span className="text-primary">.</span>
          </a>

          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[15px] font-semibold text-text-secondary hover:text-text-primary transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button href="#menu">Pesan Sekarang</Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-12 h-12 rounded-[12px] text-text-primary hover:bg-surface-secondary transition-colors"
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-border-subtle bg-background">
            <ul className="flex flex-col px-5 py-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base font-semibold text-text-primary border-b border-border-subtle last:border-0"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-4">
                <Button href="#menu" className="w-full" >
                  Pesan Sekarang
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
