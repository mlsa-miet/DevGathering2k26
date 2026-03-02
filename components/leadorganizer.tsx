import React from 'react';
// import Image from 'next/image';

// Define the shape of your organizer data
interface Organizer {
  role: string;
  imageSrc: string | null;
}

// Data for the organizers, typed with the interface above.
const organizers: Organizer[] = [
  { role: 'Lead', imageSrc: null },
  { role: 'Lead', imageSrc: null },
  { role: 'Head of Operations', imageSrc: null },
  { role: 'Design Head', imageSrc: null },
  { role: 'Visuals Head', imageSrc: null },
  { role: 'Technical Head', imageSrc: null },
  { role: 'Outreach and PR Head', imageSrc: null },
  { role: 'Content Creation Head', imageSrc: null },
];

export default function LeadOrganizers() {
  return (
    <div className="relative w-full py-16 px-4 sm:px-8 font-sans text-gray-800">
      
      {/* Background Pattern (Matches the Timeline component) */}
      <div className="fixed inset-0 flex z-[-1]">
        <div className="flex-1 bg-[#eff6ff] border-r border-dashed border-blue-200"></div>
        <div className="flex-1 bg-[#fefce8] border-r border-dashed border-yellow-200"></div>
        <div className="flex-1 bg-[#f0fdf4] border-r border-dashed border-green-200"></div>
        <div className="flex-1 bg-[#fff1f2]"></div>
      </div>
      <div 
        className="fixed inset-0 z-[-1] opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(to right, #cbd5e1 1px, transparent 1px),
            linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)
          `,
          backgroundSize: '24px 24px'
        }}
      ></div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto">
        
        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold tracking-tight inline-flex items-center space-x-3">
            <span className="text-black">Lead</span>
            <span className="text-blue-600">Organizers</span>
          </h2>
        </div>

        {/* Window-style Card Container */}
        <div className="bg-white rounded-t-[2rem] rounded-b-[2rem] shadow-xl border-2 border-gray-800 overflow-hidden">
          
          {/* Window Header Bar */}
          <div className="bg-[#a7c7e7] p-4 flex justify-end items-center border-b-2 border-gray-800 relative overflow-hidden h-14">
             {/* Subtle cross pattern on the header bar */}
            <div 
              className="absolute inset-0 opacity-[0.15]" 
              style={{ 
                backgroundImage: `
                  linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), 
                  linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000)
                `, 
                backgroundSize: '40px 40px',
                backgroundPosition: '0 0, 20px 20px'
              }}
            ></div>
            
            {/* Window Controls (Decorative) */}
            <div className="flex space-x-4 z-10 mr-2 items-center">
              {/* Minimize */}
              <div className="w-6 h-6 border-2 border-gray-800 flex items-center justify-center bg-transparent">
                <div className="w-3 h-0.5 bg-gray-800"></div>
              </div>
              {/* Maximize */}
              <div className="w-6 h-6 border-2 border-gray-800 flex items-center justify-center bg-transparent">
                 <div className="w-3 h-3 border-2 border-gray-800"></div>
              </div>
              {/* Close */}
              <div className="w-6 h-6 border-2 border-gray-800 flex items-center justify-center bg-transparent relative">
                <div className="w-4 h-0.5 bg-gray-800 rotate-45 absolute"></div>
                <div className="w-4 h-0.5 bg-gray-800 -rotate-45 absolute"></div>
              </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-8 sm:p-12 bg-[#fafafa]">
            <p className="text-center text-gray-500 mb-12 text-sm sm:text-base font-medium">
              Meet the team behind the vision.
            </p>

            {/* Organizers Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
              {organizers.map((organizer, index) => (
                <div key={index} className="flex flex-col h-full">
                  
                  {/* Image Placeholder Card */}
                  <div className="bg-white border-[1.5px] border-gray-300 rounded-xl h-64 w-full flex flex-col items-center justify-end mb-4 shadow-sm relative overflow-hidden group hover:border-blue-400 transition-colors duration-300">
                    
                    {/* Uncomment below when you are ready to use Next.js Image */}
                    {/* {organizer.imageSrc ? (
                      <Image 
                        src={organizer.imageSrc} 
                        alt={organizer.role} 
                        fill 
                        style={{ objectFit: 'cover' }} 
                      />
                    ) : null} 
                    */}

                    {/* Role Title placed inside the bottom of the card as shown in your image */}
                    <div className="w-full pb-4 z-10 relative flex justify-center">
                      <h3 className="text-center text-blue-600 font-medium text-sm">
                        {organizer.role}
                      </h3>
                    </div>
                  </div>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}