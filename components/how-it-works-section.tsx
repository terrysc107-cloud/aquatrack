"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const quarters = [
  {
    quarter: "Q1",
    label: "Foundation",
    items: [
      "Water Quality Management Plan Development",
      "Site survey & system mapping",
      "Performance Qualification",
      "Full panel testing",
      "Baseline established",
    ],
  },
  {
    quarter: "Q2",
    label: "Monitoring Begins",
    items: [
      "Critical Water monthly",
      "Utility Water quarterly",
      "Steam quality quarterly",
      "Results interpretation",
      "Consultation call",
    ],
  },
  {
    quarter: "Q3",
    label: "Trend Tracking",
    items: [
      "Continued monitoring",
      "Trend analysis begins",
      "Mid-year check-in",
      "Plan accuracy review",
      "Adjustments as needed",
    ],
  },
  {
    quarter: "Q4",
    label: "Annual Review",
    items: [
      "Final routine quarter",
      "Trend summary prepared",
      "Water Quality Management Plan annual review",
      "Year 2 Performance Qualification scheduled",
      "Continuous improvement",
    ],
  },
]

export function HowItWorksSection() {
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
    <section ref={sectionRef} id="process" className="bg-[#050505]" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-[#4A90E2] text-xs tracking-[0.5em] uppercase block mb-6">
            The Process
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F5F5F5] leading-tight max-w-3xl">
            Your First Year
          </h2>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {quarters.map((q, index) => (
            <div
              key={q.quarter}
              className={`relative transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-5xl lg:text-6xl font-serif text-[#F5F5F5]">{q.quarter}</span>
                <span className="text-[#3D3D3D] text-sm tracking-wider">{q.label}</span>
              </div>
              <div className="h-px bg-[#1F1F1F] mb-6" />
              <ul className="space-y-3">
                {q.items.map((item) => (
                  <li key={item} className="text-[#737373] text-sm leading-relaxed flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-[#4A90E2] mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Year 2+ Banner with Image */}
        <div
          className={`mt-12 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          {/* Image Banner */}
          <div className="relative h-[160px] lg:h-[220px] overflow-hidden mb-0">
            <Image
              src="/water-banner.jpg"
              alt="Abstract water surface with subtle blue reflections"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/70 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 lg:px-12">
                <span className="text-[#4A90E2] text-xs tracking-[0.5em] uppercase block mb-3">Year 2 and Beyond</span>
                <p className="text-[#F5F5F5] text-xl lg:text-2xl font-light max-w-md">
                  Same cadence, every year.
                </p>
                <p className="text-[#8A8A8A] mt-2">
                  Q1 Performance Qualification. Q2–Q4 Routine Monitoring.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-8 border-t border-[#1F1F1F]">
            <p className="text-[#8A8A8A]">
              Consistent monitoring builds reliable compliance history.
            </p>
            <a
              href="#contact"
              className="text-[#F5F5F5] text-sm tracking-[0.15em] uppercase hover:text-[#4A90E2] transition-colors duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
