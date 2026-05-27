"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUpRight } from "lucide-react"

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  const facilityTypes = [
    "Acute Care Hospital",
    "Surgery Center",
    "Ambulatory Care",
    "Other",
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)

    const payload = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      facilityName: formData.get("facilityName") as string,
      facilityType: formData.get("facilityType") as string || "",
      role: formData.get("role") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string || "",
      message: formData.get("message") as string || "",
      submittedAt: new Date().toISOString()
    }

    try {
      const response = await fetch("https://aigenx.app.n8n.cloud/webhook/clarix-discovery-call", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      })
      
      if (response.ok) {
        setIsSubmitted(true)
      } else {
        alert("There was an issue submitting your request. Please try again or email terry@clarixanalytics.net directly.")
      }
    } catch (error) {
      alert("There was an issue submitting your request. Please try again or email terry@clarixanalytics.net directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
<section ref={sectionRef} id="contact" className="py-20 lg:py-28 bg-[#050505]">
        <div className="max-w-2xl mx-auto px-6 lg:px-12 text-center">
          <div className="border border-[#1F1F1F] p-12 lg:p-16">
            <span className="text-[#4A90E2] text-xs tracking-[0.4em] uppercase block mb-6">
              Inquiry Received
            </span>
            <h3 className="text-3xl font-serif text-[#F5F5F5] mb-4">Thank You</h3>
            <p className="text-[#8A8A8A]">
              Terry will reach out within one business day to schedule your discovery call.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
      <section ref={sectionRef} id="contact" className="bg-[#050505]" style={{ paddingTop: '0px', paddingBottom: '8px' }}>
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-[#4A90E2] text-xs tracking-[0.4em] uppercase block mb-6">
              Get Started
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#F5F5F5] leading-tight">
              Request a Discovery Call
            </h2>
          </div>
          <p className="text-[#8A8A8A] text-lg max-w-md lg:text-right">
            Schedule a complimentary 30-minute call. Bring your questions — we'll bring the answers.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="firstName" className="text-[#8A8A8A] text-xs tracking-wider uppercase">
                    First Name <span className="text-[#4A90E2]">*</span>
                  </Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    className="bg-transparent border-0 border-b border-[#1F1F1F] rounded-none text-[#F5F5F5] placeholder:text-[#3D3D3D] focus:border-[#4A90E2] focus:ring-0 px-0"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="lastName" className="text-[#8A8A8A] text-xs tracking-wider uppercase">
                    Last Name <span className="text-[#4A90E2]">*</span>
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    className="bg-transparent border-0 border-b border-[#1F1F1F] rounded-none text-[#F5F5F5] placeholder:text-[#3D3D3D] focus:border-[#4A90E2] focus:ring-0 px-0"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="facilityName" className="text-[#8A8A8A] text-xs tracking-wider uppercase">
                  Facility Name <span className="text-[#4A90E2]">*</span>
                </Label>
                <Input
                  id="facilityName"
                  name="facilityName"
                  required
                  className="bg-transparent border-0 border-b border-[#1F1F1F] rounded-none text-[#F5F5F5] placeholder:text-[#3D3D3D] focus:border-[#4A90E2] focus:ring-0 px-0"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="facilityType" className="text-[#8A8A8A] text-xs tracking-wider uppercase">
                  Facility Type
                </Label>
                <Select name="facilityType">
                  <SelectTrigger className="bg-transparent border-0 border-b border-[#1F1F1F] rounded-none text-[#F5F5F5] focus:ring-0 px-0">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#0F0F0F] border-[#1F1F1F]">
                    {facilityTypes.map((type) => (
                      <SelectItem key={type} value={type} className="text-[#F5F5F5] hover:bg-[#1A1A1A] focus:bg-[#1A1A1A]">
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-3">
                <Label htmlFor="role" className="text-[#8A8A8A] text-xs tracking-wider uppercase">
                  Your Role <span className="text-[#4A90E2]">*</span>
                </Label>
                <Input
                  id="role"
                  name="role"
                  required
                  className="bg-transparent border-0 border-b border-[#1F1F1F] rounded-none text-[#F5F5F5] placeholder:text-[#3D3D3D] focus:border-[#4A90E2] focus:ring-0 px-0"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="email" className="text-[#8A8A8A] text-xs tracking-wider uppercase">
                    Email <span className="text-[#4A90E2]">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="bg-transparent border-0 border-b border-[#1F1F1F] rounded-none text-[#F5F5F5] placeholder:text-[#3D3D3D] focus:border-[#4A90E2] focus:ring-0 px-0"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="phone" className="text-[#8A8A8A] text-xs tracking-wider uppercase">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="bg-transparent border-0 border-b border-[#1F1F1F] rounded-none text-[#F5F5F5] placeholder:text-[#3D3D3D] focus:border-[#4A90E2] focus:ring-0 px-0"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="message" className="text-[#8A8A8A] text-xs tracking-wider uppercase">
                  Additional Details
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="bg-transparent border border-[#1F1F1F] rounded-none text-[#F5F5F5] placeholder:text-[#3D3D3D] focus:border-[#4A90E2] focus:ring-0 resize-none"
                  placeholder="Tell us more about your facility..."
                />
              </div>
            </div>
          </div>

          {/* Submit */}
          <div className="mt-10 pt-8 border-t border-[#1F1F1F] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-[#3D3D3D] text-sm">All conversations are confidential.</p>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#4A90E2] hover:bg-[#3A7ED0] text-[#050505] font-medium px-8 py-6 rounded-none tracking-wider uppercase text-sm group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Request a Call"}
              {!isSubmitting && (
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
