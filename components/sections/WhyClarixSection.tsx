'use client'

import Image from 'next/image'
import { Wrench, Scale, GitMerge, Award, Phone } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { cn } from '@/lib/utils'

const differentiators = [
  {
    icon: Wrench,
    title: 'Built From the Bench Up',
    description:
      'Our consultants have worked in SPDs, not just studied them. We understand the daily operational realities of running a sterile processing department at scale.',
  },
  {
    icon: Scale,
    title: 'Regulatory Precision',
    description:
      'Every recommendation is grounded in ANSI/AAMI ST108:2023 requirements — not general best practices. You get defensible, survey-ready documentation.',
  },
  {
    icon: GitMerge,
    title: 'Integrated Program Design',
    description:
      'We design water quality management programs that integrate with your existing workflows, rather than forcing you to rebuild around our process.',
  },
  {
    icon: Award,
    title: 'Multi-Credential Expertise',
    description:
      'CRCST, CHL, CIS, CER, and ASSE 12080 certifications — the full spectrum of SPD and water safety credentialing under one program.',
  },
  {
    icon: Phone,
    title: 'Ongoing Partnership',
    description:
      "We don't disappear after initial engagement. Managed programs include continuous monitoring, quarterly reviews, and rapid non-conformance response.",
  },
]

export default function WhyClarixSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="why-clarix" className="py-24 bg-background border-t border-border">
      <div className="container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div
            className={cn(
              'animate-entry relative rounded overflow-hidden aspect-[4/3]',
              isVisible && 'is-visible'
            )}
          >
            <Image
              src="/water-sample.jpg"
              alt="Water quality testing in sterile processing"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-background/60 to-transparent" />
          </div>

          {/* Differentiators */}
          <div className="space-y-8">
            <div className={cn('animate-entry stagger-1', isVisible && 'is-visible')}>
              <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-3">
                Why Clarix
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                The Difference Between Compliance and Confidence
              </h2>
            </div>

            <ul className="space-y-6">
              {differentiators.map((item, i) => {
                const Icon = item.icon
                return (
                  <li
                    key={item.title}
                    className={cn(
                      'animate-entry flex gap-4',
                      `stagger-${Math.min(i + 2, 5)}`,
                      isVisible && 'is-visible'
                    )}
                  >
                    <div className="flex-shrink-0 mt-0.5 h-8 w-8 rounded flex items-center justify-center bg-accent/10 border border-accent/20">
                      <Icon className="h-4 w-4 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
