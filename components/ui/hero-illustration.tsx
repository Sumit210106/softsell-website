"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useState, useEffect } from "react"

export default function HeroIllustration() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  if (!mounted) return null

  return (
    <div className="relative mx-auto max-w-4xl">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 via-secondary/20 to-background rounded-2xl blur-2xl"></div>

      {/* Main container */}
      <div className="bg-card/50 backdrop-blur-md border border-border/40 rounded-2xl p-8 shadow-glow-md">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Dashboard visualization */}
          <motion.div
            variants={itemVariants}
            className="col-span-2 bg-background/40 rounded-xl p-6 border border-border/30"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex space-x-2">
                <div className="w-6 h-6 rounded-md bg-primary/20"></div>
                <div className="w-6 h-6 rounded-md bg-primary/20"></div>
              </div>
            </div>

            <div className="flex justify-between mb-4">
              <div className="h-8 w-24 bg-primary/20 rounded-md"></div>
              <div className="h-8 w-32 bg-secondary/20 rounded-md"></div>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="h-20 bg-primary/10 rounded-lg flex items-center justify-center">
                <div className="h-10 w-10 rounded-full bg-primary/30"></div>
              </div>
              <div className="h-20 bg-secondary/10 rounded-lg flex items-center justify-center">
                <div className="h-10 w-10 rounded-full bg-secondary/30"></div>
              </div>
              <div className="h-20 bg-accent/10 rounded-lg flex items-center justify-center">
                <div className="h-10 w-10 rounded-full bg-accent/30"></div>
              </div>
            </div>

            <div className="h-40 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4">
              <div className="flex justify-between mb-2">
                <div className="h-4 w-20 bg-primary/20 rounded"></div>
                <div className="h-4 w-12 bg-secondary/20 rounded"></div>
              </div>
              <div className="flex items-end h-24 space-x-2 pt-4">
                <motion.div
                  className="w-1/6 bg-primary/40 rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: "40%" }}
                  transition={{ duration: 1, delay: 0.5 }}
                ></motion.div>
                <motion.div
                  className="w-1/6 bg-primary/60 rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: "65%" }}
                  transition={{ duration: 1, delay: 0.6 }}
                ></motion.div>
                <motion.div
                  className="w-1/6 bg-primary/80 rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: "85%" }}
                  transition={{ duration: 1, delay: 0.7 }}
                ></motion.div>
                <motion.div
                  className="w-1/6 bg-secondary/40 rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: "75%" }}
                  transition={{ duration: 1, delay: 0.8 }}
                ></motion.div>
                <motion.div
                  className="w-1/6 bg-secondary/60 rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: "55%" }}
                  transition={{ duration: 1, delay: 0.9 }}
                ></motion.div>
                <motion.div
                  className="w-1/6 bg-secondary/80 rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: "35%" }}
                  transition={{ duration: 1, delay: 1 }}
                ></motion.div>
              </div>
            </div>
          </motion.div>

          {/* License details panel */}
          <motion.div
            variants={itemVariants}
            className="bg-background/40 rounded-xl p-6 border border-border/30 flex flex-col"
          >
            <div className="mb-4">
              <div className="h-6 w-24 bg-primary/20 rounded mb-2"></div>
              <div className="h-10 w-full bg-background/60 rounded border border-border/30"></div>
            </div>

            <div className="mb-4">
              <div className="h-6 w-32 bg-primary/20 rounded mb-2"></div>
              <div className="h-10 w-full bg-background/60 rounded border border-border/30"></div>
            </div>

            <div className="mb-4">
              <div className="h-6 w-28 bg-primary/20 rounded mb-2"></div>
              <div className="h-10 w-full bg-background/60 rounded border border-border/30"></div>
            </div>

            <div className="mb-6">
              <div className="h-6 w-20 bg-primary/20 rounded mb-2"></div>
              <div className="h-20 w-full bg-background/60 rounded border border-border/30"></div>
            </div>

            <motion.div
              className="mt-auto h-12 bg-gradient-to-r from-primary to-secondary rounded-lg"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.2 }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
