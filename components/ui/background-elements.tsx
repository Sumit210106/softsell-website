"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Code, Cpu, Database, Globe } from "lucide-react"
import { useEffect, useState } from "react"

export default function BackgroundElements({ mounted, theme }) {
  const { scrollYProgress } = useScroll()
  const [isClient, setIsClient] = useState(false)

  // For parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -300])

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>

      {/* Light theme specific elements */}
      <div className={`transition-opacity duration-1000 ${mounted && theme === "dark" ? "opacity-0" : "opacity-100"}`}>
        {/* Geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl"></div>

        {/* Decorative elements */}
        <div className="absolute top-[15%] right-[10%] w-64 h-64 rounded-full border border-primary/20 animate-rotate-slow opacity-30"></div>
        <div
          className="absolute top-[25%] right-[15%] w-32 h-32 rounded-full border border-secondary/20 animate-rotate-slow opacity-30"
          style={{ animationDirection: "reverse", animationDuration: "20s" }}
        ></div>

        {/* Tech-themed elements */}
        <svg
          className="absolute top-[30%] left-[5%] w-96 h-96 text-primary/5 animate-float"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M45.3,-51.2C58.3,-40.3,68.8,-25.3,71.3,-8.7C73.9,7.9,68.5,26.1,57.8,39.8C47.1,53.5,31.1,62.8,13.3,67.2C-4.5,71.5,-24.1,70.9,-39.3,62.3C-54.5,53.7,-65.3,37.1,-70.1,18.5C-74.9,-0.1,-73.7,-20.7,-64.3,-35.3C-54.9,-49.9,-37.3,-58.5,-20.4,-67.1C-3.5,-75.7,12.7,-84.3,26.8,-79.4C40.9,-74.5,53,-62.1,45.3,-51.2Z"
            transform="translate(100 100)"
          />
        </svg>

        <svg
          className="absolute bottom-[10%] right-[15%] w-64 h-64 text-secondary/5 animate-float"
          style={{ animationDelay: "2s" }}
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="currentColor"
            d="M47.7,-57.2C59.5,-45.7,65.8,-28.4,68.2,-10.8C70.6,6.8,69.2,24.9,60.2,38.2C51.2,51.6,34.6,60.2,17.4,64.8C0.3,69.3,-17.4,69.8,-32.1,62.6C-46.8,55.3,-58.5,40.3,-65.2,23.2C-71.9,6.1,-73.5,-13.1,-66.3,-27.9C-59.1,-42.7,-43,-53.1,-27.2,-62.9C-11.3,-72.7,4.3,-81.9,19.1,-79.4C33.9,-76.9,47.9,-62.8,47.7,-57.2Z"
            transform="translate(100 100)"
          />
        </svg>

        {/* Grid pattern */}
        <svg className="absolute inset-0 w-full h-full z-0 opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-light" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-light)" />
        </svg>

        {/* Shimmer effect */}
        <div className="absolute inset-0 animate-shimmer"></div>
      </div>

      {/* Dark theme specific elements */}
      <div className={`transition-opacity duration-1000 ${mounted && theme === "dark" ? "opacity-100" : "opacity-0"}`}>
        {/* Glowing orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl"></div>

        {/* Star field */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
                opacity: Math.random() * 0.5 + 0.25,
                animation: `pulse-slow ${Math.random() * 3 + 2}s infinite`,
              }}
            />
          ))}
        </div>

        {/* Tech circuit lines */}
        <svg className="absolute inset-0 w-full h-full z-0 opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 0 50 L 50 50 L 50 0" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <path d="M 50 100 L 50 50 L 100 50" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="2" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>

        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/30 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-secondary/30 filter blur-3xl"></div>

        {/* Shimmer effect */}
        <div className="absolute inset-0 animate-shimmer"></div>
      </div>

      {/* Floating tech icons with parallax effect */}
      <div className="absolute top-1/4 left-[5%] opacity-20 dark:opacity-10">
        <motion.div style={{ y: y1 }}>
          <Code className="h-12 w-12 text-primary/60" />
        </motion.div>
      </div>
      <div className="absolute bottom-1/4 right-[10%] opacity-20 dark:opacity-10">
        <motion.div style={{ y: y2 }}>
          <Database className="h-16 w-16 text-secondary/60" />
        </motion.div>
      </div>
      <div className="absolute top-1/2 right-[5%] opacity-20 dark:opacity-10">
        <motion.div style={{ y: y3 }}>
          <Cpu className="h-10 w-10 text-accent/60" />
        </motion.div>
      </div>
      <div className="absolute bottom-1/3 left-[15%] opacity-20 dark:opacity-10">
        <motion.div style={{ y: y2 }}>
          <Globe className="h-14 w-14 text-primary/60" />
        </motion.div>
      </div>
    </div>
  )
}
