"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import HeroIllustration from "@/components/ui/hero-illustration"

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32 flex flex-col items-center text-center relative z-10 animate-on-scroll">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center px-3 py-1 rounded-full border border-border/60 bg-muted/30 text-sm mb-6 backdrop-blur-sm shadow-glow-xs"
      >
        <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
        <span>Trusted by 500+ companies worldwide</span>
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold tracking-tight max-w-4xl mb-6"
      >
        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-secondary">
          Turn Unused Software
        </span>
        <br />
        <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-secondary via-primary/90 to-primary">
          Licenses Into Cash
        </span>
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
      >
        SoftSell helps businesses recover value from unused software licenses with quick valuations, seamless transfers,
        and fast payments.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-secondary px-8 py-4 text-base font-medium text-primary-foreground shadow-glow-md transition-all hover:shadow-glow-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Sell My Licenses <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a
            href="#how-it-works"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background/50 backdrop-blur-sm px-8 py-4 text-base font-medium shadow-sm transition-colors hover:bg-accent/10 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Learn How It Works
          </a>
        </motion.div>
      </motion.div>

      {/* Hero Illustration */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-16 w-full max-w-5xl mx-auto"
      >
        <HeroIllustration />
      </motion.div>
    </section>
  )
}
