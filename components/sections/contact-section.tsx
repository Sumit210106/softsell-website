"use client"

import { motion } from "framer-motion"
import ContactForm from "@/components/ui/contact-form"
import SectionHeading from "@/components/ui/section-heading"

export default function ContactSection() {
  return (
    <section id="contact" className="container mx-auto px-4 py-24 relative z-10 animate-on-scroll">
      <SectionHeading
        badge="Get Started"
        title="Get Your License Valuation"
        description="Fill out the form below and our team will provide you with a valuation within 24 hours."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-2xl mx-auto mt-16"
      >
        <ContactForm />
      </motion.div>
    </section>
  )
}
