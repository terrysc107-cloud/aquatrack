import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/sections/HeroSection'
import WhyClarixSection from '@/components/sections/WhyClarixSection'
import ServicesSection from '@/components/sections/ServicesSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import HowWeBeginSection from '@/components/sections/HowWeBeginSection'
import IssueResponseSection from '@/components/sections/IssueResponseSection'
import FounderSection from '@/components/sections/FounderSection'
import GapAnalysisSection from '@/components/sections/GapAnalysisSection'
import FAQSection from '@/components/sections/FAQSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <WhyClarixSection />
        <ServicesSection />
        <HowItWorksSection />
        <HowWeBeginSection />
        <IssueResponseSection />
        <FounderSection />
        <GapAnalysisSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
