'use client'

import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { cn } from '@/lib/utils'

const credentials = [
  {
    abbr: 'CRCST',
    name: 'Certified Registered Central Service Technician',
    body: 'IAHCSMM',
    description:
      'The foundational certification for sterile processing professionals. Validates comprehensive knowledge of decontamination, sterilization, and sterile storage operations.',
    inProgress: false,
  },
  {
    abbr: 'CHL',
    name: 'Certified Healthcare Leader',
    body: 'IAHCSMM',
    description:
      'Leadership-level certification demonstrating advanced competency in managing central service operations, staff development, and quality systems.',
    inProgress: false,
  },
  {
    abbr: 'CIS',
    name: 'Certification in Infection Prevention — Endoscopy',
    body: 'IAHCSMM',
    description:
      'Specialized certification covering flexible endoscope reprocessing, high-level disinfection protocols, and infection prevention standards.',
    inProgress: false,
  },
  {
    abbr: 'CER',
    name: 'Certification in Endoscope Reprocessing',
    body: 'IAHCSMM',
    description:
      'Advanced credential validating expertise in the complex reprocessing of flexible endoscopes — one of the highest-risk reprocessing workflows in any SPD.',
    inProgress: false,
  },
  {
    abbr: 'ASSE 12080',
    name: 'Legionella Water Safety & Management Plan Specialist',
    body: 'ASSE International',
    description:
      'In Progress. Specialist-level certification for designing, implementing, and maintaining Water Management Plans that comply with ASHRAE 188 and CMS requirements for Legionella risk reduction.',
    inProgress: true,
  },
]

export default function FounderSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="founder" className="py-24 bg-card border-t border-border">
      <div className="container">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Photo */}
          <div className={cn('animate-entry', isVisible && 'is-visible')}>
            <div className="relative rounded overflow-hidden aspect-[3/4] max-w-sm mx-auto lg:mx-0">
              <Image
                src="/terry-scott.jpg"
                alt="Terry Scott, Founder of Clarix Analytics"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="font-serif text-xl font-bold text-foreground">Terry Scott</p>
                <p className="text-sm text-muted mt-1">Founder, Clarix Analytics</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {credentials.map((c) => (
                    <Badge
                      key={c.abbr}
                      variant={c.inProgress ? 'secondary' : 'default'}
                      className="text-[10px]"
                    >
                      {c.abbr}{c.inProgress ? ' *' : ''}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bio + credentials */}
          <div className={cn('animate-entry stagger-2 space-y-8', isVisible && 'is-visible')}>
            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-widest text-accent uppercase">
                Behind the Expertise
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Built on the Foundation of Real SPD Experience
              </h2>
              <div className="space-y-4 text-muted leading-relaxed text-sm">
                <p>
                  Terry Scott founded Clarix Analytics after years working directly in sterile
                  processing departments across acute care and ambulatory settings. The gap
                  between what regulatory standards require and what facilities actually have in
                  place became unmistakably clear — not from a consultant&apos;s desk, but from
                  the bench.
                </p>
                <p>
                  That operational foundation — combined with the full spectrum of SPD
                  certification — is what makes Clarix different. Every recommendation comes
                  with practical implementation knowledge, not just compliance theory.
                </p>
                <p>
                  With the addition of ASSE 12080 Legionella Water Safety certification
                  (in progress), Clarix offers a rare combination: SPD operational expertise
                  unified with specialized water safety credentialing.
                </p>
              </div>
            </div>

            {/* Credentials detail */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Credentials &amp; Certifications</h3>
              <ul className="space-y-4">
                {credentials.map((cred, i) => (
                  <li
                    key={cred.abbr}
                    className={cn(
                      'animate-entry border-l-2 pl-4',
                      cred.inProgress ? 'border-muted' : 'border-accent',
                      `stagger-${Math.min(i + 3, 5)}`,
                      isVisible && 'is-visible'
                    )}
                  >
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="font-semibold text-sm text-foreground">{cred.abbr}</span>
                      {cred.inProgress && (
                        <span className="text-[10px] border border-muted/50 text-muted rounded px-1.5 py-0.5">
                          In Progress
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-medium text-accent/80 mb-1">
                      {cred.name} — {cred.body}
                    </p>
                    <p className="text-xs text-muted leading-relaxed">{cred.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
