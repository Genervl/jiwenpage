"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { SmoothScroll } from "@/components/smooth-scroll"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Close menu when pressing escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      // Prevent scrolling when menu is open
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      // Restore scrolling when menu is closed
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu panel */}
          <motion.div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl z-50 flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="font-bold text-lg">Menu</h2>
              <Button variant="ghost" size="icon" onClick={onClose} aria-label="Close menu">
                <X className="h-5 w-5" />
              </Button>
            </div>

            <nav className="flex flex-col p-4 space-y-4">
              <SmoothScroll
                href="#about"
                className="text-base font-medium py-2 px-4 rounded-md hover:bg-pink-50 hover:text-pink-600 transition-colors"
                onClick={onClose}
              >
                About Us
              </SmoothScroll>
              <SmoothScroll
                href="#mission"
                className="text-base font-medium py-2 px-4 rounded-md hover:bg-pink-50 hover:text-pink-600 transition-colors"
                onClick={onClose}
              >
                Mission & Vision
              </SmoothScroll>
              <SmoothScroll
                href="#services"
                className="text-base font-medium py-2 px-4 rounded-md hover:bg-pink-50 hover:text-pink-600 transition-colors"
                onClick={onClose}
              >
                What We Offer
              </SmoothScroll>
              <SmoothScroll
                href="#contact"
                className="text-base font-medium py-2 px-4 rounded-md hover:bg-pink-50 hover:text-pink-600 transition-colors"
                onClick={onClose}
              >
                Contact
              </SmoothScroll>
            </nav>

            <div className="mt-auto p-4 border-t">
              <Button asChild className="w-full" onClick={onClose}>
                <SmoothScroll href="#join" onClick={onClose}>
                  Join Network
                </SmoothScroll>
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
