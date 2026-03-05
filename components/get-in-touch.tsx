import {
  HiOutlineEnvelope,
  HiOutlinePhone,
  HiOutlineMapPin
} from "react-icons/hi2";
import { Inter } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const roboto = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const contactInfo = [
  {
    icon: HiOutlineEnvelope,
    label: "Email us",
    value: "mlsa.community@miet.ac.in",
  },
  {
    icon: HiOutlinePhone,
    label: "Call us",
    value: "+911234567899",
  },
  {
    icon: HiOutlineMapPin,
    label: "Visit us",
    value: "MIET, Meerut",
  },
];

const GetInTouch = () => {
  return (
    <section className={`${inter.className} relative min-h-screen overflow-hidden`}>

      {/* Background Stripes */}
      <div className="absolute inset-0 flex" aria-hidden="true">
        <div className="flex-1 bg-[#d4e4fc]" />
        <div className="flex-1 bg-[#fce9a8]" />
        <div className="flex-1 bg-[#c8e6c9]" />
        <div className="flex-1 bg-[#f8bbd0]" />
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between px-4 sm:px-6 md:px-10 lg:px-16 py-10">

        <div className="max-w-7xl mx-auto w-full flex-1">

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div className="space-y-10">

              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#222]">
                  Get in
                  <span className="text-[#2439F5] ml-3">Touch</span>
                </h1>

                <p className={`${roboto.className} mt-6 text-black leading-relaxed max-w-md text-sm md:text-base`}>
                  Have questions about registration, sponsorship, or volunteering?
                  Our team is here to help you. Reach out to us through any of the
                  channels below.
                </p>
              </div>

              {/* Contact Items */}
              <div className="space-y-6">

                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-4">

                    <div className="w-10 h-10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-black" />
                    </div>

                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">
                        {item.label}
                      </p>

                      <p className="font-medium text-black text-base">
                        {item.value}
                      </p>
                    </div>

                  </div>
                ))}

              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col items-center w-full">

              {/* Images */}
              <div className="flex items-end justify-center gap-6 mb-2">

                <img
                  src="/24.png"
                  className="w-28 sm:w-36 md:w-44 lg:w-52 scale-x-[-1]"
                  style={{ mixBlendMode: "multiply" }}
                />

                <img
                  src="/24.png"
                  className="w-28 sm:w-36 md:w-44 lg:w-52"
                  style={{ mixBlendMode: "multiply" }}
                />

              </div>

              {/* Card */}
              <div className="w-full max-w-lg h-32 md:h-80 rounded-2xl bg-white/70 backdrop-blur-lg shadow-sm relative overflow-hidden">

                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                  }}
                />

              </div>

            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="max-w-7xl mx-auto w-full mt-10 flex flex-col md:flex-row items-center justify-between gap-6">

          <img
            src="/Mlsa.ico"
            className="w-20 md:w-32 object-contain"
          />

          <img
            src="/Black_and_White_Yellow_Green_Basic_Concept_Mapping_Brainstorm_Presentation_20260222_190506_0000-removebg-preview (1).png"
            className="w-52 md:w-72"
          />

        </div>
      </div>
    </section>
  );
};

export default GetInTouch;