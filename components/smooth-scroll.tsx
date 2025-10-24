"use client"

import type React from "react"
import type { ReactNode } from "react"

interface SmoothScrollProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export function SmoothScroll({ href, children, className = "", onClick }: SmoothScrollProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // Get the target element
    const targetId = href.replace("#", "")
    const targetElement = document.getElementById(targetId)

    if (targetElement) {
      // Scroll to the target element
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Offset for header
        behavior: "smooth",
      })

      // Update URL without reloading the page
      window.history.pushState({}, "", href)
    }

    // Call the onClick handler if provided
    if (onClick) {
      onClick()
    }
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
