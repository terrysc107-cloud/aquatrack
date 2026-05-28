'use client'

import Link from 'next/link'
import { ClipboardList, Search, CalendarCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { cn } from '@/lib/utils'

const steps = [
  {
    number: '01',
    icon: ClipboardList,
    title: 'Submit Your Information',
    description:
      'Complete a brief intake form describing your facility, current water quality program status, and primary concerns. Takes under 5 minutes.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Receive Your Gap Analysis',
    description:
      'Within 24–48 hours, you receive a preliminary ST108 gap analysis identifying your highest-priority compliance gaps — at no charge.',
  },
  {
    number: '03',
    icon: CalendarCheck,
    title: 'Discovery Call',
    description:
      "Schedule your complimentary 30-minute discovery call to review the gap findings, discuss your facility's specific needs, and explore how Clarix can help.",
  },
]

export default function HowWeBeginSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="how-we-begin" className="py-24 bg-card border-t border-border">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">
            Getting Started
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">How We Begin</h2>
          <p className="text-muted max-w-xl mx-auto">
            A simple, three-step process from first contact to your complimentary discovery
            call — no commitment required.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className={cn(
                  'animate-entry flex flex-col items-center text-center gap-4',
                  `stagger-${i + 1}`,
                  isVisible && 'is-visible'
                )}
              >
                <div className="relative">
                  <div className="h-20 w-20 rounded-full border border-accent/30 bg-accent/5 flex items-center justify-center">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <span className="absolute -top-1 -right-1 h-6 w-6 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                    {step.number.slice(-1)}
                  </span>
                </div>
                <h3 className="font-semibold text-lg text-foreground">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild size="lg">
            <Link href="#contact">Start the Process</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
