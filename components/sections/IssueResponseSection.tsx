'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { cn } from '@/lib/utils'

const responseSteps = [
  {
    step: '1',
    title: 'Detection',
    description:
      'Out-of-limit result identified through routine monitoring, equipment alert, or staff observation. Immediate notification protocol activated.',
  },
  {
    step: '2',
    title: 'Containment',
    description:
      'Affected equipment isolated. Impact assessment of any processed loads determined. Quarantine procedures initiated per WQMP protocol.',
  },
  {
    step: '3',
    title: 'Root Cause Analysis',
    description:
      'Systematic investigation of the water system to identify the source of non-conformance. Clarix provides technical support throughout.',
  },
  {
    step: '4',
    title: 'Corrective Action',
    description:
      'Evidence-based corrective action implemented. Verification testing conducted to confirm resolution before returning to service.',
  },
  {
    step: '5',
    title: 'Documentation',
    description:
      'Full non-conformance report completed per ST108 requirements. CAPA record maintained in WQMP document control system.',
  },
]

export default function IssueResponseSection() {
  const [headerRef, headerVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })
  const [stepsRef, stepsVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })
  const [ctaRef, ctaVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.2 })

  return (
    <section id="issue-response" className="py-24 bg-background border-t border-border">
      <div className="container space-y-16">
        {/* Header */}
        <div ref={headerRef} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={cn('animate-entry space-y-6', headerVisible && 'is-visible')}>
            <p className="text-xs font-semibold tracking-widest text-accent uppercase">
              When Problems Arise
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Issue Response — We&apos;re With You
            </h2>
            <p className="text-muted leading-relaxed">
              Water quality non-conformances in sterile processing are patient safety events.
              Our response protocol ensures every out-of-limit result is handled with clinical
              rigor and complete documentation.
            </p>
          </div>
          <div
            className={cn(
              'animate-entry stagger-2 relative rounded overflow-hidden aspect-video',
              headerVisible && 'is-visible'
            )}
          >
            <Image
              src="/issue-response.jpg"
              alt="Issue response process"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background/30" />
          </div>
        </div>

        {/* 5-step flow */}
        <div ref={stepsRef} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {responseSteps.map((step, i) => (
            <div
              key={step.step}
              className={cn(
                'animate-entry bg-card border border-border rounded p-5 card-hover',
                `stagger-${i + 1}`,
                stepsVisible && 'is-visible'
              )}
            >
              <div className="h-8 w-8 rounded border border-accent/20 bg-accent/10 flex items-center justify-center mb-3">
                <span className="text-xs font-bold text-accent">{step.step}</span>
              </div>
              <h3 className="font-semibold text-sm text-foreground mb-2">{step.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Technical analysis CTA */}
        <div
          ref={ctaRef}
          className={cn(
            'animate-entry relative rounded overflow-hidden',
            ctaVisible && 'is-visible'
          )}
        >
          <div className="relative h-56 md:h-72">
            <Image
              src="/technical-analysis.jpg"
              alt="Technical process analysis"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-background/75" />
            <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-between gap-6 p-8 md:p-12">
              <div className="space-y-2 text-center sm:text-left">
                <p className="text-xs font-semibold tracking-widest text-accent uppercase">
                  Technical Process Analysis
                </p>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                  Don&apos;t wait for a survey finding
                </h3>
                <p className="text-sm text-muted max-w-md">
                  Proactive technical analysis identifies risks before they become citations.
                </p>
              </div>
              <Button asChild size="lg" className="flex-shrink-0">
                <Link href="#contact">Request Analysis</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
