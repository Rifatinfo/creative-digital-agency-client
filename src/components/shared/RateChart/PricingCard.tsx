import { Check } from "lucide-react"
import { PricingTier } from "./types/pricing"
import Link from "next/link"

interface PricingCardProps {
  tier: PricingTier
}

const PricingCard = ({ tier }: PricingCardProps) => {
  return (
    <div
      className={`relative p-8 md:p-10 transition-all duration-300 ${tier.highlighted
          ? "bg-white shadow-xl border border-[#c73450]/20 -mt-4 md:-mt-8"
          : "bg-[#FAF9F6] border border-[#2C2C2C]/10"
        }`}
    >
      {tier.highlighted && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c73450] text-white px-4 py-1 text-xs uppercase tracking-widest">
          Most Popular
        </div>
      )}

      {/* Header */}
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
          <span className="text-[#8B8680] text-sm">
            {tier.period}
          </span>
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-4 mb-10">
        {tier.features.map((feature, idx) => (
          <li
            key={idx}
            className="flex items-start gap-3 text-sm text-[#2C2C2C]/80"
          >
            <Check
              className={`w-4 h-4 mt-0.5 ${tier.highlighted
                  ? "text-[#c73450]"
                  : "text-[#8B8680]"
                }`}
            />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link href="/checkout">
        <button
          className={`w-full py-4 px-6 text-sm uppercase cursor-pointer tracking-widest transition-all duration-300 ${tier.highlighted
              ? "bg-[#c73450] text-white hover:bg-[#a02a40]"
              : "border border-[#2C2C2C] text-[#2C2C2C] hover:bg-[#c73450] hover:border-[#c73450] hover:text-white"
            }`}
        >
          {tier.cta}
        </button>
      </Link>
    </div>
  )
}

export default PricingCard
