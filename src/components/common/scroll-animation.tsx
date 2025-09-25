'use client'

import { useEffect, useRef, useState } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale' | 'flip'
}

export default function ScrollAnimation({ 
  children, 
  className = '', 
  delay = 0, 
  duration = 600,
  animation = 'fade-up' 
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setIsVisible(true)
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (elementRef.current) {
      observer.observe(elementRef.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out'
    const durationClass = duration === 300 ? 'duration-300' : 
                          duration === 500 ? 'duration-500' : 
                          duration === 700 ? 'duration-700' : 
                          duration === 1000 ? 'duration-1000' : 'duration-300'

    if (isVisible) {
      return `${baseClasses} ${durationClass} opacity-100 transform translate-y-0 translate-x-0 scale-100 rotate-0`
    }

    switch (animation) {
      case 'fade-up':
        return `${baseClasses} ${durationClass} opacity-0 transform translate-y-8`
      case 'fade-down':
        return `${baseClasses} ${durationClass} opacity-0 transform -translate-y-8`
      case 'fade-left':
        return `${baseClasses} ${durationClass} opacity-0 transform translate-x-8`
      case 'fade-right':
        return `${baseClasses} ${durationClass} opacity-0 transform -translate-x-8`
      case 'scale':
        return `${baseClasses} ${durationClass} opacity-0 transform scale-95`
      case 'flip':
        return `${baseClasses} ${durationClass} opacity-0 transform rotateY-90`
      default:
        return `${baseClasses} ${durationClass} opacity-0 transform translate-y-8`
    }
  }

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  )
}