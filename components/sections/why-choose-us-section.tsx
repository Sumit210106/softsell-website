"use client"

import { motion } from "framer-motion"
import { Zap, Shield, DollarSign, Award } from "lucide-react"
import FeatureCard from "@/components/ui/feature-card"
import SectionHeading from "@/components/ui/section-heading"

export default function WhyChooseUsSection() {
  // Features data
  const features = [
    {
      title: "Fast Payments",
      description: "Get paid within 3 business days of accepting our offer.",
      icon: <Zap className="h-8 w-8" />,
    },
    {
      title: "Secure Transfers",
      description: "Our platform ensures secure and compliant license transfers.",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      title: "Best Valuations",
      description: "We offer competitive prices based on real-time market data.",
      icon: <DollarSign className="h-8 w-8" />,
    },
    {
      title: "Expert Support",
      description: "Our team of licensing experts guides you through every step.",
      icon: <Award className="h-8 w-8" />,
    },
  ]

  return (
    <section id="why-choose-us" className="container mx-auto px-4 py-24 relative z-10 animate-on-scroll">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/5 via-accent/10 to-accent/5 rounded-3xl blur-xl"></div>

      <div className="bg-card/30 backdrop-blur-md border border-border/40 rounded-3xl p-8 md:p-16 shadow-glow-md">
        <SectionHeading
          badge="Our Advantages"
          title="Why Choose Us"
          description="SoftSell offers unique advantages that make us the preferred choice for software license resale."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <FeatureCard title={feature.title} description={feature.description} icon={feature.icon} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
