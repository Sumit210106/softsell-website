"use client"

import { Star } from "lucide-react"
import { motion } from "framer-motion"

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
  rating: number
  image?: string
}

export default function TestimonialCard({ quote, name, role, company, rating, image }: TestimonialCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-card/50 backdrop-blur-md p-8 rounded-xl shadow-glow-sm border border-border/40 hover:border-primary/30 hover:shadow-glow-md transition-all group"
    >
      {/* Rating stars */}
      <div className="flex mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? "text-yellow-500 fill-yellow-500" : "text-muted-foreground"}`}
          />
        ))}
      </div>

      {/* Quote */}
      <motion.blockquote
        className="text-xl mb-8 italic leading-relaxed"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        "{quote}"
      </motion.blockquote>

      {/* Author info */}
      <div className="flex items-center gap-4">
        {image ? (
          <div className="relative h-14 w-14 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/40 transition-colors">
            <div className="h-14 w-14 bg-primary/20 rounded-full flex items-center justify-center">
              {name.charAt(0)}
            </div>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-primary/20 to-secondary/10 text-primary font-bold rounded-full h-14 w-14 flex items-center justify-center text-xl group-hover:from-primary/30 group-hover:to-secondary/20 transition-all">
            {name.charAt(0)}
          </div>
        )}
        <div>
          <p className="font-semibold text-lg group-hover:text-primary transition-colors">{name}</p>
          <p className="text-muted-foreground">
            {role}, {company}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
