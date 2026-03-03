"use client";

import Image from "next/image";

/* ---------------- BACKGROUND ---------------- */

function GridBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden
    >
      {/* Colored quadrants */}
      <div className="absolute inset-0 flex">
        <div className="flex-1 bg-[#d4e4fc]" />
        <div className="flex-1 bg-[#fce9a8]" />
        <div className="flex-1 bg-[#c8e6c9]" />
        <div className="flex-1 bg-[#f8bbd0]" />
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(100,140,200,0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100,140,200,0.25) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

/* ---------------- SPONSORS DATA ---------------- */

const sponsors = [
  { name: "Sponsor 1", logo: "/sponsors/s1.png" },
  { name: "Sponsor 2", logo: "/sponsors/s2.png" },
  { name: "Sponsor 3", logo: "/sponsors/s3.png" },
  { name: "Sponsor 4", logo: "/sponsors/s4.png" },
  { name: "Sponsor 5", logo: "/sponsors/s5.png" },
  { name: "Sponsor 6", logo: "/sponsors/s6.png" },
  { name: "Sponsor 7", logo: "/sponsors/s7.png" },
  { name: "Sponsor 8", logo: "/sponsors/s8.png" },
  { name: "Sponsor 5", logo: "/sponsors/s5.png" },
  { name: "Sponsor 6", logo: "/sponsors/s6.png" },
  { name: "Sponsor 7", logo: "/sponsors/s7.png" },
  { name: "Sponsor 8", logo: "/sponsors/s8.png" },
];

/* ---------------- COMPONENT ---------------- */

export default function Sponsors() {
  return (
    <section className="relative py-24 overflow-hidden">
      
      {/* Background */}
      <GridBackground />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ---------- HEADING ---------- */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="text-slate-900">
              Our Trusted
            </span>{" "}
            <span className="
              bg-gradient-to-r
              from-blue-600
              to-blue-400
              bg-clip-text
              text-transparent
            ">
              Sponsors
            </span>
          </h2>
        </div>

        {/* ---------- SPONSOR GRID ---------- */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            md:grid-cols-4
            gap-8
          "
        >
          {sponsors.map((sponsor, i) => (
            <div
              key={i}
              className="
                group
                backdrop-blur-md
                bg-white/70
                rounded-2xl
                shadow-md
                hover:shadow-xl
                transition-all
                duration-300
                flex
                items-center
                justify-center
                p-8
                hover:scale-105
              "
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={160}
                height={80}
                className="
                  object-contain
                  grayscale
                  group-hover:grayscale-0
                  transition
                  duration-300
                "
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}