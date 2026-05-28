'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { cn } from '@/lib/utils'

const faqs = [
  {
    q: 'What does AAMI ST108 require from my facility?',
    a: `ANSI/AAMI ST108:2023 requires healthcare facilities to establish and maintain a written Water Quality Management Plan (WQMP) covering all water used in the sterile processing department — including steam sterilization water, RO/DI water for instrument rinsing, and water used in automated washers. The standard specifies critical quality parameters, testing frequencies, acceptable limits, and documentation requirements. Facilities must also conduct Performance Qualification testing when new equipment is installed and whenever significant changes occur. Non-conformances must be investigated, corrected, and documented with a full corrective action record.`,
  },
  {
    q: 'How is Clarix different from our water treatment vendor?',
    a: `Your water treatment vendor focuses on the chemistry and equipment of your water system — softeners, RO units, chemical dosing. Clarix focuses on the regulatory compliance layer: does your program meet ST108:2023 requirements? We translate what your vendor does into documented, auditable evidence of compliance. We also cover areas your vendor doesn't touch — written WQMPs, staff training records, PQ testing documentation, and non-conformance reporting. We often work alongside existing vendors rather than replacing them.`,
  },
  {
    q: 'What is Performance Qualification testing?',
    a: `Performance Qualification (PQ) testing is a structured validation process confirming that your water treatment equipment consistently produces water meeting ST108:2023 critical quality parameters. Unlike routine monitoring, PQ testing is formal, protocol-driven, and documented with a final PQ report. ST108 requires PQ testing upon initial installation of new equipment, after significant repairs or modifications, and when monitoring data indicates a trend toward out-of-limit conditions.`,
  },
  {
    q: 'How much does it cost?',
    a: `Pricing depends on the scope of services and your facility's size and complexity. Our entry point is a gap analysis engagement, which is complimentary for the initial assessment. Full WQMP development projects are scoped after the discovery call. Managed annual programs are priced on a monthly retainer model. There are no hidden fees — every engagement is quoted with a fixed scope and price. We discuss specifics only after understanding your actual needs.`,
  },
  {
    q: 'We already have a water program — do we need this?',
    a: `Many facilities have some form of water monitoring in place, but the critical question is whether that program meets the specific requirements of ANSI/AAMI ST108:2023. Common gaps include: no formal written WQMP, incomplete PQ testing records, monitoring frequencies that don't match ST108 recommendations, and missing non-conformance documentation. Our gap analysis will tell you definitively whether your existing program is survey-ready or needs remediation.`,
  },
  {
    q: 'Can you work with any facility size?',
    a: `Yes. We work with acute care hospitals, ambulatory surgery centers (ASCs), and outpatient facilities of all sizes. The scope of ST108 requirements is the same regardless of facility size, but complexity scales with the size of your water system and SPD. We tailor our engagement model to match your facility's actual complexity and resources.`,
  },
  {
    q: 'What happens if we fail a survey?',
    a: `A water quality-related survey finding — from TJC, DNV, CMS, or a state health department — typically requires an immediate corrective action plan with documented evidence of remediation. Clarix can mobilize rapidly to assess the specific finding, develop a defensible corrective action plan, implement required documentation and process changes, and provide consultation support during follow-up surveys. Proactive engagement before a survey is far less costly than emergency remediation after a citation.`,
  },
  {
    q: 'How quickly can we get started?',
    a: `From initial contact to the start of your gap assessment, the typical timeline is 1–2 weeks. The process begins with your complimentary 30-minute discovery call, after which we provide a written proposal within 48 hours. Urgent needs — such as pre-survey preparation or post-citation response — can often be accommodated on an expedited timeline.`,
  },
]

export default function FAQSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section id="faq" className="py-24 bg-card border-t border-border">
      <div className="container">
        <div className="text-center mb-16 space-y-4">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase">FAQ</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            Common questions from SPD directors, infection prevention teams, and facility
            administrators evaluating ST108 compliance.
          </p>
        </div>

        <div
          ref={ref}
          className={cn('animate-entry max-w-3xl mx-auto', isVisible && 'is-visible')}
        >
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-sm md:text-base">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p>{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
