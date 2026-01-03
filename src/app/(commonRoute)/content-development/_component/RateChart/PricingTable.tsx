"use client";
import { Check } from 'lucide-react'
import Link from 'next/link';
interface PricingTableProps {
  onNavigateToCheckout?: (tierName: string) => void
}
const tiers = [
  {
    name: 'Essential',
    price: '$2,500',
    period: '/month',
    description: 'Foundational content for growing brands.',
    features: [
      '2 Long-form Articles (1,500 words)',
      '4 Blog Posts (800 words)',
      'Basic SEO Optimization',
      'Monthly Content Calendar',
      '1 Revision Round',
    ],
    cta: 'Start Essential',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$4,800',
    period: '/month',
    description: 'Strategic growth and authority building.',
    features: [
      '4 Long-form Articles (2,000 words)',
      '8 Blog Posts (1,000 words)',
      'Advanced SEO & Competitor Analysis',
      'Quarterly Strategy Workshop',
      'Social Media Micro-copy',
      '2 Revision Rounds',
    ],
    cta: 'Start Professional',
    highlighted: true,
  },
  {
    name: 'Premium',
    price: '$8,500',
    period: '/month',
    description: 'Full-scale editorial department.',
    features: [
      'Unlimited Content Requests',
      'White Paper / E-book Quarterly',
      'Dedicated Editor-in-Chief',
      'Distribution Strategy',
      'Custom Graphics & Illustrations',
      'Priority Turnaround',
    ],
    cta: 'Contact for Premium',
    highlighted: false,
  },
]
export function PricingTable({ onNavigateToCheckout }: PricingTableProps) {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#2C2C2C]/10">
      <div className="text-center mb-20">
        <span className="text-[#c73450] font-medium tracking-widest text-sm uppercase mb-4 block">
          Investment
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">
          Transparent Rates
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`relative p-8 md:p-10 transition-all duration-300 ${tier.highlighted ? 'bg-white shadow-xl border border-[#c73450]/20 -mt-4 md:-mt-8' : 'bg-[#FAF9F6] border border-[#2C2C2C]/10'}`}
          >
            {tier.highlighted && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#c73450] text-white px-4 py-1 text-xs uppercase tracking-widest">
                Most Popular
              </div>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-serif text-[#2C2C2C] mb-2">
                {tier.name}
              </h3>
              <p className="text-[#8B8680] text-sm mb-6 min-h-[40px]">
                {tier.description}
              </p>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-serif text-[#2C2C2C]">
                  {tier.price}
                </span>
                <span className="text-[#8B8680] text-sm">{tier.period}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-10">
              {tier.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 text-sm text-[#2C2C2C]/80"
                >
                  <Check
                    className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlighted ? 'text-[#c73450]' : 'text-[#8B8680]'}`}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link href="/checkout" passHref>
              <button
                onClick={() => onNavigateToCheckout?.(tier.name)}
                className={`w-full cursor-pointer py-4 px-6 text-sm uppercase tracking-widest transition-all duration-300 ${tier.highlighted ? 'bg-[#c73450] text-white hover:bg-[#a02a40]' : 'border border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#c73450] hover:border-[#c73450] hover:text-white'}`}
              >
                {tier.cta}
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
