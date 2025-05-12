"use client"

import { useEffect, useState } from "react"
import { Outfit } from "next/font/google"
import { useTheme } from "next-themes"

import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"
import HeroSection from "@/components/sections/hero-section"
import StatsSection from "@/components/sections/stats-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import WhyChooseUsSection from "@/components/sections/why-choose-us-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ContactSection from "@/components/sections/contact-section"
import BackgroundElements from "@/components/ui/background-elements"

const outfit = Outfit({ subsets: ["latin"] })

export default function Home() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
 
    setMounted(true)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    // Observe elements with animate-on-scroll class
    const sections = document.querySelectorAll(".animate-on-scroll")
    sections.forEach((section) => observer.observe(section))

    // Cleanup function
    return () => {
      sections.forEach((section) => {
        if (observer && section) {
          observer.unobserve(section)
        }
      })
    }
  }, [])

  return (
    <div className={`${outfit.className} min-h-screen relative overflow-hidden`}>
      {/* Dynamic background elements */}
      {mounted && <BackgroundElements mounted={mounted} theme={theme} />}

      {/* Main content */}
      <div className="relative z-10">
        <Header />

        <main>
          <HeroSection />
          <StatsSection />
          <HowItWorksSection />
          <WhyChooseUsSection />
          <TestimonialsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  )
}
