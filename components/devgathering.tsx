'use client';

import React from 'react';
import Image from 'next/image';

export default function DevGathering() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden font-sans text-gray-800">

      {/* Background Columns */}
      <div className="fixed inset-0 flex z-0">
        <div className="flex-1 bg-[#eff6ff]" />
        <div className="flex-1 bg-[#fef9c3]" />
        <div className="flex-1 bg-[#dcfce7]" />
        <div className="flex-1 bg-[#ffe4e6]" />
      </div>

      {/* Grid Overlay */}
      <div
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, #94a3b8 1px, transparent 1px),
            linear-gradient(to bottom, #94a3b8 1px, transparent 1px)
          `,
          backgroundSize: '28px 28px',
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto py-20 px-6">

        {/* Outer Container */}
        <div className="bg-white/95 backdrop-blur-md rounded-[2.5rem] p-10 sm:p-16 border-2 border-black">

        {/* ================= HEADING SECTION ================= */}
<div className="relative flex flex-col items-center text-center mb-16">

  {/* Title */}
  <h1 className="text-4xl sm:text-5xl font-extrabold mb-8">
    What is DevGathering?
  </h1>

  {/* Wrapper */}
  <div className="relative flex flex-col items-center">

    {/* Megaphone Image */}
    <div className="
      relative
      mb-6
      md:absolute md:-left-44 md:top-1/2 md:-translate-y-1/2
      w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40
    ">
      <Image
        src="/14.png"
        alt="Announcement"
        fill
        style={{ objectFit: 'contain' }}
      />
    </div>

    {/* Pink Description Box (Always Centered) */}
    <div className="max-w-2xl bg-pink-200 border-2 border-dashed border-black rounded-2xl px-8 py-6">
      <p className="text-gray-800 text-sm sm:text-base">
        A college hackathon where ideas turn into real solutions through creativity, teamwork, and innovation.
      </p>
    </div>

  </div>

</div>
          
          {/* ================= CARDS SECTION ================= */}
          <div className="grid md:grid-cols-3 gap-12">

            {/* Card 1 */}
            <div className="border-2 border-dashed border-black rounded-3xl p-6 bg-blue-100 text-center aspect-square flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Community Focused
                </h3>
                <p className="text-gray-600 text-sm">
                  Meet peers from across the country and build lasting professional connections.
                </p>
              </div>

              <div className="relative w-full h-40 mt-4">
                <Image
                  src="/22.png"
                  alt="Community"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="border-2 border-dashed border-black rounded-3xl p-6 bg-yellow-100 text-center aspect-square flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Fast-Paced Innovation
                </h3>
                <p className="text-gray-600 text-sm">
                  24 hours of intense brainstorming, coding, and prototyping with expert mentors.
                </p>
              </div>

              <div className="relative w-full h-40 mt-4">
                <Image
                  src="/10.png"
                  alt="Innovation"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="border-2 border-dashed border-black rounded-3xl p-6 bg-green-100 text-center aspect-square flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-3">
                  Impact
                </h3>
                <p className="text-gray-600 text-sm">
                  Showcase your talent, earn certificates, win prizes, and add valuable experience to your portfolio.
                </p>
              </div>

              <div className="flex justify-center items-end gap-4 mt-4">
                <div className="relative w-28 h-36 sm:w-32 sm:h-40">
                  <Image
                    src="/7.png"
                    alt="Impact 1"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>

                <div className="relative w-28 h-36 sm:w-32 sm:h-40">
                  <Image
                    src="/2.png"
                    alt="Impact 2"
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}