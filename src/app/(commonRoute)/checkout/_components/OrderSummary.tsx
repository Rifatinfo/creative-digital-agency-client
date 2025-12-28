"use client";
import { Check, ShieldCheck } from 'lucide-react'
import { useState } from 'react';
interface OrderSummaryProps {
  serviceName: string
  tierName: string
  price: string
  features: string[]
  isValid: boolean
  onProceed: () => Promise<void> | void
}
export function OrderSummary({
  serviceName,
  tierName,
  price,
  features,
  isValid,
  onProceed,
}: OrderSummaryProps) {

  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    if(!isValid || loading) return;
    setLoading(true);
    await onProceed();
  }
  return (
    <div className="sticky top-8">
      <div className="bg-white border border-[#2C2C2C]/10 p-8 shadow-sm">
        <h3 className="text-xl font-serif text-[#2C2C2C] mb-6">
          Order Summary
        </h3>

        <div className="space-y-4 mb-8 border-b border-[#2C2C2C]/10 pb-8">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#2C2C2C]/50 mb-1">
                Service
              </p>
              <p className="font-medium text-[#2C2C2C]">{serviceName}</p>
            </div>
          </div>

          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#2C2C2C]/50 mb-1">
                Plan
              </p>
              <p className="font-medium text-[#2C2C2C]">{tierName}</p>
            </div>
            <p className="font-serif text-xl text-[#c73450]">
              {price}
              <span className="text-sm text-[#2C2C2C]/50 font-sans">/mo</span>
            </p>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-xs uppercase text-[#c73450] font-semibold tracking-widest mb-4">
            Included Features
          </p>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm text-[#2C2C2C]/70"
              >
                <Check className="w-4 h-4 text-[#c73450] mt-0.5 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center text-lg font-medium text-[#2C2C2C]">
            <span>Total Due</span>
            <span>{price}</span>
          </div>

          <button
            onClick={handleClick}
            disabled={!isValid}
            className={`cursor-pointer w-full py-4 px-6 text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 ${isValid ? 'bg-[#c73450] text-white hover:bg-[#a02a40] shadow-lg hover:shadow-xl' : 'bg-[#2C2C2C]/10 text-[#2C2C2C]/40 cursor-not-allowed'}`}
          >
            {loading ? (
              <>
                <svg
                  className="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
                Redirecting…
              </>
            ) : (
              <>
                <ShieldCheck className="w-4 h-4" />
                Proceed to Payment
              </>
            )}
          </button>

          <p className="text-xs text-center text-[#2C2C2C]/40">
            Secure SSL encrypted payment
          </p>
        </div>
      </div>
    </div>
  )
}
