import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12">
        <div className="flex flex-col items-center gap-6 text-center">
          <Image
            src="/clarix-logo.png"
            alt="Clarix Analytics"
            width={140}
            height={32}
            className="h-8 w-auto opacity-80"
          />
          <p className="text-sm text-muted max-w-sm">
            ANSI/AAMI ST108:2023 compliant water quality consulting for sterile processing
            departments. SPD expertise, not a water company.
          </p>
          <a
            href="mailto:terry@clarixanalytics.net"
            className="text-sm text-accent hover:underline transition-colors"
          >
            terry@clarixanalytics.net
          </a>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted">
            <span>© {year} Clarix Analytics. All rights reserved.</span>
            <Link href="/gap-analysis" className="hover:text-foreground transition-colors">
              Free ST108 Gap Analysis
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
