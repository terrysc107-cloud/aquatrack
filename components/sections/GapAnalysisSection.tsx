'use client'

import { useState, FormEvent } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, FileSearch } from 'lucide-react'
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver'
import { cn } from '@/lib/utils'

const GAP_ANALYSIS_WEBHOOK = 'https://aigenx.app.n8n.cloud/webhook/clarix-gap-analysis'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function GapAnalysisSection() {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({ threshold: 0.1 })
  const [formState, setFormState] = useState<FormState>('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setFormState('submitting')
    setError('')

    const fd = new FormData(e.currentTarget)
    const payload = {
      firstName: fd.get('firstName'),
      email: fd.get('email'),
      source: 'gap-analysis-lead-magnet',
    }

    try {
      const res = await fetch(GAP_ANALYSIS_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Submission failed')
      setFormState('success')
    } catch {
      setFormState('error')
      setError('Something went wrong. Please try again or email terry@clarixanalytics.net directly.')
    }
  }

  const inputClass =
    'flex-1 rounded border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-ring transition-colors'

  return (
    <section id="gap-analysis" className="py-24 bg-background border-t border-border">
      <div className="container">
        <div ref={ref} className="max-w-2xl mx-auto text-center space-y-8">
          <div className={cn('animate-entry flex justify-center', isVisible && 'is-visible')}>
            <div className="h-16 w-16 rounded border border-accent/20 bg-accent/5 flex items-center justify-center">
              <FileSearch className="h-8 w-8 text-accent" />
            </div>
          </div>

          <div className={cn('animate-entry stagger-2 space-y-4', isVisible && 'is-visible')}>
            <p className="text-xs font-semibold tracking-widest text-accent uppercase">
              Free Resource
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-bold">
              Free ST108 Gap Analysis
            </h2>
            <p className="text-muted leading-relaxed">
              Not sure where your facility stands on ANSI/AAMI ST108:2023? Enter your name
              and email below and we&apos;ll send you our comprehensive self-assessment
              tool — covering all 7 program areas of ST108 compliance — directly to your
              inbox, within minutes.
            </p>
          </div>

          <div className={cn('animate-entry stagger-3', isVisible && 'is-visible')}>
            {formState === 'success' ? (
              <div className="flex flex-col items-center gap-4 py-8 px-6 rounded border border-accent/20 bg-accent/5">
                <CheckCircle className="h-12 w-12 text-accent" />
                <h3 className="font-semibold text-lg text-foreground">Check your inbox</h3>
                <p className="text-muted text-sm">
                  Your Gap Analysis arrives within minutes. If you don&apos;t see it, check
                  your spam folder or email{' '}
                  <a href="mailto:terry@clarixanalytics.net" className="text-accent hover:underline">
                    terry@clarixanalytics.net
                  </a>
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  required
                  className={inputClass}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Work email"
                  required
                  className={inputClass}
                />
                <Button
                  type="submit"
                  disabled={formState === 'submitting'}
                  className="whitespace-nowrap flex-shrink-0"
                >
                  {formState === 'submitting' ? 'Sending…' : 'Get It Free'}
                </Button>
              </form>
            )}

            {error && <p className="mt-3 text-sm text-red-400">{error}</p>}

            {formState !== 'success' && (
              <p className="mt-3 text-xs text-muted">
                No spam. Unsubscribe anytime.{' '}
                <Link href="/gap-analysis" className="text-accent hover:underline">
                  Preview the document →
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
