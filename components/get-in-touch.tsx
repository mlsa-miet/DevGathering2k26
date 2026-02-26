import { 
  HiOutlineEnvelope, 
  HiOutlinePhone, 
  HiOutlineMapPin 
} from "react-icons/hi2";
import { Inter } from 'next/font/google';
import { Roboto_Condensed } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
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
      {/* Vertical color stripes background */}
      <div className="absolute inset-0 flex" aria-hidden="true">
        <div className="flex-1" style={{ backgroundColor: "#d4e4fc" }} />
        <div className="flex-1" style={{ backgroundColor: "#fce9a8" }} />
        <div className="flex-1" style={{ backgroundColor: "#c8e6c9" }} />
        <div className="flex-1" style={{ backgroundColor: "#f8bbd0" }} />
      </div>

      {/* Grid overlay on stripes - higher contrast */}
      <div
        className="absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-between p-6 md:p-12">
        <div className="w-full max-w-7xl mx-auto flex-1">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left - Contact Info */}
            <div className="space-y-10 pt-10 md:-ml-40 lg:-ml-50">
              <div>
                <h1
                  className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
                  style={{
                    color: '#222',
                  }}
                >
                  Get in <span style={{ color: '#2439F5', marginLeft: '0.6rem' }}>Touch</span>
                </h1>
                <p className={`${roboto.className} mt-15 text-black leading-relaxed max-w-md text-base md:text-lg`}>
                  Have questions about registration, sponsorship, or volunteering?
                  <br />Our team is here to help you. Reach out to us through any of the
                  channels below.
                </p>
              </div>

              <div className="space-y-5 mt-20">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-5">
                    <div className="w-11 h-11 flex items-center justify-center shrink-0">
                      <item.icon className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm text-gray-500 uppercase tracking-wider font-semibold">
                        {item.label}
                      </p>
                      <p className="font-medium text-black text-base md:text-lg">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Illustrations + Card */}
            <div className="flex flex-col items-center">
              <div className="flex items-end justify-center gap-10 -mb-4 relative z-10">
                {/* Images */}
                  <img
                    src="/24.png"
                    alt="Person working on laptop"
                    className="w-36 md:w-48 lg:w-56 scale-x-[-1]"
                    style={{ mixBlendMode: "multiply" }}
                    loading="lazy"
                  />
                  <img
                    src="/24.png"
                    alt="Person working on laptop"
                    className="w-36 md:w-48 lg:w-56"
                    style={{ mixBlendMode: "multiply" }}
                    loading="lazy"
                  />
              </div>

              {/* Horizontal white card box */}
              <div className="w-[120%] h-35 md:h-100 rounded-2xl bg-white/70 backdrop-blur-lg shadow-sm relative overflow-hidden" style={{ marginLeft: '15%' }}>
                {/* Grid overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px)",
                    backgroundSize: "24px 24px",
                    zIndex: 1,
                    opacity: 0.2,
                  }}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full max-w-7xl mx-auto mt-12 flex items-end justify-between">
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
            </div>
            <img
              src="/Mlsa.ico"
              alt="MLSA MIET Logo"
              className="w-20 md:w-35 object-contain transform -translate-x-50"
              loading="lazy"
            />
          </div>
          <div>
            {/* sticker */}
            <img
              src="/Black_and_White_Yellow_Green_Basic_Concept_Mapping_Brainstorm_Presentation_20260222_190506_0000-removebg-preview (1).png"
              alt="MLSA MIET Presents DevGathering 2K26 Hackathon"
              className="w-64 md:w-80"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
