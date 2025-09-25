'use client'

import { useEffect, useState } from 'react'

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Layer 1 - Slowest */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${scrollY * 0.1}px)`,
        }}
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 via-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-green-400/10 via-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Layer 2 - Medium speed */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-2xl"></div>
      </div>
      
      {/* Layer 3 - Fastest */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      >
        <div className="absolute top-60 left-1/3 w-20 h-20 bg-blue-400/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-60 right-1/3 w-24 h-24 bg-purple-400/30 rounded-full blur-xl"></div>
      </div>
    </div>
  )
}