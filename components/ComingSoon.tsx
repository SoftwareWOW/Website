'use client'

import { useEffect, useState } from 'react'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import RevealWrapper from '@/components/animation/RevealWrapper'

interface ComingSoonProps {
  title?: string
  subtitle?: string
  description?: string
  url?: string
}

export default function ComingSoon({
  title = 'Coming',
  subtitle = 'Soon',
  description = 'We’re crafting something incredible. Stay tuned to be among the first to experience it.',
  url,
}: ComingSoonProps) {
  const [currentSubdomain, setCurrentSubdomain] = useState<string | null>(null)
  const [availableSubdomains, setAvailableSubdomains] = useState<string[]>([])

  useEffect(() => {
    const hostname = window.location.hostname
    const parts = hostname.split('.')
    const subdomain = parts.length === 3 ? parts[0] : ''
    setCurrentSubdomain(subdomain)

    const tenants = [
      'host',
      'marketing',
      'website',
      'design',
      'events',
      'hub',
      'intelligence',
      'accelerate',
      'social',
      'software',
    ]

    const filtered = tenants.filter((t) => t !== subdomain)
    setAvailableSubdomains(filtered)
  }, [])

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 md:px-12">
      <RevealWrapper className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-10 md:flex-row">
        <div className="max-w-2xl text-center md:text-left">
          <HeroGradientAnimation />

          <p className="mb-3 text-sm uppercase tracking-[3px] opacity-80">Something amazing is on the way</p>

          <h1 className="mb-6 text-5xl font-normal md:text-7xl">
            {title} <i className="font-instrument">{subtitle}</i>
          </h1>

          <p className="mb-10 max-w-lg text-base opacity-80 md:text-lg">{description}</p>

          {url ? (
            <p className="mt-8 text-xs opacity-60 md:text-sm">{url}</p>
          ) : (
            currentSubdomain && (
              <p className="mt-8 text-xs opacity-60 md:text-sm">
                You’re currently viewing:
                <span className="font-semibold">{currentSubdomain || 'wow.onl'}</span>
              </p>
            )
          )}
        </div>

        {availableSubdomains.length > 0 && (
          <div className="flex flex-col items-start justify-center gap-2 border-l border-white/20 pl-6 text-sm md:pl-10">
            {availableSubdomains.map((sub) => (
              <a
                key={sub}
                href={`https://${sub}.wow.onl`}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-70 transition-all duration-200 ease-in hover:translate-x-2 hover:opacity-100">
                {sub}.wow.onl
              </a>
            ))}
          </div>
        )}
      </RevealWrapper>
    </section>
  )
}
