'use client'

import { Activity, FileText, FlaskConical, BarChart3 } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Activity,
    title: 'Managed Water Quality Programs',
    description:
      "End-to-end management of your facility's ST108 water quality program. We handle monitoring schedules, vendor coordination, data review, and corrective action tracking.",
    features: [
      'Monthly water quality reporting',
      'Vendor performance oversight',
      'Corrective action management',
      'Annual program review',
    ],
  },
  {
    icon: FileText,
    title: 'Water Quality Management Plan (WQMP)',
    description:
      'Custom WQMP documentation built from scratch or updated to meet current ST108:2023 requirements. Survey-ready, facility-specific, and maintained.',
    features: [
      'Facility-specific plan design',
      'ST108:2023 gap remediation',
      'Policy and procedure writing',
      'Staff training materials',
    ],
  },
  {
    icon: FlaskConical,
    title: 'Performance Qualification (PQ) Testing',
    description:
      'Structured PQ testing protocols validating that your water treatment equipment consistently produces water meeting ST108 critical quality parameters.',
    features: [
      'PQ protocol design',
      'Testing execution and oversight',
      'Data analysis and reporting',
      'Revalidation programs',
    ],
  },
  {
    icon: BarChart3,
    title: 'Technical Process Analysis',
    description:
      'Deep-dive analysis of existing water systems, identifying technical gaps, non-conformances, and optimization opportunities specific to your SPD environment.',
    features: [
      'System architecture review',
      'Critical limit verification',
      'Non-conformance root cause analysis',
      'Improvement roadmapping',
    ],
  },
]

export default function ServicesSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section id="services" className="py-24 bg-card border-t border-border">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">
            Our Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Comprehensive ST108 Compliance Services
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            From a single gap analysis to a fully managed annual water quality program — every
            service an SPD needs to achieve and maintain ST108:2023 compliance.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className={cn(
                  'animate-entry card-hover p-6',
                  `stagger-${i + 1}`,
                  isVisible && 'is-visible'
                )}
              >
                <CardHeader className="p-0 pb-4">
                  <div className="h-10 w-10 rounded flex items-center justify-center bg-accent/10 border border-accent/20 mb-4">
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="mt-2 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-1.5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-muted">
                        <span className="h-1 w-1 rounded-full bg-accent flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted">
            Pricing tailored to your facility size and scope of service.{' '}
            <a href="#contact" className="text-accent hover:underline">
              Schedule a call to discuss →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
