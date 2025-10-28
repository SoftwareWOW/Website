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
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <HeroGradientAnimation />
      <RevealWrapper className="container text-center">
        <p className="mb-3 text-sm uppercase tracking-[3px] opacity-80">Something amazing is on the way</p>

        <h1 className="mb-6 text-5xl font-normal md:text-7xl">
          {title} <i className="font-instrument">{subtitle}</i>
        </h1>

        <p className="mx-auto mb-10 max-w-lg text-base opacity-80 md:text-lg">{description}</p>

        {url && <p className="mt-12 text-xs opacity-60 md:text-sm">{url}</p>}
      </RevealWrapper>
    </section>
  )
}
