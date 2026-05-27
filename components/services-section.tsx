"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Settings, FileText, FlaskConical, Search } from "lucide-react"

const services = [
  {
    title: "Managed Programs",
    description:
      "Complete water quality management from Performance Qualification through ongoing routine monitoring. Full Water Quality Management Plan oversight with quarterly consultations.",
    includes: [
      "Performance Qualification",
      "Routine Monitoring",
      "Water Quality Management Plan Management",
      "Results Interpretation",
    ],
    icon: Settings,
  },
  {
    title: "Water Quality Management Plan Development",
    description:
      "Site survey, water system mapping, and complete ST108-compliant Water Quality Management Plan development tailored to your facility.",
    includes: ["Site Assessment", "System Mapping", "Plan Documentation", "Implementation Support"],
    icon: FileText,
  },
  {
    title: "Performance Qualification",
    description:
      "Comprehensive testing across Critical Water, Utility Cold/Hot, and Steam. Full panel analysis establishing your facility baseline in compliance with ANSI/AAMI ST108:2023.",
    includes: ["Critical Water Testing", "Utility Water Analysis", "Steam Quality Check", "Baseline Documentation"],
    icon: FlaskConical,
  },
  {
    title: "Technical Process Analysis",
    description:
      "Deep-dive investigation when issues arise. On-site assessment, root cause analysis, and documented remediation planning for surveyors and compliance records.",
    includes: ["Root Cause Analysis", "On-Site Investigation", "Evidence Documentation", "Remediation Planning"],
    icon: Search,
  },
]

export function ServicesSection() {
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
    <section ref={sectionRef} id="services" className="bg-[#0A0A0A]" style={{ paddingTop: '64px', paddingBottom: '0px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[#4A90E2] text-xs tracking-[0.4em] uppercase block mb-6">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F5F5F5] leading-tight">
            Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1F1F1F]">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div
                key={service.title}
                className={`group bg-[#0A0A0A] p-8 lg:p-12 transition-all duration-700 hover:bg-[#0F0F0F] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 border border-[#1F1F1F] flex items-center justify-center group-hover:border-[#4A90E2] transition-colors duration-300">
                      <IconComponent className="w-5 h-5 text-[#4A90E2]" />
                    </div>
                    <h3 className="text-xl lg:text-2xl text-[#F5F5F5] font-light group-hover:text-[#4A90E2] transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-[#3D3D3D] group-hover:text-[#4A90E2] transition-colors duration-300 shrink-0 ml-4" />
                </div>
                <p className="text-[#8A8A8A] leading-relaxed mb-8">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.includes.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] tracking-[0.12em] uppercase text-[#3D3D3D] border border-[#1F1F1F] px-3 py-1.5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Quote CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-[#1F1F1F] pt-8">
          <p className="text-[#8A8A8A] text-lg">
            Pricing tailored to your facility size and scope of service.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 text-[#F5F5F5] hover:text-[#4A90E2] transition-colors duration-300"
          >
            <span className="text-sm tracking-[0.15em] uppercase">Schedule a Call</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
