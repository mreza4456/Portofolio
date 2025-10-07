"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export function ThemeTransition() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        className="fixed inset-0 bg-background z-[9999] pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      />
    </AnimatePresence>
  )
}
