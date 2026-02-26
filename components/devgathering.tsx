'use client';

import React from 'react';
import Image from 'next/image';

export default function DevGathering() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-white font-sans text-gray-800">

      {/* Background Columns */}
      <div className="fixed inset-0 flex z-0">
        <div className="flex-1 bg-[#eff6ff]"></div>
        <div className="flex-1 bg-[#fefce8]"></div>
        <div className="flex-1 bg-[#f0fdf4]"></div>
        <div className="flex-1 bg-[#fff1f2]"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div
        className="fixed inset-0 z-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, #cbd5e1 1px, transparent 1px),
            linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto py-16 px-6">

        <div className="bg-white/95 backdrop-blur-md rounded-[3rem] p-10 sm:p-16 shadow-sm border border-white">

          {/* Title */}
          <h1 className="text-center text-4xl sm:text-5xl font-extrabold mb-8">
            What is <span className="text-blue-600">DevGathering?</span>
          </h1>

          {/* Description Box */}
          <div className="max-w-3xl mx-auto bg-pink-100 border-2 border-dashed border-pink-400 rounded-xl p-4 text-center mb-16">
            <p className="text-gray-700 text-sm sm:text-base">
              A college hackathon where ideas turn into real solutions through creativity, teamwork, and innovation.
            </p>
          </div>
          {/* Image beside pink box
            <div className="relative w-48 h-48 flex-shrink-0">
              <Image
                src="/14.png"  // 🔁 replace with correct image name
                alt="Announcement"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div> */}


          {/* Cards Section */}
          <div className="grid md:grid-cols-3 gap-10">

            {/* Card 1 */}
            
            <div className="border-2 border-dashed border-blue-400 rounded-2xl p-8 bg-blue-50 text-center hover:shadow-md transition min-h-[280px] flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-4">Community Focused</h3>
              <p className="text-gray-600 text-sm mb-6">
                Meet peers from across the country and build lasting professional connections.
              </p>

              <div className="relative w-full h-58">
                <Image
                  src="/22.png"
                  alt="Community"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Card 2 */}
            <div className="border-2 border-dashed border-yellow-400 rounded-2xl p-8 bg-yellow-50 text-center hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-4">Fast-Paced Innovation</h3>
              <p className="text-gray-600 text-sm mb-6">
                24 hours of intense brainstorming, coding, and prototyping with expert mentors.
              </p>

              <div className="relative w-full h-58">
                <Image
                  src="/10.png"
                  alt="Innovation"
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>

            {/* Card 3 */}
            <div className="border-2 border-dashed border-green-400 rounded-2xl p-8 bg-green-50 text-center hover:shadow-md transition">
              <h3 className="text-xl font-bold mb-4">Impact</h3>
              <p className="text-gray-600 text-sm mb-6">
                Showcase your talent, earn certificates, win prizes, and add valuable experience to your portfolio.
              </p>

              <div className="flex justify-center items-center gap-4 mt-4">

  {/* First Image */}
  <div className="relative w-56 h-56 sm:w-64 sm:h-64">
    <Image
      src="/7.png"  
      alt="Impact 1"
      fill
      style={{ objectFit: 'contain' }}
    />
  </div>

  {/* Second Image */}
  <div className="relative w-56 h-56 sm:w-64 sm:h-64">
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