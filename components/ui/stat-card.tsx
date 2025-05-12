"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface StatCardProps {
  icon: ReactNode
  value: string
  label: string
}

export default function StatCard({ icon, value, label }: StatCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      className="flex flex-col items-center p-6 rounded-xl bg-gradient-to-b from-background/80 to-background/40 border border-border/30 hover:border-primary/30 transition-all group"
    >
      <div className="bg-gradient-to-br from-primary/20 to-secondary/10 p-3 rounded-full mb-4 shadow-glow-sm group-hover:shadow-glow-md transition-all">
        <div className="text-primary">{icon}</div>
      </div>
      <motion.h3
        className="text-2xl font-bold mb-1 group-hover:text-primary transition-colors"
        whileHover={{ scale: 1.05 }}
      >
        {value}
      </motion.h3>
      <p className="text-muted-foreground text-sm">{label}</p>
    </motion.div>
  )
}
