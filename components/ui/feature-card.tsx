"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-card/50 backdrop-blur-md p-8 rounded-xl shadow-glow-sm border border-border/40 hover:border-primary/30 hover:shadow-glow-md transition-all h-full group"
    >
      <motion.div
        className="bg-gradient-to-br from-primary/20 to-secondary/10 p-4 rounded-xl w-fit mb-6 group-hover:from-primary/30 group-hover:to-secondary/20 transition-all"
        whileHover={{ rotate: 5 }}
      >
        <div className="text-primary">{icon}</div>
      </motion.div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}
