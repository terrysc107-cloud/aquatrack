"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { AlertCircle, Search, BarChart3, Wrench, FileCheck } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Detection",
    description:
      "Routine results flag elevated endotoxin above ST108 threshold. Same-day notification to your team.",
    icon: AlertCircle,
  },
  {
    number: "02",
    title: "Assessment",
    description:
      "Technical Process Analysis initiated. On-site visit: water system walk, washer efficacy, instrument inspection, steam quality check.",
    icon: Search,
  },
  {
    number: "03",
    title: "Analysis",
    description:
      "Lab data cross-referenced with reprocessing workflow. Root cause identified and documented with supporting evidence.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Remediation",
    description:
      "Written remediation plan delivered. Facilities team briefed. Corrective action implemented. Resampling scheduled.",
    icon: Wrench,
  },
  {
    number: "05",
    title: "Documentation",
    description:
      "Incident documented. Water Quality Management Plan updated. Records available for Joint Commission or CMS review.",
    icon: FileCheck,
  },
]

export function IssueResponseSection() {
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
    <section ref={sectionRef} className="bg-[#0A0A0A]" style={{ paddingTop: '63px', paddingBottom: '67px' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-[#4A90E2] text-xs tracking-[0.4em] uppercase block mb-6">
              Issue Response
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F5F5F5] leading-tight max-w-2xl">
              When Problems Arise
            </h2>
          </div>
          <p className="text-[#8A8A8A] text-lg max-w-md lg:text-right">
            Systematic resolution from detection to documentation.
          </p>
        </div>

        {/* Feature Image */}
        <div
          className={`relative h-[220px] lg:h-[300px] overflow-hidden mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src="/issue-response.jpg"
            alt="Hospital water system infrastructure with monitoring equipment"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-12">
            <p className="text-[#F5F5F5] text-xl lg:text-2xl font-light max-w-2xl">
              Every exceedance is an opportunity to strengthen your compliance position.
            </p>
          </div>
        </div>

        {/* Steps */}
        <div className="flex lg:grid lg:grid-cols-5 gap-6 overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:pb-0 snap-x snap-mandatory">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div
                key={step.number}
                className={`shrink-0 w-[280px] lg:w-auto snap-start transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-[#4A90E2] text-3xl lg:text-4xl font-serif">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 border border-[#1F1F1F] flex items-center justify-center">
                    <IconComponent className="w-4 h-4 text-[#4A90E2]" />
                  </div>
                </div>
                <div className="h-px bg-[#1F1F1F] mb-6" />
                <h3 className="text-[#F5F5F5] text-lg font-light mb-3">{step.title}</h3>
                <p className="text-[#8A8A8A] text-sm leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        {/* Technical Analysis CTA with Image */}
        <div
          className={`mt-12 transition-all duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          {/* Image */}
          <div className="relative h-[180px] lg:h-[240px] overflow-hidden">
            <Image
              src="/technical-analysis.jpg"
              alt="Laboratory analysis equipment and water testing instruments"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="px-8 lg:px-12 max-w-xl">
                <h3 className="text-[#F5F5F5] text-2xl lg:text-3xl font-light mb-4">Technical Process Analysis</h3>
                <p className="text-[#8A8A8A] mb-6">
                  Deep-dive investigation when you need answers. Managed program clients receive priority scheduling.
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#4A90E2] text-sm tracking-[0.15em] uppercase hover:text-[#F5F5F5] transition-colors duration-300"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
