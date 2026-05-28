import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import PrintButton from '@/components/ui/PrintButton'

export const metadata: Metadata = {
  title: 'Free ST108 Gap Analysis | Clarix Analytics',
  description:
    'ANSI/AAMI ST108:2023 compliance self-assessment tool for sterile processing departments. 7 program areas, 35 questions.',
}

const sections = [
  {
    id: 1,
    title: 'Water System Overview & Risk Assessment',
    intro:
      'ST108:2023 requires facilities to understand the complete water system serving the SPD — from source water to point of use. A formal risk assessment must identify critical control points and potential failure modes before a WQMP can be properly designed.',
    questions: [
      {
        id: '1.1',
        text: 'Has your facility documented a complete water system schematic identifying all water sources, treatment equipment, and points of use within the SPD?',
        note: 'Include steam generation water, RO/DI systems, and automated washer water connections.',
      },
      {
        id: '1.2',
        text: 'Has a formal water quality risk assessment been conducted to identify critical control points (CCPs) in your SPD water system?',
        note: 'ST108 requires CCPs to be defined and documented within the WQMP.',
      },
      {
        id: '1.3',
        text: 'Are the water sources used for final rinse water and steam sterilization clearly identified and characterized by water type (RO, DI, softened, municipal)?',
        note: null,
      },
      {
        id: '1.4',
        text: 'Has your facility assessed the risk posed by aging or modified water treatment infrastructure (e.g., post-renovation, equipment replacement)?',
        note: 'Infrastructure changes may require requalification of affected water system components.',
      },
      {
        id: '1.5',
        text: 'Is the water system risk assessment reviewed and updated at least annually or whenever significant system changes occur?',
        note: null,
      },
    ],
  },
  {
    id: 2,
    title: 'Water Quality Parameters & Critical Limits',
    intro:
      'ST108:2023 specifies critical quality parameters for water used in sterile processing — including conductivity/resistivity, total organic carbon (TOC), endotoxin levels, microbial limits, and chemical contaminants. Each parameter must have documented acceptable limits aligned with the standard.',
    questions: [
      {
        id: '2.1',
        text: 'Does your facility have documented critical limits for all ST108-required water quality parameters (conductivity/resistivity, TOC, endotoxins, microbial count, pH, hardness) at each water use point?',
        note: 'Critical limits must match or exceed ST108 Table 1 requirements for the applicable water type.',
      },
      {
        id: '2.2',
        text: 'Are separate water quality specifications defined for each water use category — steam sterilization, automated washers, manual cleaning rinse, and instrument storage rinse?',
        note: 'Different use points may have different ST108 parameter requirements.',
      },
      {
        id: '2.3',
        text: 'Are alert limits (action thresholds before critical limits are reached) defined within your WQMP to enable proactive corrective action?',
        note: 'Alert limits are a best practice ST108 strongly encourages for trending programs.',
      },
      {
        id: '2.4',
        text: 'Does your water quality monitoring program test for endotoxin levels in RO/DI water used for final instrument rinsing, per ST108 Section 8 requirements?',
        note: null,
      },
      {
        id: '2.5',
        text: 'Are water quality parameter limits reviewed against current ST108:2023 edition requirements, rather than prior AAMI standards (e.g., TIR34, ST108:2018)?',
        note: 'ST108:2023 updated several limits from previous versions. Confirm your specifications reflect the current edition.',
      },
    ],
  },
  {
    id: 3,
    title: 'Routine Monitoring Program',
    intro:
      'ST108:2023 requires a documented routine monitoring program with defined sampling locations, frequencies, test methods, responsible parties, and out-of-limit response procedures. Monitoring data must be recorded and retained per document control requirements.',
    questions: [
      {
        id: '3.1',
        text: 'Is there a written routine monitoring schedule specifying what parameters are tested, at which sampling points, at what frequency, and by whom?',
        note: 'Frequency must meet ST108 minimums — typically daily conductivity/resistivity checks, monthly microbial sampling, and quarterly endotoxin testing at minimum.',
      },
      {
        id: '3.2',
        text: 'Are monitoring results documented in a standardized log format that captures date, time, sampling location, test result, result against limit, and technician signature?',
        note: null,
      },
      {
        id: '3.3',
        text: 'Are out-of-limit results immediately escalated per a defined notification and response protocol rather than simply re-tested and recorded?',
        note: 'ST108 requires a documented response process — not just noting an abnormal result.',
      },
      {
        id: '3.4',
        text: 'Are monitoring records retained for a minimum of 10 years (or per applicable state regulation if more stringent) in a retrievable format?',
        note: null,
      },
      {
        id: '3.5',
        text: 'Is monitoring data reviewed on a trending basis (at minimum quarterly) to identify gradual shifts toward out-of-limit conditions before they occur?',
        note: 'Trend analysis is a key ST108 expectation that many programs do not formally perform.',
      },
    ],
  },
  {
    id: 4,
    title: 'Performance Qualification (PQ) Testing',
    intro:
      'ST108:2023 requires Performance Qualification testing to validate that water treatment equipment consistently produces water meeting critical quality parameters. PQ is distinct from routine monitoring — it is formal, protocol-driven, and produces a written PQ report that becomes a permanent record.',
    questions: [
      {
        id: '4.1',
        text: 'Has Performance Qualification testing been completed for all water treatment equipment (RO systems, DI systems, water softeners) currently serving the SPD?',
        note: 'PQ must be performed upon initial installation and after significant modifications or repairs.',
      },
      {
        id: '4.2',
        text: 'Is there a written PQ protocol for each piece of water treatment equipment that defines acceptance criteria, sampling schedule, test methods, and pass/fail criteria?',
        note: null,
      },
      {
        id: '4.3',
        text: 'Are PQ test reports retained as permanent records, including all raw data, analysis, and a signed summary report?',
        note: null,
      },
      {
        id: '4.4',
        text: 'Has PQ testing been repeated following any significant changes to the water system, including new equipment installation, major repairs, or confirmed system contamination events?',
        note: 'ST108 requires requalification after qualifying events — this is a common survey gap.',
      },
      {
        id: '4.5',
        text: 'Is there a documented schedule for periodic revalidation PQ testing (at minimum annually), even in the absence of qualifying change events?',
        note: null,
      },
    ],
  },
  {
    id: 5,
    title: 'Non-Conformance & Corrective Action',
    intro:
      'ST108:2023 requires a formal non-conformance management process for all out-of-limit water quality results. This includes immediate containment, root cause analysis, corrective action implementation, verification testing, and documentation of the complete CAPA record.',
    questions: [
      {
        id: '5.1',
        text: 'Does your WQMP include a written non-conformance procedure that defines what constitutes a non-conformance, immediate response steps, notification chain, and CAPA documentation requirements?',
        note: null,
      },
      {
        id: '5.2',
        text: 'For every out-of-limit result recorded in the past 12 months, is there a corresponding completed CAPA record in your document control system?',
        note: 'Auditors will cross-reference monitoring logs against CAPA records. Missing CAPAs are a common citation.',
      },
      {
        id: '5.3',
        text: 'Does your non-conformance procedure require an impact assessment — specifically evaluating whether any instrument loads or patient equipment was processed with out-of-limit water?',
        note: 'Impact assessment is a patient safety requirement, not just a regulatory one.',
      },
      {
        id: '5.4',
        text: 'Is corrective action effectiveness verified through follow-up testing before returning affected equipment or processes to routine service?',
        note: null,
      },
      {
        id: '5.5',
        text: 'Are recurring non-conformances (same parameter, same location) analyzed for systemic root causes rather than treated as isolated events each time?',
        note: 'Pattern analysis is a strong indicator of program maturity during surveys.',
      },
    ],
  },
  {
    id: 6,
    title: 'Training & Competency',
    intro:
      'ST108:2023 requires that all personnel who perform water quality monitoring activities demonstrate documented competency. Training must be initial (at hire or assignment) and ongoing (annual re-verification). Records must be retained.',
    questions: [
      {
        id: '6.1',
        text: 'Is there a documented initial training program for any staff member assigned to perform water quality monitoring, covering the WQMP, sampling techniques, equipment operation, and documentation requirements?',
        note: null,
      },
      {
        id: '6.2',
        text: 'Are annual competency verifications conducted and documented for all staff performing water quality monitoring activities?',
        note: 'Competency verification must include direct observation or skills demonstration — not just written testing.',
      },
      {
        id: '6.3',
        text: 'Are training and competency records retained in a retrievable format for each employee, with clear documentation of what was assessed, the result, and date?',
        note: null,
      },
      {
        id: '6.4',
        text: 'When the WQMP is updated, is refresher training provided and documented for affected staff before the change is implemented?',
        note: null,
      },
      {
        id: '6.5',
        text: 'Does training content reflect current ST108:2023 requirements, not prior version or informal procedures?',
        note: 'Training materials must be version-controlled and reflect the currently approved WQMP.',
      },
    ],
  },
  {
    id: 7,
    title: 'Document Control & Record Keeping',
    intro:
      'ST108:2023 requires a document control system managing the WQMP and all supporting documents, ensuring that staff are always working from current, approved versions. Records generated by the program must be retained, organized, and retrievable for regulatory review.',
    questions: [
      {
        id: '7.1',
        text: 'Does your WQMP exist as a controlled document with a defined version number, effective date, author, reviewer, and approver?',
        note: 'Uncontrolled WQMPs (no version tracking, no approval signature) are a routine survey finding.',
      },
      {
        id: '7.2',
        text: 'Is there a document revision process that requires review, approval, and staff notification before any changes to the WQMP or supporting procedures become effective?',
        note: null,
      },
      {
        id: '7.3',
        text: 'Are obsolete versions of the WQMP and supporting procedures retired from active use and archived — preventing staff from inadvertently using outdated documents?',
        note: null,
      },
      {
        id: '7.4',
        text: 'Is the full body of water quality records (monitoring logs, PQ reports, CAPA records, training records, vendor certificates of analysis) organized to allow rapid retrieval during a regulatory survey?',
        note: 'Auditors frequently request specific records on short notice. Disorganized records create citation risk even when the underlying work was performed correctly.',
      },
      {
        id: '7.5',
        text: 'Is the WQMP reviewed and formally reapproved at minimum annually by the responsible parties (SPD director, infection prevention, facility leadership)?',
        note: 'Annual review with documented sign-off is a core ST108 document control requirement.',
      },
    ],
  },
]

export default function GapAnalysisPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header — hidden on print */}
      <header className="no-print sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container flex h-14 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/clarix-logo.png"
              alt="Clarix Analytics"
              width={120}
              height={28}
              className="h-7 w-auto"
            />
          </Link>
          <div className="flex items-center gap-3">
            <PrintButton />
            <Button asChild size="sm">
              <Link href="/#contact">Book Discovery Call</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-12 max-w-4xl">
        {/* Document header */}
        <div className="mb-12 space-y-4 border-b border-border pb-12">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-accent uppercase">
            <span>Clarix Analytics</span>
            <span className="text-border">·</span>
            <span>Complimentary Self-Assessment Tool</span>
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold leading-tight">
            ANSI/AAMI ST108:2023 Water Quality Compliance<br />
            Gap Analysis — Self-Assessment
          </h1>
          <p className="text-muted leading-relaxed max-w-2xl">
            This self-assessment covers the 7 core program areas of ANSI/AAMI ST108:2023. For
            each question, mark your facility&apos;s current status as{' '}
            <strong className="text-foreground">Yes</strong>,{' '}
            <strong className="text-foreground">Partial</strong>, or{' '}
            <strong className="text-foreground">No</strong>. &ldquo;Partial&rdquo; indicates
            that the element exists but is incomplete, informal, or not fully compliant. Use
            the Notes field to document specific gaps, assigned owners, or remediation timelines.
          </p>
          <div className="rounded border border-accent/20 bg-accent/5 px-5 py-4 text-sm text-muted">
            <strong className="text-foreground">How to score:</strong> A survey-ready program
            answers Yes to every question. Any No or Partial represents a documented compliance
            gap requiring attention before your next regulatory survey. Clarix Analytics provides
            free gap remediation consulting during your discovery call.
          </div>
        </div>

        {/* 7 program areas */}
        {sections.map((section) => (
          <div key={section.id} className="print-section mb-16">
            <div className="mb-6 flex items-start gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded border border-accent/30 bg-accent/10 flex items-center justify-center">
                <span className="font-bold text-accent text-sm">{section.id}</span>
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold text-foreground mb-2">
                  {section.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed">{section.intro}</p>
              </div>
            </div>

            <div className="space-y-4">
              {section.questions.map((q) => (
                <div
                  key={q.id}
                  className="rounded border border-border bg-card p-5 space-y-3"
                >
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-xs font-mono text-muted mt-0.5">{q.id}</span>
                    <p className="text-sm text-foreground leading-relaxed">{q.text}</p>
                  </div>

                  {q.note && (
                    <p className="ml-7 text-xs text-muted italic border-l-2 border-border/50 pl-3">
                      {q.note}
                    </p>
                  )}

                  <div className="ml-7 flex flex-col sm:flex-row gap-3 items-start">
                    {/* Screen: radio buttons */}
                    <div className="no-print flex gap-4">
                      {['Yes', 'Partial', 'No'].map((opt) => (
                        <label
                          key={opt}
                          className="flex items-center gap-1.5 text-xs cursor-pointer"
                        >
                          <input
                            type="radio"
                            name={`q-${q.id}`}
                            value={opt.toLowerCase()}
                            className="accent-accent"
                          />
                          <span
                            className={
                              opt === 'Yes'
                                ? 'text-green-400'
                                : opt === 'No'
                                ? 'text-red-400'
                                : 'text-yellow-400'
                            }
                          >
                            {opt}
                          </span>
                        </label>
                      ))}
                    </div>

                    {/* Notes input */}
                    <div className="flex-1 w-full sm:w-auto">
                      <input
                        type="text"
                        placeholder="Notes / gap owner / target date…"
                        className="no-print w-full rounded border border-border bg-background px-3 py-1.5 text-xs text-foreground placeholder:text-muted/50 focus:border-accent focus:outline-none"
                      />
                      <div className="hidden print:block border-b border-border w-full mt-2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <div className="no-print mt-16 rounded border border-accent/20 bg-card p-8 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-foreground">
            Ready to close your gaps?
          </h3>
          <p className="text-muted text-sm max-w-md mx-auto">
            Schedule your complimentary 30-minute discovery call. Bring your completed gap
            analysis and we&apos;ll help you build a remediation roadmap.
          </p>
          <Button asChild size="lg">
            <Link href="/#contact">Book Discovery Call</Link>
          </Button>
        </div>

        {/* Print footer */}
        <div className="hidden print:block mt-12 text-center text-xs text-muted border-t border-border pt-6">
          <p>Clarix Analytics · clarixanalytics.net · terry@clarixanalytics.net</p>
          <p className="mt-1">ANSI/AAMI ST108:2023 Self-Assessment | Complimentary Resource</p>
        </div>
      </main>
    </div>
  )
}
