import React, { useRef, useEffect, useState } from 'react'
import { mediaHighlights } from '../data/mediaHighlights'
import { useTheme } from '../contexts/ThemeContext'

const MediaHighlights = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [isUserInteracting, setIsUserInteracting] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const { effectiveTheme } = useTheme()
  
  // Duplicate the array to create seamless infinite scroll
  const duplicatedHighlights = [...mediaHighlights, ...mediaHighlights]

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container || isUserInteracting) return

    const scrollSpeed = 0.64 // pixels per frame (20% slower than 0.8px/frame)
    const maxScroll = container.scrollWidth / 2 // Half way point for seamless loop

    const autoScroll = () => {
      if (!isUserInteracting && container) {
        const newPosition = scrollPosition + scrollSpeed
        
        if (newPosition >= maxScroll) {
          // Reset to beginning for seamless loop
          container.scrollLeft = 0
          setScrollPosition(0)
        } else {
          container.scrollLeft = newPosition
          setScrollPosition(newPosition)
        }
      }
    }

    const intervalId = setInterval(autoScroll, 16) // ~60fps

    return () => clearInterval(intervalId)
  }, [scrollPosition, isUserInteracting])

  const handleUserInteractionStart = () => {
    setIsUserInteracting(true)
  }

  const handleUserInteractionEnd = () => {
    // Resume auto-scroll after a short delay
    setTimeout(() => {
      setIsUserInteracting(false)
      // Update scroll position to current position when resuming
      if (scrollContainerRef.current) {
        setScrollPosition(scrollContainerRef.current.scrollLeft)
      }
    }, 2000) // 2 second delay before resuming auto-scroll
  }

  return (
    <div className="py-16 bg-surface-50 dark:bg-surface-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading text-surface-900 dark:text-surface-100 mb-4">
            Featured In
          </h2>
          <p className="text-xl font-body text-surface-600 dark:text-surface-400 max-w-2xl mx-auto">
            Expertise that's been recognized by leading media outlets
          </p>
        </div>

        {/* Scrolling Media Logos */}
        <div className="relative">
          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-surface-50 dark:from-surface-900 to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-surface-50 dark:from-surface-900 to-transparent pointer-events-none z-10"></div>
          
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            onMouseEnter={handleUserInteractionStart}
            onMouseLeave={handleUserInteractionEnd}
            onTouchStart={handleUserInteractionStart}
            onTouchEnd={handleUserInteractionEnd}
            onScroll={() => {
              if (isUserInteracting && scrollContainerRef.current) {
                setScrollPosition(scrollContainerRef.current.scrollLeft)
              }
            }}
          >
            {duplicatedHighlights.map((highlight, index) => (
              <a
                key={`${highlight.id}-${index}`}
                href={highlight.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-8 transition-all duration-300 hover:scale-110 group whitespace-nowrap"
                title={highlight.description}
              >
                <img
                  src={highlight.logo}
                  alt={`${highlight.name} logo - EXERGY featured in ${highlight.name}`}
                  className={`${highlight.id === 'imagine-if' ? 'h-8' : 'h-8'} w-auto object-contain transition-all duration-300 ${
                    highlight.id === 'TFTC'
                      ? effectiveTheme === 'dark'
                        ? 'filter invert brightness-50 opacity-60 group-hover:invert group-hover:brightness-100 group-hover:opacity-100'
                        : 'filter-none brightness-50 opacity-60 group-hover:filter-none group-hover:brightness-100 group-hover:opacity-100'
                      : 'filter grayscale brightness-50 opacity-60 group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100 dark:brightness-100 dark:opacity-70 dark:group-hover:opacity-100'
                  }`}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default MediaHighlights