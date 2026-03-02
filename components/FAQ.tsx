"use client";

import { useState } from "react";

type Faq = {
  id: number;
  question: string;
  answer: string;
};

// ─── FAQ Data ─────────────────────────────────────────────────────────────────
const faqs: Faq[] = [
  {
    id: 1,
    question: "How do I register, and what if I make a mistake in application?",
    answer:
      "You must submit an application to participate. If you submit incorrect details, you need to re-register using a new ID. For cancellations, email your request to mlsa.community@miet.ac.in with the reason for withdrawal.",
  },
  {
    id: 2,
    question: "Who can participate and what are the team requirements?",
    answer:
      "Participation is open to students from any college/university in India. Teams must have 2 to 4 members, and you must form your team before registration. Cross-college teams are allowed, and a college can have multiple teams.",
  },
  {
    id: 3,
    question: "What is the event format, and how will projects be evaluated?",
    answer:
      "You must select your own idea within the event's themes. The hackathon follows a structured format: mid-submission in PPT/PDF format and final presentation to judges. Evaluation is based on innovation, technical feasibility, impact, and presentation.",
  },
  {
    id: 4,
    question: "What are the rules regarding coding, tech and AI usage?",
    answer:
      "There are no restrictions on programming languages, technology stacks, or pre-built libraries. AI tools can be used, but they must be explicitly mentioned in your submission and presentation.",
  },
  {
    id: 5,
    question: "Do I need to be physically present at the venue?",
    answer:
      "Yes, all participants must be onsite at MIET, Meerut, on the event day. The hackathon is free to join, and a high-speed internet connection will be provided. You can also bring your own internet device.",
  },
  {
    id: 6,
    question: "Can I change my team or send replacement if I cant attend?",
    answer:
      "Yes, replacements are allowed if the new participant meets the eligibility criteria and you inform the organizers via email misa.community@miet.ac.in before the event.",
  },
  {
    id: 7,
    question: "Who owns the Intellectual Property (IP) of the projects?",
    answer:
      "The developers retain ownership of their work unless a problem statement specifies otherwise. However, all submitted code must be open-source for evaluation.",
  },
  {
    id: 8,
    question: "Where can I find event details, and contact for support?",
    answer:
      "Event details are available on the official website devgathering2k25.xyz, and updates will be shared via email. For any queries, contact misa.community@miet.ac.in. Rest areas will be available for participants, but personal belongings are your responsibility.",
  },
];

// ─── Grid Background (same as PastEvents) ─────────────────────────────────────
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

// ─── FAQ Accordion Item ────────────────────────────────────────────────────────
function FaqItem({ faq }: { faq: Faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-shadow hover:shadow-md"
      style={{ fontFamily: "inherit" }}
    >
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-bold text-gray-900 text-[15px] leading-snug" style={{ fontFamily: "'Courier New', monospace" }}>
          {faq.question}
        </span>
        <span
          className="flex-shrink-0 w-7 h-8 rounded-full border-2 border-gray-400 flex items-center justify-center transition-transform"
          style={{ transform: open ? "rotate(0deg)" : "rotate(0deg)" }}
        >
          {open ? (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <line x1="2" y1="6" x2="10" y2="6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <line x1="2" y1="6" x2="10" y2="6" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
              <line x1="6" y1="2" x2="6" y2="10" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </span>
      </button>

      {open && (
        <div className="px-9 pb-5 ">
          <div className="border-t border-gray-100 pt-4">
            <p className="font-semibold text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "'Courier New', monospace" }}>
              {faq.answer}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main FAQ Section ──────────────────────────────────────────────────────────
export default function FAQ() {
  const left = faqs.filter((_, i) => i % 2 === 0);
  const right = faqs.filter((_, i) => i % 2 === 1);

  return (
    <section
      className="relative w-full py-10 px-10 overflow-hidden"
      style={{ fontFamily: "'Geist', sans-serif" }}
    >
      <GridBackground />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* heading row with illustration */}
        <div className="flex items-start justify-center gap-4 mb-3">
       
          <div className="text-center">
            <h2 className="text-5xl font-black text-gray-900 leading-tight">
              Frequently Asked{" "}
              <span className="text-blue-500">Questions</span>
            </h2>
            <p className="text-gray-700 underline underline-offset-2 mt-3 text-base">
              Got questions? We've got answers.
            </p>
          </div>
        </div>

        {/* outer card */}
        <div
          className="mt-10 rounded-3xl border-2 border-gray-800 bg-black/10 backdrop-blur-sm p-6 md:p-8"
        >
          {/* two-column FAQ grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 rounded-b-2xl">
            {/* left column */}
            <div className="flex flex-col gap-4">
              {left.map((faq) => (
                <FaqItem key={faq.id} faq={faq} />
              ))}
            </div>
            {/* right column */}
            <div className="flex flex-col gap-4">
              {right.map((faq) => (
                <FaqItem key={faq.id} faq={faq} />
              ))}
            </div>
          </div>

          {/* "Can't find your answer?" footer card */}
          <div className="mt-8 flex items-center justify-center">
            <div className="relative bg-white rounded-2xl shadow-sm border border-gray-500 px-10 py-6 flex flex-col items-center gap-3 max-w-sm w-full">
              {/* illustration overlapping top-left */}
          
              <p className="font-black text-gray-900 text-lg">Can't find your answer?</p>
              <p className="text-gray-700 font-semibold text-sm text-center" style={{ fontFamily: "'Courier New', monospace" }}>
                Get in touch with us—we'll get back to you quickly.
              </p>
              <a
                href="mailto:misa.community@miet.ac.in"
                className="mt-1 px-8 py-2.5 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm hover:bg-blue-200 transition-colors"
              >
                Contact us!
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}             