"use client"

import { motion } from "framer-motion"
import TestimonialCard from "@/components/ui/testimonial-card"
import SectionHeading from "@/components/ui/section-heading"

export default function TestimonialsSection() {
  // Testimonials data
  const testimonials = [
    {
      quote:
        "SoftSell helped us recover over $50,000 from unused enterprise licenses. The process was seamless and their valuation exceeded our expectations.",
      name: "Sarah Johnson",
      role: "CTO",
      company: "TechGrowth Inc.",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "As we transitioned to cloud solutions, we had dozens of unused licenses. SoftSell made it incredibly easy to convert them to cash that we reinvested in our business.",
      name: "Michael Chen",
      role: "IT Director",
      company: "Innovate Solutions",
      rating: 5,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="testimonials" className="container mx-auto px-4 py-24 relative z-10 animate-on-scroll">
      <SectionHeading
        badge="Success Stories"
        title="What Our Customers Say"
        description="Don't just take our word for it. Here's what businesses like yours have to say about SoftSell."
      />

      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 * index }}
          >
            <TestimonialCard
              quote={testimonial.quote}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
