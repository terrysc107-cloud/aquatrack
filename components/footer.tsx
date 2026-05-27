import Image from "next/image"

export function Footer() {
  return (
    <footer className="py-12 bg-[#050505] border-t border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex flex-col gap-3">
            <Image
              src="/clarix-logo.png"
              alt="Clarix Analytics"
              width={400}
              height={160}
              className="h-16 lg:h-20 w-auto object-contain"
            />
            <p className="text-[#4D4D4D] text-sm">SPD expertise, not a water company.</p>
          </div>

          {/* Contact */}
          <a
            href="mailto:terry@clarixanalytics.net"
            className="text-[#8A8A8A] text-sm hover:text-[#4A90E2] transition-colors duration-300"
          >
            terry@clarixanalytics.net
          </a>

          {/* Copyright */}
          <p className="text-[#3D3D3D] text-xs">
            &copy; 2026 Clarix Analytics &middot; All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  )
}
