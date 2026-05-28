'use client'

import { useState, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle, Phone } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { cn } from '@/lib/utils'

const DISCOVERY_WEBHOOK = 'https://aigenx.app.n8n.cloud/webhook/clarix-discovery-call'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.05 })
  const [formState, setFormState] = useState<FormState>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('submitting')
    setError('')

    const fd = new FormData(e.currentTarget)
    const payload = {
      firstName: fd.get('firstName'),
      lastName: fd.get('lastName'),
      email: fd.get('email'),
      phone: fd.get('phone'),
      facilityName: fd.get('facilityName'),
      facilityType: fd.get('facilityType'),
      role: fd.get('role'),
      message: fd.get('message'),
      submittedAt: new Date().toISOString(),
    }

    try {
      const res = await fetch(DISCOVERY_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error()
      setFormState('success')
    } catch {
      setFormState('error')
      setError('Submission failed. Please try again or email terry@clarixanalytics.net directly.')
    }
  }

  const inputClass =
    'w-full rounded border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-ring transition-colors'
  const labelClass = 'block text-xs font-medium text-muted mb-1.5'

  return (
    <section id="contact" className="py-24 bg-background border-t border-border">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: value props */}
          <div className={cn('animate-entry space-y-6', isVisible && 'is-visible')}>
            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-widest text-accent uppercase">
                Get Started
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold">
                Book Your Complimentary Discovery Call
              </h2>
              <p className="text-muted leading-relaxed">
                A 30-minute conversation — no sales pressure, no commitment. We&apos;ll review
                your facility&apos;s current program status, answer your ST108 questions, and
                tell you honestly whether and how we can help.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                'Review of your current water quality program',
                'Identification of your highest-priority ST108 gaps',
                'Overview of Clarix services relevant to your facility',
                'Preliminary timeline and next steps if you choose to proceed',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 h-5 w-5 rounded-full border border-accent/30 bg-accent/10 flex items-center justify-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  </div>
                  <p className="text-sm text-muted">{point}</p>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-3 border border-border rounded p-4 bg-card">
              <Phone className="h-5 w-5 text-accent flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Prefer to reach out directly?
                </p>
                <a
                  href="mailto:terry@clarixanalytics.net"
                  className="text-sm text-accent hover:underline"
                >
                  terry@clarixanalytics.net
                </a>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div ref={ref}>
            {formState === 'success' ? (
              <div
                className={cn(
                  'animate-entry flex flex-col items-center gap-6 text-center py-16 px-8 rounded border border-accent/20 bg-card',
                  isVisible && 'is-visible'
                )}
              >
                <CheckCircle className="h-16 w-16 text-accent" />
                <h3 className="font-serif text-2xl font-bold text-foreground">
                  Request Received
                </h3>
                <p className="text-muted text-sm leading-relaxed max-w-xs">
                  Terry will be in touch within one business day to schedule your discovery call.
                  Check your inbox for a confirmation.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={cn(
                  'animate-entry stagger-2 space-y-5 bg-card border border-border rounded p-8',
                  isVisible && 'is-visible'
                )}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className={labelClass}>First Name *</label>
                    <input id="firstName" name="firstName" type="text" required placeholder="Terry" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="lastName" className={labelClass}>Last Name *</label>
                    <input id="lastName" name="lastName" type="text" required placeholder="Scott" className={inputClass} />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className={labelClass}>Work Email *</label>
                    <input id="email" name="email" type="email" required placeholder="you@hospital.org" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>Phone</label>
                    <input id="phone" name="phone" type="tel" placeholder="(555) 000-0000" className={inputClass} />
                  </div>
                </div>

                <div>
                  <label htmlFor="facilityName" className={labelClass}>Facility Name *</label>
                  <input id="facilityName" name="facilityName" type="text" required placeholder="General Hospital" className={inputClass} />
                </div>

                <div>
                  <label htmlFor="facilityType" className={labelClass}>Facility Type *</label>
                  <select id="facilityType" name="facilityType" required defaultValue="" className={cn(inputClass, 'appearance-none')}>
                    <option value="" disabled>Select type…</option>
                    <option value="acute-care-hospital">Acute Care Hospital</option>
                    <option value="ambulatory-surgery-center">Ambulatory Surgery Center</option>
                    <option value="ambulatory-care">Ambulatory Care Facility</option>
                    <option value="critical-access-hospital">Critical Access Hospital</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="role" className={labelClass}>Your Role *</label>
                  <input id="role" name="role" type="text" required placeholder="SPD Director, Infection Preventionist…" className={inputClass} />
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>Tell us about your situation</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe your current water quality program status, upcoming survey dates, or specific concerns…"
                    className={cn(inputClass, 'resize-none')}
                  />
                </div>

                {error && <p className="text-sm text-red-400">{error}</p>}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={formState === 'submitting'}
                >
                  {formState === 'submitting' ? 'Submitting…' : 'Request Discovery Call'}
                </Button>

                <p className="text-center text-xs text-muted">
                  We respond within one business day. No spam, ever.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
