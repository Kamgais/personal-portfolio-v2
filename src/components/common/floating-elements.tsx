'use client'

import { useEffect, useState } from 'react'

export default function FloatingElements() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Start animations after a short delay
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Floating circles */}
      <div className={`absolute top-20 left-10 w-20 h-20 bg-blue-400/10 dark:bg-blue-300/10 rounded-full transition-all duration-1000 ${isLoaded ? 'opacity-100 animate-pulse' : 'opacity-0 scale-0'}`}></div>
      <div className={`absolute top-40 right-16 w-16 h-16 bg-purple-400/10 dark:bg-purple-300/10 rounded-full transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 animate-bounce' : 'opacity-0 scale-0'}`} style={{animationDelay: '1s', animationDuration: '3s'}}></div>
      <div className={`absolute bottom-40 left-20 w-12 h-12 bg-green-400/10 dark:bg-green-300/10 rounded-full transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 animate-ping' : 'opacity-0 scale-0'}`} style={{animationDelay: '2s'}}></div>
      <div className={`absolute bottom-20 right-32 w-24 h-24 bg-yellow-400/10 dark:bg-yellow-300/10 rounded-full transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 animate-pulse' : 'opacity-0 scale-0'}`} style={{animationDelay: '3s'}}></div>
      
      {/* Floating geometric shapes */}
      <div className={`absolute top-1/3 left-1/4 w-8 h-8 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rotate-45 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 animate-spin' : 'opacity-0 scale-0'}`} style={{animationDuration: '8s'}}></div>
      <div className={`absolute top-2/3 right-1/4 w-6 h-6 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rotate-12 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 animate-bounce' : 'opacity-0 scale-0'}`} style={{animationDelay: '1.5s', animationDuration: '4s'}}></div>
      
      {/* Moving gradients */}
      <div className={`absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/5 via-purple-400/5 to-pink-400/5 rounded-full blur-xl transition-all duration-1500 delay-700 ${isLoaded ? 'opacity-100 animate-pulse' : 'opacity-0 scale-50'}`}></div>
      <div className={`absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-green-400/5 via-blue-400/5 to-purple-400/5 rounded-full blur-2xl transition-all duration-1500 delay-900 ${isLoaded ? 'opacity-100 animate-bounce' : 'opacity-0 scale-50'}`} style={{animationDuration: '6s'}}></div>
    </div>
  )
}