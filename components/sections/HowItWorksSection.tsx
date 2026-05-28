'use client'

import Image from 'next/image'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { cn } from '@/lib/utils'

const quarters = [
  {
    label: 'Q1',
    title: 'Discovery & Gap Assessment',
    description:
      'We conduct a thorough assessment of your current water quality program against ST108:2023 requirements. Deliverable: a written gap analysis report with prioritized findings.',
  },
  {
    label: 'Q2',
    title: 'WQMP Development & Approval',
    description:
      'Custom Water Quality Management Plan drafted, reviewed with your SPD and infection prevention teams, and finalized. Includes all policies, procedures, and monitoring forms.',
  },
  {
    label: 'Q3',
    title: 'Program Implementation & Training',
    description:
      'We work alongside your team to implement the new monitoring program, train staff on procedures, and establish baseline data. First formal PQ testing conducted.',
  },
  {
    label: 'Q4',
    title: 'Performance Qualification & Review',
    description:
      'Full Performance Qualification testing completed. Data analysis, corrective actions if needed, and a comprehensive Year 1 program review report presented.',
  },
]

export default function HowItWorksSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })
  const [bannerRef, bannerVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section id="how-it-works" className="py-24 bg-background border-t border-border">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">
            Your First Year
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="text-muted max-w-xl mx-auto">
            A structured, four-quarter approach to building a compliant, sustainable water
            quality program from the ground up.
          </p>
        </div>

        {/* Q1–Q4 grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quarters.map((q, i) => (
            <div
              key={q.label}
              className={cn(
                'animate-entry bg-card border border-border rounded p-6 space-y-3',
                `stagger-${i + 1}`,
                isVisible && 'is-visible'
              )}
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded border border-accent bg-accent/10 flex items-center justify-center">
                  <span className="font-bold text-accent text-sm">{q.label}</span>
                </div>
                <div className="h-px flex-1 bg-border" />
              </div>
              <h3 className="font-semibold text-foreground">{q.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{q.description}</p>
            </div>
          ))}
        </div>

        {/* Year 2 banner */}
        <div
          ref={bannerRef}
          className={cn(
            'animate-entry mt-8 relative rounded overflow-hidden',
            bannerVisible && 'is-visible'
          )}
        >
          <div className="relative h-48 md:h-64">
            <Image
              src="/water-banner.jpg"
              alt="Year 2 ongoing program management"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-background/75" />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-3 p-8">
              <p className="text-xs font-semibold tracking-widest text-accent uppercase">
                Year 2 and Beyond
              </p>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                Ongoing Managed Program
              </h3>
              <p className="text-sm text-muted max-w-lg">
                After Year 1 baseline establishment, transition to a streamlined annual managed
                program: quarterly water quality reviews, continuous monitoring, and immediate
                non-conformance response.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
