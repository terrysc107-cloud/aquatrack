"use client"

import { useState } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { href: "#approach", label: "Approach" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Schedule a Call" },
]

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-[#050505] border-b border-[#1F1F1F]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-24 lg:h-30">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/clarix-logo.png"
              alt="Clarix Analytics"
              width={600}
              height={240}
              className="h-[4.5rem] lg:h-20 w-auto object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#8A8A8A] hover:text-[#F5F5F5] transition-colors duration-300 tracking-wide font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-[#4A90E2] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-2 text-sm text-[#F5F5F5] hover:text-[#4A90E2] transition-colors duration-300 group font-medium"
          >
            <span className="tracking-wide">Schedule a Call</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#F5F5F5] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-6 py-8 border-t border-[#1F1F1F]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg text-[#737373] hover:text-[#F5F5F5] transition-colors duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="text-[#4A90E2] text-base flex items-center gap-2 mt-2 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Schedule a Call
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
