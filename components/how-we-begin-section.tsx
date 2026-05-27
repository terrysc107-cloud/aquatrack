"use client"

import { useEffect, useRef, useState } from "react"

const steps = [
  {
    number: "01",
    text: "Submit your inquiry",
  },
  {
    number: "02",
    text: "Receive your complimentary Gap Analysis within one business day",
  },
  {
    number: "03",
    text: "Review it together on your discovery call",
  },
]

export function HowWeBeginSection() {
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
    <section ref={sectionRef} className="bg-[#050505] py-20 lg:py-28">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div>
          <span className="text-[#4A90E2] text-xs tracking-[0.5em] uppercase block mb-6">
            Start Here
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F5F5F5] leading-tight mb-12">
            How We Begin
          </h2>
        </div>

        {/* Body Paragraph */}
        <div className="max-w-3xl mb-16">
          <p className="text-[#8A8A8A] text-lg lg:text-xl leading-relaxed">
            Every engagement starts with a 30-minute discovery call. Before that call, you&apos;ll receive a complimentary AAMI ST108:2023 Gap Analysis — a structured self-assessment covering the seven core program areas of the standard. Complete it at your own pace. Bring it to the call. We review it together, section by section.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-0 border-t border-[#1F1F1F]">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`group border-t border-[#1F1F1F] py-6 lg:py-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-8 lg:gap-12">
                <span className="text-[#4A90E2] text-4xl lg:text-5xl font-serif flex-shrink-0 w-12 lg:w-16">
                  {step.number}
                </span>
                <p className="text-[#8A8A8A] text-lg lg:text-xl leading-relaxed pt-1 flex-1">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
