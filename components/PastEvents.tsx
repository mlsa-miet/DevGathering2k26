"use client";

import Image from "next/image";
import type { SyntheticEvent } from "react";

type EventItem = {
  id: number;
  title: string;
  image: string;
  buttonColor: string;
  href: string;
  featured?: boolean;
};

// Event Data---------------------------------
const events: EventItem[] = [
  {
    id: 1,
    title: "DevGathering 2k25",
    image: "/images/width_800.jpg", // replace with your actual image path
    buttonColor: "#F9A8B8", // pink
    href: "#",
  },
  {
    id: 2,
    title: "SAMAARAMBH 3.O",
    image: "/images/IMG_2517.JPG",
    buttonColor: "#7DD3FC", // sky blue
    href: "#",
    featured: true, // center card, raised up
  },
  {
    id: 3,
    title: "Salesforce",
    image: "/images/IMG_1902 (1).JPG",
    buttonColor: "#FDE68A", // yellow
    href: "#",
  },
];

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Colored quadrants */}
     <div className="absolute inset-0 flex" aria-hidden="true">
        <div className="flex-1" style={{ backgroundColor: "#d4e4fc" }} />
        <div className="flex-1" style={{ backgroundColor: "#fce9a8" }} />
        <div className="flex-1" style={{ backgroundColor: "#c8e6c9" }} />
        <div className="flex-1" style={{ backgroundColor: "#f8bbd0" }} />
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(100, 140, 200, 0.25) 1px, transparent 1px),
            linear-gradient(90deg, rgba(100, 140, 200, 0.25) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}
function SpeakerIllustration() {
  return (
<svg width="400" height="801" viewBox="0 0 300 871" fill="none" xmlns="http://www.w3.org/2000/svg">
  <image
href="https://res.cloudinary.com/davfze0e8/image/upload/v1772085874/1_ljubau.png"    x="0" y="-170"
    width="330" height="671"
    preserveAspectRatio="xMidYMid meet"
  />
</svg>
  );
}
function CollabIllustration() {
  return (
   <svg width="400" height="801" viewBox="0 0 300 871" fill="none" xmlns="http://www.w3.org/2000/svg">
  <image
href="https://res.cloudinary.com/davfze0e8/image/upload/v1772086011/19_suoqdc.png"   x="-100" y="-130"
      width="330" height="671"
    preserveAspectRatio="xMidYMid meet"
  />
</svg>
  );
}

// ─── Single event card ────────────────────────────────────────────────────────
type EventCardProps = {
  event: EventItem;
  featured?: boolean;
};

function EventCard({ event, featured = false }: EventCardProps) {
  const handleImageError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    const img = e.currentTarget;
    img.style.display = "none";
    if (img.parentElement) {
      img.parentElement.style.background = "linear-gradient(135deg,#e0e7ff,#f0fdf4)";
    }
  };

  return (
    <div
      className={`
        relative bg-white rounded-2xl overflow-hidden shadow-md p-0 border-2
        flex flex-col 
        ${featured ? "mt-[-8] z-10" : "mt-50 z-0"}
      `}
      style={{ minWidth: 0, padding:8, borderRadius:10 }}
    >
      {/* image */}
      <div className={`relative w-full ${featured ? "h-60" : "h-56"} overflow-hidden`}>
        <Image
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover p-1 rounded-2xl"
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          onError={handleImageError}
        />
      </div>

      {/* content */}
      <div className="p-4 flex flex-col gap-4">
        <h3 className="font-black text-xl text-gray-900 tracking-tight">{event.title}</h3>
        <a
          href={event.href}
          className="self-start px-5 py-2 rounded-full text-sm font-semibold text-gray-800 transition-transform hover:scale-105 active:scale-95"
          style={{ background: event.buttonColor }}
        >
          Explore more
        </a>
      </div>
    </div>
  );
}

// ─── Main section ─────────────────────────────────────────────────────────────
export default function PastEvents() {
  return (
    <section className="relative w-full p-0" style={{ fontFamily: "'Geist', sans-serif" }}>
      <GridBackground />

      <div className="relative z-10  max-w-6xl mx-auto">
        {/* heading */}
        <h2 className="text-center text-5xl font-black text-gray-900 mb-4">
          Past <span className="text-blue-500">Events</span>
        </h2>

        {/* sub-heading */}
        <p className="text-center text-gray-700 underline underline-offset-2 max-w-2xl mx-auto mb-16 leading-relaxed">
          Take a look at the success stories from our previous gatherings. Hundreds of students,
          thousands of lines of code, and endless innovation.
        </p>

        {/* cards row with illustrations */}
        <div className="relative  grid grid-cols-3 gap-10 items-start">
          {/* left decoration */}
          <div className="absolute -left-35 -top-30  hidden lg:block">
            <SpeakerIllustration />
          </div>

          {/* right decoration */}
          <div className="absolute -right-30 -top-30 hidden lg:block">
            <CollabIllustration />
          </div>

          {events.map((event) => (
            <EventCard key={event.id} event={event} featured={event.featured} />
          ))}
        </div>

        {/* browse gallery */}
        <div className="text-center mt-10">
          <a
            href="https://www.mlsamiet.site/gallery"
            className="inline-flex items-center gap-1 text-gray-700 font-semibold underline underline-offset-4 hover:text-blue-600 transition-colors"
          >
            Browse Full Gallery
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
