"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    let valid = true
    const newErrors = {
      name: "",
      email: "",
      company: "",
      licenseType: "",
      message: "",
    }

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
      valid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
      valid = false
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required"
      valid = false
    }

    if (!formData.licenseType) {
      newErrors.licenseType = "License type is required"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      licenseType: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validateForm()) {
      setIsSubmitting(true)

      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted:", formData)
        setIsSubmitting(false)
        setIsSubmitted(true)

        // Reset form after submission
        setFormData({
          name: "",
          email: "",
          company: "",
          licenseType: "",
          message: "",
        })
      }, 1500)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center justify-center p-12 text-center bg-card/50 backdrop-blur-md rounded-xl border border-border/40 shadow-xl"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="bg-gradient-to-br from-primary/20 to-secondary/10 p-5 rounded-full mb-6"
        >
          <CheckCircle2 className="h-12 w-12 text-primary" />
        </motion.div>
        <h3 className="text-2xl font-bold mb-3">Thank You!</h3>
        <p className="text-muted-foreground mb-8 max-w-md">
          We've received your information and will get back to you with a valuation within 24 hours.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          size="lg"
          className="gap-2 bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20"
        >
          Submit Another License <ArrowRight className="h-4 w-4" />
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-card/50 backdrop-blur-md p-8 rounded-xl shadow-xl border border-border/40"
      >
        <div className="space-y-2">
          <Label htmlFor="name" className="text-base">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="John Doe"
            value={formData.name}
            onChange={handleChange}
            className={`${errors.name ? "border-destructive" : ""} h-12 text-base focus:border-primary/50 focus:ring-primary/50`}
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-base">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@company.com"
            value={formData.email}
            onChange={handleChange}
            className={`${errors.email ? "border-destructive" : ""} h-12 text-base focus:border-primary/50 focus:ring-primary/50`}
          />
          {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-base">
            Company Name
          </Label>
          <Input
            id="company"
            name="company"
            placeholder="Acme Inc."
            value={formData.company}
            onChange={handleChange}
            className={`${errors.company ? "border-destructive" : ""} h-12 text-base focus:border-primary/50 focus:ring-primary/50`}
          />
          {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="licenseType" className="text-base">
            License Type
          </Label>
          <Select onValueChange={handleSelectChange} value={formData.licenseType}>
            <SelectTrigger
              className={`${errors.licenseType ? "border-destructive" : ""} h-12 text-base focus:border-primary/50 focus:ring-primary/50`}
            >
              <SelectValue placeholder="Select license type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="enterprise">Enterprise Software</SelectItem>
              <SelectItem value="productivity">Productivity Suite</SelectItem>
              <SelectItem value="design">Design & Creative</SelectItem>
              <SelectItem value="development">Development Tools</SelectItem>
              <SelectItem value="security">Security Software</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.licenseType && <p className="text-sm text-destructive">{errors.licenseType}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-base">
            Additional Details
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Please provide any additional information about your licenses (quantity, version, etc.)"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="text-base focus:border-primary/50 focus:ring-primary/50"
          />
        </div>

        <Button
          type="submit"
          className="w-full h-12 text-base font-medium bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/20 transition-all"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </>
          ) : (
            <>
              Get My Valuation <ArrowRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </form>
    </motion.div>
  )
}
