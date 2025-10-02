import LayoutOne from '@/components/shared/LayoutOne'
import Hero from '@/components/homepage-02/HeroV2'
import Portfolio from '@/components/homepage-02/PortfolioV2'
import About from '@/components/shared/About'
import ClientsV3 from '@/components/shared/ClientsV3'
import ServicesV8 from '@/components/shared/ServicesV8'
import Testimonial from '@/components/homepage-02/ProcessV2'

export const metadata = {
  title: 'Branch 1 | SoftwareWOW',
}

export default function Page() {
  return (
    <LayoutOne>
      <Hero />
      <About />
      <Portfolio />
      <ClientsV3 />
      <ServicesV8 />
      <Testimonial />
    </LayoutOne>
  )
}
