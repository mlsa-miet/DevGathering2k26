'use client';

import React from 'react';
import Image from 'next/image';

// Data extracted exactly from your screenshots
const events = [
    {
        time: '8:00am-10:00am',
        title: 'Kick-off & Networking',
        description: 'Opening ceremony, team formation, and getting started with the platforms.',
        theme: 'blue',
        imageSrc: '/19.png', // Replace with your actual image path
    },
    {
        time: '10:00am-2:00pm',
        title: 'Hacking Begins',
        description: 'The clock starts ticking! Dive deep into your projects and start building.',
        theme: 'yellow',
        imageSrc: '/20.png',
    },
    {
        time: '2:00pm-3:30pm',
        title: 'Lunch Break',
        description: 'A quick break with snacks and some fun to recharge.',
        theme: 'purple',
        imageSrc: '/2.png',
    },
    {
        time: '3:30pm-5:00pm',
        title: 'Mentorship Sessions',
        description: 'Get feedback from industry experts and refine your project roadmap.',
        theme: 'red',
        imageSrc: '/22.png',
    },
    {
        time: '5:00pm-5:30pm',
        title: 'Top teams announcement',
        description: 'Announcement of the top 25 teams to progress to next round.',
        theme: 'green',
        imageSrc: '/1.png',
    },
    {
        time: '5:30pm-8:30pm',
        title: 'Next round',
        description: 'Beginning of next round between the top 25 teams.',
        theme: 'blue',
        imageSrc: '/16.png',
    },
    {
        time: '8:30pm-9:30pm',
        title: 'Mentoring round 2',
        description: 'Get mentorship over some snacks to charge up.',
        theme: 'purple',
        imageSrc: '/18.png',
    },
    {
        time: '9:30pm-11:00pm',
        title: 'Night hacking',
        description: 'Final push begins.',
        theme: 'green',
        imageSrc: '/13.png',
    },
    {
        time: '11:00pm-1:00am',
        title: 'Final Submissions',
        description: 'Upload your code and prepare your pitch for the judging rounds.',
        theme: 'red',
        imageSrc: '/19.png',
    },
    {
        time: '1:00am-2:00pm',
        title: 'Awards Ceremony',
        description: 'Demos, winner announcements, and the grand closing of DevGathering.',
        theme: 'yellow',
        imageSrc: '/10.png',
    }
];

// Tailwind color mappings tailored to the design
const colorMap = {
    blue: { pill: 'bg-[#dbeafe]', border: 'border-[#60a5fa]' },
    yellow: { pill: 'bg-[#fef08a]', border: 'border-[#fcd34d]' },
    purple: { pill: 'bg-[#e0e7ff]', border: 'border-[#a5b4fc]' },
    red: { pill: 'bg-[#fce7f3]', border: 'border-[#f472b6]' },
    green: { pill: 'bg-[#dcfce7]', border: 'border-[#4ade80]' },
};

export default function EventTimeline() {
    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-white font-sans text-gray-800">

            {/* Background Columns */}
            <div className="fixed inset-0 flex z-0">
                <div className="flex-1 bg-[#eff6ff]"></div> {/* Light Blue */}
                <div className="flex-1 bg-[#fefce8]"></div> {/* Light Yellow */}
                <div className="flex-1 bg-[#f0fdf4]"></div> {/* Light Green */}
                <div className="flex-1 bg-[#fff1f2]"></div> {/* Light Pink */}
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

            {/* Main Content Container */}
            <div className="relative z-10 max-w-5xl mx-auto py-16 px-4 sm:px-8">

                {/* White translucent overlay mimicking the card */}
                <div className="bg-white/95 backdrop-blur-md rounded-[3rem] p-8 sm:p-12 shadow-sm border border-white">

                    {/* Header */}
                    <h1 className="text-center text-4xl sm:text-5xl font-extrabold mb-16 tracking-tight">
                        Event <span className="text-blue-600">Timeline</span>
                    </h1>

                    {/* Timeline Wrapper */}
                    <div className="relative">
                        {/* Center Vertical Line */}
                        <div className="absolute left-[30%] top-8 bottom-8 w-0.5 bg-black -ml-[1px]"></div>

                        {/* Event Items */}
                        {events.map((event, index) => {
                            const theme = colorMap[event.theme as keyof typeof colorMap];


                            return (
                                <div key={index} className="flex items-center w-full mb-10 relative">

                                    {/* Left Side: Time Pill */}
                                    <div className="w-[30%] pr-6 sm:pr-8 flex justify-end">
                                        <div className={`${theme.pill} px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap shadow-sm`}>
                                            {event.time}
                                        </div>
                                    </div>

                                    {/* Center: Node */}
                                    <div
                                        className={`absolute left-[30%] w-5 h-5 -ml-[10px] rounded-full border-[3px] bg-white z-10 ${theme.border}`}
                                    ></div>

                                    {/* Right Side: Content Card */}
                                    <div className="w-[70%] pl-6 sm:pl-8">
                                        <div className={`border-2 rounded-2xl p-6 bg-white flex justify-between items-center ${theme.border} hover:shadow-md transition-shadow duration-200`}>

                                            {/* Text Content */}
                                            <div className="pr-4 max-w-md">
                                                <h3 className="text-lg font-bold mb-2 text-gray-900">{event.title}</h3>
                                                <p className="text-gray-500 text-sm leading-relaxed">
                                                    {event.description}
                                                </p>
                                            </div>

                                            {/* Dynamic Next.js Image */}
                                            <div className="hidden sm:flex flex-shrink-0 relative w-40 h-30 ml-4 transform scale-[1.35] lg:scale-[1.6] origin-right lg:origin-right pointer-events-none drop-shadow-sm">
                                                {event.imageSrc ? (
                                                    <Image
                                                        src={event.imageSrc}
                                                        alt={event.title}
                                                        fill
                                                        style={{ objectFit: 'contain' }}
                                                        sizes="250px"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-gray-50 rounded-lg border border-dashed border-gray-200 flex items-center justify-center text-xs text-gray-400">
                                                        No Image
                                                    </div>
                                                )}
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}