'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Shield } from 'lucide-react'

const certBadges = [
  { label: 'CRCST', title: 'Certified Registered Central Service Technician' },
  { label: 'CHL', title: 'Certified Healthcare Leader' },
  { label: 'CIS', title: 'Certification in Infection Prevention — Endoscopy' },
  { label: 'CER', title: 'Certification in Endoscope Reprocessing' },
  { label: 'ASSE 12080', title: 'Legionella Water Safety & Management Plan Specialist' },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video background — desktop only */}
      <div className="absolute inset-0 hidden md:block">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-bg.jpg"
          className="h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Mobile static background */}
      <div className="absolute inset-0 md:hidden">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-background/70" />
      </div>

      {/* Radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#050505_100%)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container flex flex-col items-center text-center gap-8 pt-32 pb-24">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 rounded border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-medium text-accent tracking-wider uppercase">
          <Shield className="h-3.5 w-3.5" />
          ANSI/AAMI ST108:2023 Compliance
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight max-w-4xl">
          Built by{' '}
          <span className="italic text-accent">SPD Leaders</span>
          {' '}for SPD Leaders
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
          Expert water quality monitoring and validation consulting for sterile processing
          departments. From gap analysis to full WQMP implementation — every requirement
          of ST108:2023, covered.
        </p>

        {/* Cert badges */}
        <div className="flex flex-wrap justify-center gap-2">
          {certBadges.map((cert) => (
            <Badge key={cert.label} variant="default" title={cert.title}>
              {cert.label}
            </Badge>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Button asChild size="lg">
            <Link href="#contact">
              Book Free Discovery Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="#gap-analysis">Get Free ST108 Gap Analysis</Link>
          </Button>
        </div>

        <p className="text-xs text-muted">
          30-minute complimentary consultation · No commitment required
        </p>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  )
}
