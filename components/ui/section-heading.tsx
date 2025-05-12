"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  badge: string
  title: string
  description: string
}

export default function SectionHeading({ badge, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center px-3 py-1 rounded-full border border-border/60 bg-muted/30 text-sm mb-4 backdrop-blur-sm shadow-glow-xs">
        <span className="text-primary font-medium">{badge}</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{description}</p>
    </motion.div>
  )
}
