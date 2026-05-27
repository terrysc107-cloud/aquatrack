"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Wrench, Scale, GitMerge, Award, Phone } from "lucide-react"

const differentiators = [
  {
    number: "01",
    title: "Instrument-Level Understanding",
    description:
      "We know how water quality directly damages surgical instruments — spotting, pitting, staining, accelerated wear. We connect test results to instrument and patient outcomes.",
    icon: Wrench,
  },
  {
    number: "02",
    title: "Regulatory Fluency",
    description:
      "We speak AAMI ST108, TIR34, ST79, Joint Commission, and CMS simultaneously. We know what surveyors look for and how your Water Quality Management Plan gets scrutinized during inspection.",
    icon: Scale,
  },
  {
    number: "03",
    title: "Process Integration",
    description:
      "We evaluate water in the context of your entire reprocessing cycle — decontamination through sterile storage. No water company walks your SPD and understands the complete workflow.",
    icon: GitMerge,
  },
  {
    number: "04",
    title: "Certified SPD & Water Safety Leadership",
    description:
      "CRCST, CHL, CIS, CER, and ASSE 12080 certified — the Professional Qualifications Standard for Legionella Water Safety and Management Personnel. Certified to develop and manage Water Quality Management Plans. Proven sterile processing experience building, renovating, and operating SPD departments. This is not theoretical knowledge.",
    icon: Award,
  },
  {
    number: "05",
    title: "Direct Access — No Account Managers",
    description:
      "You call the expert, not a sales rep. Every result, every question, every exceedance — a qualified SPD professional responds directly.",
    icon: Phone,
  },
]

export function WhyClarixSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="approach" className="bg-[#050505]" style={{ paddingTop: '57px', paddingBottom: '51px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
          <div>
            <span className="text-[#4A90E2] text-xs tracking-[0.5em] uppercase block mb-6">
              Our Approach
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F5F5F5] leading-tight mb-6">
              Why an SPD Professional?
            </h2>
            <p className="text-[#8A8A8A] text-lg">
              Not a water treatment company. Clinical expertise meets compliance intelligence.
            </p>
          </div>
          <div className="relative h-[250px] lg:h-[320px] overflow-hidden rounded-sm">
            <Image
              src="/water-sample.jpg"
              alt="Healthcare professional examining water sample in sterile processing department"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
          </div>
        </div>

        {/* Differentiators List */}
        <div className="space-y-0">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon
            return (
              <div
                key={item.number}
                className={`group border-t border-[#1F1F1F] transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="py-6 lg:py-8 flex flex-col lg:flex-row lg:items-start gap-4 lg:gap-10">
                  <span className="text-[#3D3D3D] text-sm font-mono shrink-0 lg:w-12">
                    {item.number}
                  </span>
                  <div className="flex items-center gap-4 lg:w-72 shrink-0">
                    <div className="w-10 h-10 border border-[#1F1F1F] flex items-center justify-center group-hover:border-[#4A90E2] transition-colors duration-300">
                      <IconComponent className="w-5 h-5 text-[#4A90E2]" />
                    </div>
                    <h3 className="text-lg lg:text-xl text-[#F5F5F5] font-light group-hover:text-[#4A90E2] transition-colors duration-300">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[#8A8A8A] leading-relaxed flex-1">{item.description}</p>
                </div>
              </div>
            )
          })}
          <div className="border-t border-[#1F1F1F]" />
        </div>
      </div>
    </section>
  )
}
