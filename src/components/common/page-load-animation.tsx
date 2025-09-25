'use client'

import { useEffect, useState } from 'react'

interface PageLoadAnimationProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  animation?: 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'fade-scale' | 'bounce-in'
  className?: string
}

export default function PageLoadAnimation({ 
  children, 
  delay = 0, 
  duration = 600,
  animation = 'slide-up',
  className = ''
}: PageLoadAnimationProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Trigger animation after component mounts with specified delay
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out'
    const durationClass = duration === 300 ? 'duration-300' : 
                          duration === 500 ? 'duration-500' : 
                          duration === 700 ? 'duration-700' : 
                          duration === 800 ? 'duration-800' : 
                          duration === 1000 ? 'duration-1000' : 'duration-600'

    if (isLoaded) {
      return `${baseClasses} ${durationClass} opacity-100 transform translate-y-0 translate-x-0 scale-100 rotate-0`
    }

    switch (animation) {
      case 'slide-up':
        return `${baseClasses} ${durationClass} opacity-0 transform translate-y-12`
      case 'slide-down':
        return `${baseClasses} ${durationClass} opacity-0 transform -translate-y-12`
      case 'slide-left':
        return `${baseClasses} ${durationClass} opacity-0 transform translate-x-12`
      case 'slide-right':
        return `${baseClasses} ${durationClass} opacity-0 transform -translate-x-12`
      case 'fade-scale':
        return `${baseClasses} ${durationClass} opacity-0 transform scale-90`
      case 'bounce-in':
        return `${baseClasses} ${durationClass} opacity-0 transform scale-75`
      default:
        return `${baseClasses} ${durationClass} opacity-0 transform translate-y-12`
    }
  }

  return (
    <div className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  )
}