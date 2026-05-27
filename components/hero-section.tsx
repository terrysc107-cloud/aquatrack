"use client"

import { ArrowDown } from "lucide-react"

const certifications = ["CRCST", "CHL", "CIS", "CER", "ASSE 12080"]

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between bg-[#050505] overflow-hidden">
      {/* Hero background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-[#050505]/40 to-[#050505]" />
        <div className="absolute inset-0 bg-[#1A3080]/10" />
      </div>

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#4A90E2 1px, transparent 1px), linear-gradient(90deg, #4A90E2 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-16">
        <div className="mb-8">
          <span className="text-[#4A90E2] text-xs tracking-[0.4em] uppercase">
            Water Quality Intelligence
          </span>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-[#F5F5F5] leading-[0.95] tracking-tight max-w-5xl">
          Built by SPD
          <br />
          <span className="italic font-light">Leaders</span>
        </h1>

        <div className="mt-8 max-w-2xl">
          <p className="text-[#737373] text-lg lg:text-xl leading-relaxed">
            ANSI/AAMI ST108:2023 compliant water quality monitoring and validation — designed by an ASSE 12080 certified Legionella Water Safety and Management professional with proven hospital SPD leadership experience.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start gap-6">
          <a
            href="#contact"
            className="group inline-flex items-center gap-4 text-[#F5F5F5] hover:text-[#4A90E2] transition-colors duration-300"
          >
            <span className="w-12 h-12 rounded-full border border-[#F5F5F5] group-hover:border-[#4A90E2] flex items-center justify-center transition-colors duration-300">
              <ArrowDown className="w-5 h-5 rotate-[225deg]" />
            </span>
            <span className="text-sm tracking-[0.15em] uppercase">Schedule a Call</span>
          </a>
        </div>

        <div className="mt-6">
          <p className="text-[#3D3D3D] text-xs tracking-widest uppercase">
            ASSE 12808 Water Management Plan Specialist — In Progress
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6">
          <span className="text-[#3D3D3D] text-xs tracking-wider uppercase">Certifications</span>
          <div className="h-px w-16 bg-[#1F1F1F]" />
          <div className="flex items-center gap-4 flex-wrap">
            {certifications.map((cert) => (
              <span key={cert} className="text-[#8A8A8A] text-xs tracking-widest">
                {cert}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-16 h-px bg-gradient-to-r from-transparent via-[#1F1F1F] to-transparent" />
      </div>

      {/* AAMI Badge */}
      <div className="absolute bottom-20 right-6 lg:right-12 hidden lg:block z-10">
        <div className="text-right">
          <span className="text-[#3D3D3D] text-[10px] tracking-[0.3em] uppercase block mb-1">Compliant</span>
          <span className="text-[#4A90E2] text-xs tracking-[0.2em]">ANSI/AAMI ST108:2023</span>
        </div>
      </div>
    </section>
  )
}
