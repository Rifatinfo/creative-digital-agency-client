"use client";

import { motion } from 'framer-motion'

import { ArrowRight } from 'lucide-react'
import { ServiceCard } from './ServiceCard';
import { ProcessStep } from './ProcessStep';
export function BrandingPromotion() {
  const services = [
    {
      title: 'Creative Concept & Execution',
      description:
        'Translating abstract ideas into tangible, impactful campaigns.',
    },
    {
      title: 'Campaign Strategy',
      description:
        'Integrated multi-channel strategies designed to maximize reach.',
    },
    {
      title: 'Social Media Marketing',
      description:
        'Building communities and driving conversation through curated content.',
    },
    {
      title: 'Brand Identity',
      description: 'Defining the visual and verbal soul of your brand.',
    },
    {
      title: 'Logo Design',
      description:
        'Crafting iconic marks that serve as the cornerstone of your brand.',
    },
    {
      title: 'Mnemonic Sound',
      description: 'Sonic triggers that create instant brand recognition.',
    },
    {
      title: 'Pack Design',
      description: 'Structural and graphic packaging solutions that stand out.',
    },
    {
      title: 'Brand Materials',
      description: 'Comprehensive collateral systems ensuring consistency.',
    },
  ]
  const process = [
    {
      number: '01',
      title: 'Discover',
      description:
        'We immerse ourselves in your world, understanding your market, audience, and core challenges through deep research and stakeholder interviews.',
    },
    {
      number: '02',
      title: 'Strategize',
      description:
        'We build a roadmap that bridges the gap between where you are and where you need to be, defining clear KPIs and creative territories.',
    },
    {
      number: '03',
      title: 'Create',
      description:
        'Our designers and copywriters craft the visual and verbal assets that bring the strategy to life, iterating until perfection.',
    },
    {
      number: '04',
      title: 'Launch',
      description:
        'We execute the plan with precision, monitoring performance and optimizing for impact across all selected channels.',
    },
  ]
  return (
    <div className="min-h-screen bg-stone-50 text-neutral-900 font-sans selection:bg-[#c73450] selection:text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-6 sm:px-12 lg:px-24 pt-24 pb-12">
        <div className="max-w-[1600px] mx-auto w-full relative z-10">
          <motion.div
            initial={{
              opacity: 0,
              y: 100,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <h1 className="text-[12vw] sm:text-[10vw] font-bold tracking-tighter leading-[0.85] text-neutral-900 mb-8">
              BRANDING <br />
              <span className="pl-[10vw] text-[#c73450]">&</span> PROMOTION
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-16 md:mt-24 border-t border-neutral-900 pt-12">
            <div className="md:col-span-4">
              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: '100%',
                }}
                transition={{
                  duration: 1,
                  delay: 0.5,
                }}
                className="h-2 bg-[#c73450] mb-6 w-24"
              />
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 0.8,
                  duration: 0.8,
                }}
                className="text-xl sm:text-2xl font-medium leading-tight"
              >
                We build brands that define culture, not just follow it.
              </motion.p>
            </div>

            <div className="md:col-span-6 md:col-start-7">
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: 1,
                  duration: 0.8,
                }}
                className="text-lg sm:text-xl text-neutral-600 leading-relaxed"
              >
                In a noisy world, clarity is power. We strip away the
                non-essential to reveal the core truth of your business, then
                amplify it with bold design and fearless strategy.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-neutral-200 rounded-full blur-[120px] opacity-40 -z-10 translate-x-1/3 -translate-y-1/3" />
      </section>

      {/* Services Grid */}
      <section className="py-0 border-t border-neutral-200">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-neutral-200">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                index={index}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities / Differentiators */}
      <section className="py-32 px-6 sm:px-12 lg:px-24 bg-white">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4">
              <h2 className="text-5xl sm:text-7xl font-bold tracking-tighter leading-none mb-8">
                WHAT SETS <br /> US APART
              </h2>
              <div className="w-16 h-16 bg-[#c73450] rounded-full flex items-center justify-center">
                <ArrowRight className="text-white w-8 h-8 -rotate-45" />
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              {[
                {
                  title: 'Strategic Precision',
                  text: "We don't guess. Every pixel and word is backed by deep market insight and consumer psychology.",
                },
                {
                  title: 'Radical Creativity',
                  text: 'We push boundaries to create work that cuts through the noise and establishes market leadership.',
                },
                {
                  title: 'Holistic Systems',
                  text: 'We build scalable design systems that grow with your business, ensuring consistency at every scale.',
                },
                {
                  title: 'Commercial Focus',
                  text: "Design isn't just art; it's a business tool. We measure success by your growth and ROI.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: i * 0.1,
                  }}
                  className="flex flex-col gap-4"
                >
                  <div className="h-px w-full bg-neutral-200 mb-2" />
                  <h3 className="text-2xl font-bold">{item.title}</h3>
                  <p className="text-neutral-600 leading-relaxed text-lg">
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6 sm:px-12 lg:px-24 bg-stone-50">
        <div className="max-w-[1200px] mx-auto">
          <div className="mb-24">
            <h2 className="text-4xl font-mono uppercase tracking-widest text-neutral-500 mb-4">
              Our Methodology
            </h2>
            <p className="text-5xl sm:text-6xl font-bold tracking-tight max-w-3xl leading-tight">
              From chaos to clarity in four steps.
            </p>
          </div>

          <div className="flex flex-col">
            {process.map((step, index) => (
              <ProcessStep
                key={index}
                index={index}
                number={step.number}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
