import PricingCard from "./PricingCard"
import { PricingTier } from "./types/pricing"

interface PricingTableProps {
  title?: string
  subtitle?: string
  tiers: PricingTier[]
}

const PricingTable = ({
  title = "Transparent Rates",
  subtitle = "Investment",
  tiers,
}: PricingTableProps) => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-[#2C2C2C]/10">
      <div className="text-center mb-20">
        <span className="text-[#c73450] font-medium tracking-widest text-sm uppercase mb-4 block">
          {subtitle}
        </span>
        <h2 className="text-4xl md:text-5xl font-serif text-[#2C2C2C]">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {tiers.map((tier, index) => (
          <PricingCard key={index} tier={tier} />
        ))}
      </div>
    </section>
  )
}

export default PricingTable
