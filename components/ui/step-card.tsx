"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StepCardProps {
  number: number
  title: string
  description: string
  icon: ReactNode
}

export default function StepCard({ number, title, description, icon }: StepCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center text-center p-8 group"
    >
      <div className="relative mb-8">
        <motion.div
          className="bg-gradient-to-br from-primary/20 to-secondary/10 p-6 rounded-full group-hover:from-primary/30 group-hover:to-secondary/20 transition-all shadow-glow-sm group-hover:shadow-glow-md"
          whileHover={{ rotate: [0, -5, 5, -5, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-primary">{icon}</div>
        </motion.div>
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-secondary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-glow-sm">
          {number}
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  )
}
