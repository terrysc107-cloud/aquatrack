import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhyClarixSection } from "@/components/why-clarix-section"
import { HowItWorksSection } from "@/components/how-it-works-section"
import { ServicesSection } from "@/components/services-section"
import { IssueResponseSection } from "@/components/issue-response-section"
import { HowWeBeginSection } from "@/components/how-we-begin-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navigation />
      <HeroSection />
      <WhyClarixSection />
      <HowItWorksSection />
      <ServicesSection />
      <IssueResponseSection />
      <HowWeBeginSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
