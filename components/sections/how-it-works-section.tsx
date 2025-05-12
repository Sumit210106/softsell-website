"use client"

import { motion } from "framer-motion"
import { Upload, CheckCircle, DollarSign } from "lucide-react"
import StepCard from "@/components/ui/step-card"
import SectionHeading from "@/components/ui/section-heading"

export default function HowItWorksSection() {
  // Steps data
  const steps = [
    {
      number: 1,
      title: "Upload License",
      description: "Submit your license details through our secure portal for a quick review.",
      icon: <Upload className="h-10 w-10" />,
    },
    {
      number: 2,
      title: "Get Valuation",
      description: "Receive a competitive valuation based on current market demand within 24 hours.",
      icon: <CheckCircle className="h-10 w-10" />,
    },
    {
      number: 3,
      title: "Get Paid",
      description: "Accept our offer and receive payment via your preferred method within 3 business days.",
      icon: <DollarSign className="h-10 w-10" />,
    },
  ]

  return (
    <section id="how-it-works" className="container mx-auto px-4 py-24 relative z-10 animate-on-scroll">
      <SectionHeading
        badge="Simple Process"
        title="How It Works"
        description="Our streamlined process makes selling your unused software licenses quick and easy."
      />

      <div className="grid md:grid-cols-3 gap-8 relative mt-16">
        {/* Connecting line */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block"></div>

        {/* Steps */}
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          >
            <StepCard number={step.number} title={step.title} description={step.description} icon={step.icon} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
