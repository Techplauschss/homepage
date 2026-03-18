'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface FadeInUpProps {
  children: ReactNode;
  delay?: '0' | '200' | '400' | '500' | '600' | '700' | '1000';
}

export default function FadeInUp({ children, delay = '0' }: FadeInUpProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect() // Die Animation wird so nur 1x beim ersten Sichtbarwerden ausgeführt
        }
      },
      { threshold: 0.1 } // Löst aus, wenn 10% des Elements sichtbar sind
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  const delayClass = delay === '0' ? '' : `delay-${delay}`

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out ${delayClass} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
    >
      {children}
    </div>
  )
}