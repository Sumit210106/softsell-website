"use client"

import { motion } from "framer-motion"
import { BarChart, CheckCircle, Award } from "lucide-react"
import StatCard from "@/components/ui/stat-card"

export default function StatsSection() {
  // Stats data
  const stats = [
    {
      icon: <BarChart className="h-8 w-8" />,
      value: "$12M+",
      label: "Recovered Value",
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      value: "5,000+",
      label: "Licenses Sold",
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: "98%",
      label: "Satisfaction Rate",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-12 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-4xl"
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 via-secondary/20 to-background rounded-2xl blur-2xl"></div>

        {/* Stats container */}
        <div className="bg-card/50 backdrop-blur-md border border-border/40 rounded-2xl p-8 shadow-glow-md">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <StatCard icon={stat.icon} value={stat.value} label={stat.label} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
