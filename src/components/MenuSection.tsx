"use client";

import { useState } from "react";
import Image from "next/image";
import { BagIcon, FlameIcon, LeafIcon } from "./icons";
import {
  beefBurger,
  chickenBurger,
  cheeseBurger,
  spicyBurger,
  fries,
  shake,
} from "@/lib/images";

const categories = [
  "Semua",
  "Sapi",
  "Ayam",
  "Telur",
  "Pendamping",
  "Minuman",
] as const;

type Category = (typeof categories)[number];

interface MenuItem {
  name: string;
  description: string;
  price: string;
  category: Exclude<Category, "Semua">;
  image: string;
  alt: string;
  tags?: Array<"spicy" | "vegetarian">;
}

const items: MenuItem[] = [
  {
    name: "Burger Sapi Original",
    description: "Patty sapi, telur, selada, timun, tomat, saus tomat & mayo.",
    price: "Rp 12.000",
    category: "Sapi",
    image: beefBurger,
    alt: "Burger sapi original kaki lima dengan telur dan sayuran",
  },
  {
    name: "Burger Sapi Keju Spesial",
    description: "Patty sapi + keju lumer, telur, dan saus spesial gerobak.",
    price: "Rp 18.000",
    category: "Sapi",
    image: cheeseBurger,
    alt: "Burger sapi keju spesial dengan keju lumer",
  },
  {
    name: "Burger Ayam Crispy",
    description: "Ayam crispy renyah, selada, timun, dan mayo pedas manis.",
    price: "Rp 15.000",
    category: "Ayam",
    image: chickenBurger,
    alt: "Burger ayam crispy dengan selada segar",
  },
  {
    name: "Burger Telur Sosis",
    description: "Telur dadar + sosis sapi, sayuran segar, saus tomat & mayo.",
    price: "Rp 13.000",
    category: "Telur",
    image: spicyBurger,
    alt: "Burger telur sosis khas gerobak kaki lima",
    tags: ["spicy"],
  },
  {
    name: "Kentang Goreng Gerobak",
    description: "Kentang goreng renyah dengan taburan bumbu balado.",
    price: "Rp 10.000",
    category: "Pendamping",
    image: fries,
    alt: "Kentang goreng renyah ala gerobak",
    tags: ["vegetarian"],
  },
  {
    name: "Milo Dinosaur Dingin",
    description: "Milo dingin kental dengan taburan bubuk Milo di atasnya.",
    price: "Rp 8.000",
    category: "Minuman",
    image: shake,
    alt: "Segelas Milo dingin kental",
    tags: ["vegetarian"],
  },
];

export default function MenuSection() {
  const [active, setActive] = useState<Category>("Semua");

  const visible = items.filter(
    (item) => active === "Semua" || item.category === active,
  );

  return (
    <section id="menu" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="text-center">
          <h2 className="font-display text-[40px] sm:text-5xl lg:text-6xl tracking-wide text-text-primary">
            Favorit Kami
          </h2>
          <p className="mt-3 text-base md:text-lg text-text-secondary">
            Burger yang selalu bikin pelanggan balik lagi.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`h-11 px-5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                active === cat
                  ? "bg-primary text-on-primary"
                  : "bg-surface-secondary text-text-primary hover:bg-secondary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((item) => (
            <article
              key={item.name}
              className="group bg-surface border border-border-subtle rounded-[24px] p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden rounded-[16px]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={800}
                  height={800}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="mt-4 flex items-start justify-between gap-3">
                <h3 className="text-xl font-bold text-text-primary">
                  {item.name}
                </h3>
                {/* {item.tags?.map((tag) =>
                  tag === "spicy" ? (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 shrink-0 text-xs font-bold text-accent-orange"
                    >
                      <FlameIcon className="w-4 h-4" /> Pedas
                    </span>
                  ) : (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 shrink-0 text-xs font-bold text-accent-green"
                    >
                      <LeafIcon className="w-4 h-4" /> Vegetarian
                    </span>
                  ),
                )} */}
              </div>

              <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                {item.description}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="font-display text-2xl text-primary">
                  {item.price}
                </span>
                {/* <button
                  type="button"
                  className="inline-flex items-center gap-2 h-11 px-4 rounded-[12px] bg-text-primary text-background text-sm font-bold transition-all duration-200 hover:bg-primary hover:text-on-primary"
                >
                  <BagIcon className="w-5 h-5" />
                  Add to Order
                </button> */}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
