import LayoutOne from '@/components/shared/LayoutOne'
import Hero from '@/components/homepage-03/HeroV3'
import Portfolio from '@/components/homepage-03/PortfolioV3'
import About from '@/components/shared/About'
import ClientsV3 from '@/components/shared/ClientsV3'
import ServicesV8 from '@/components/shared/ServicesV8'
import Testimonial from '@/components/homepage-03/Clients'

export const metadata = {
  title: 'Branch 2 | SoftwareWOW',
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
