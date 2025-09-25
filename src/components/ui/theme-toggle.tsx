"use client"

import { useTheme } from '@/contexts/theme-context'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isLight = theme === 'light'

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        onClick={toggleTheme}
        className="group relative p-3 rounded-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-2 border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Toggle theme"
      >
        {/* Lamp Base */}
        <div className="relative">
          {/* Lamp Stand */}
          <div className="absolute left-1/2 top-6 w-0.5 h-4 bg-gradient-to-b from-amber-600 to-amber-800 dark:from-gray-600 dark:to-gray-800 transform -translate-x-1/2 transition-colors duration-300"></div>
          
          {/* Lamp Base */}
          <div className="absolute left-1/2 top-10 w-3 h-1.5 bg-amber-800 dark:bg-gray-800 rounded-full transform -translate-x-1/2 transition-colors duration-300"></div>

          {/* Light Bulb */}
          <motion.div
            className={`relative w-6 h-6 rounded-full transition-all duration-500 ${
              isLight
                ? 'bg-gradient-to-br from-yellow-200 via-yellow-300 to-amber-400 shadow-[0_0_20px_rgba(251,191,36,0.6)]'
                : 'bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 shadow-none'
            }`}
            animate={{
              scale: isLight ? 1.1 : 1,
              boxShadow: isLight
                ? '0 0 20px rgba(251,191,36,0.6), 0 0 40px rgba(251,191,36,0.3)'
                : '0 0 0px rgba(0,0,0,0)'
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Bulb Filament Lines */}
            <div className={`absolute inset-0 rounded-full ${isLight ? 'opacity-60' : 'opacity-30'} transition-opacity duration-300`}>
              <div className="absolute top-2 left-2 w-2 h-0.5 bg-amber-600 dark:bg-gray-700 rounded-full transform rotate-45"></div>
              <div className="absolute top-2 right-2 w-2 h-0.5 bg-amber-600 dark:bg-gray-700 rounded-full transform -rotate-45"></div>
              <div className="absolute bottom-2 left-1/2 w-2 h-0.5 bg-amber-600 dark:bg-gray-700 rounded-full transform -translate-x-1/2"></div>
            </div>

            {/* Glowing Effect */}
            {isLight && (
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200/20 to-amber-300/20"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.1, 0.3]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            )}
          </motion.div>

          {/* Light Rays (only when light theme) */}
          {isLight && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-0.5 h-3 bg-gradient-to-t from-transparent to-yellow-400/60"
                  style={{
                    top: '-6px',
                    left: '50%',
                    transformOrigin: '50% 18px',
                    transform: `translateX(-50%) rotate(${i * 45}deg)`
                  }}
                  animate={{
                    opacity: [0.3, 0.8, 0.3],
                    scaleY: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </>
          )}

          {/* Pull Chain */}
          <div className="absolute left-1/2 top-7 w-0.5 h-2 bg-gray-400 dark:bg-gray-600 transform -translate-x-1/2 transition-colors duration-300"></div>
          <div className="absolute left-1/2 top-8 w-1 h-1 bg-gray-500 dark:bg-gray-500 rounded-full transform -translate-x-1/2 transition-colors duration-300"></div>
        </div>

        {/* Tooltip */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-xs font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          {isLight ? 'Turn off the light' : 'Turn on the light'}
          <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 dark:bg-white rotate-45"></div>
        </div>
      </button>
    </div>
  )
}