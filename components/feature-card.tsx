"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  title: string
  description: string
  icon: ReactNode
}

export default function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      transition={{ duration: 0.3 }}
      className="bg-card/50 backdrop-blur-md p-8 rounded-xl shadow-md border border-border/40 hover:border-primary/30 transition-all h-full group"
    >
      <div className="bg-gradient-to-br from-primary/20 to-secondary/10 p-4 rounded-xl w-fit mb-6 group-hover:from-primary/30 group-hover:to-secondary/20 transition-all">
        <div className="text-primary">{icon}</div>
      </div>
      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}
