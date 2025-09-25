'use client'

import { useEffect, useState } from 'react'

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    // Animation sequence
    const timer1 = setTimeout(() => setAnimationPhase(1), 500)
    const timer2 = setTimeout(() => setAnimationPhase(2), 1500)
    const timer3 = setTimeout(() => setAnimationPhase(3), 2200)
    const timer4 = setTimeout(() => setIsVisible(false), 2800)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
    }
  }, [])

  if (!isVisible) return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-500 ${animationPhase >= 3 ? 'opacity-0' : 'opacity-100'}`}>
      <div className="text-center">
        {/* Logo/Name Animation */}
        <div className="mb-8">
          <h1 className={`text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white transition-all duration-1000 ${animationPhase >= 1 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 dark:from-blue-400 dark:via-purple-400 dark:to-blue-600 bg-clip-text text-transparent">
              Cyril
            </span>
            <span className="ml-2 text-gray-700 dark:text-gray-300">
              Kamgais
            </span>
          </h1>
        </div>

        {/* Subtitle Animation */}
        <div className={`transition-all duration-1000 delay-300 ${animationPhase >= 1 ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8">
            Full-Stack Developer
          </p>
        </div>

        {/* Loading Animation */}
        <div className={`transition-all duration-1000 delay-500 ${animationPhase >= 1 ? 'opacity-100' : 'opacity-0'}`}>
          {/* Dots Loader */}
          <div className="flex justify-center space-x-2 mb-4">
            <div className={`w-3 h-3 bg-blue-500 rounded-full animate-bounce ${animationPhase >= 2 ? 'animate-none bg-green-500' : ''}`} style={{ animationDelay: '0ms' }}></div>
            <div className={`w-3 h-3 bg-purple-500 rounded-full animate-bounce ${animationPhase >= 2 ? 'animate-none bg-green-500' : ''}`} style={{ animationDelay: '150ms' }}></div>
            <div className={`w-3 h-3 bg-blue-500 rounded-full animate-bounce ${animationPhase >= 2 ? 'animate-none bg-green-500' : ''}`} style={{ animationDelay: '300ms' }}></div>
          </div>

          {/* Progress Text */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {animationPhase === 0 && 'Initializing...'}
            {animationPhase === 1 && 'Loading portfolio...'}
            {animationPhase === 2 && 'Ready! ✨'}
            {animationPhase >= 3 && 'Welcome!'}
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full transition-all duration-1000 ${animationPhase >= 1 ? 'opacity-30 animate-pulse' : 'opacity-0'}`}></div>
          <div className={`absolute top-3/4 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full transition-all duration-1000 delay-200 ${animationPhase >= 1 ? 'opacity-30 animate-ping' : 'opacity-0'}`}></div>
          <div className={`absolute top-1/2 left-1/6 w-1 h-1 bg-green-400 rounded-full transition-all duration-1000 delay-400 ${animationPhase >= 1 ? 'opacity-30 animate-bounce' : 'opacity-0'}`}></div>
          <div className={`absolute bottom-1/4 right-1/3 w-2 h-2 bg-yellow-400 rounded-full transition-all duration-1000 delay-300 ${animationPhase >= 1 ? 'opacity-30 animate-pulse' : 'opacity-0'}`}></div>
        </div>

        {/* Background Gradient */}
        <div className={`absolute inset-0 opacity-5 dark:opacity-10 transition-opacity duration-1000 ${animationPhase >= 1 ? 'opacity-5 dark:opacity-10' : 'opacity-0'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}