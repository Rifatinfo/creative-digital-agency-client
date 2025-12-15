"use client";
import React, { useEffect, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import CheckoutForm, { CheckoutFormData } from './CheckoutForm'
import { OrderSummary } from './OrderSummary'
import {  ServiceSelector } from './ServiceSelector';
import Logo from '@/components/ui/modules/common/Logo/Logo';

const tiers = {
  Essential: {
    price: '$2,500',
    features: [
      '2 Long-form Articles',
      '4 Blog Posts',
      'Basic SEO',
      'Monthly Calendar',
    ],
  },
  Professional: {
    price: '$4,800',
    features: [
      '4 Long-form Articles',
      '8 Blog Posts',
      'Advanced SEO',
      'Strategy Workshop',
    ],
  },
  Premium: {
    price: '$8,500',
    features: [
      'Unlimited Requests',
      'White Paper Quarterly',
      'Dedicated Editor',
      'Priority Support',
    ],
  },
}

export function CheckoutPage() {
  const [selectedTier, setSelectedTier] = useState()

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

 
  return (
    <main className="min-h-screen w-full bg-[#FAF9F6] pb-24">
      {/* Header */}
      <header className="bg-white border-b border-[#2C2C2C]/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
            
              className="p-2 hover:bg-[#FAF9F6] rounded-full transition-colors text-[#2C2C2C]/60 hover:text-[#c73450]"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="text-xl font-serif font-bold tracking-tighter text-[#2C2C2C]">
               <Logo/>
            </div>
          </div>
          <div className="text-sm uppercase tracking-widest text-[#2C2C2C]/40 hidden md:block">
            Secure Checkout
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Main Content */}
          <div className="flex-1">
            <div className="mb-12">
              <h1 className="text-4xl md:text-5xl font-serif text-[#2C2C2C] mb-4">
                Finalize your order
              </h1>
              <p className="text-[#2C2C2C]/60 text-lg">
                Complete the details below to kickstart your project.
              </p>
            </div>

            <ServiceSelector/>

            {/* Tier Selection (Simplified for checkout context) */}
            <div className="mb-12">
              <h3 className="text-2xl font-serif text-[#2C2C2C] mb-6">
                Selected Plan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.keys(tiers).map((tier) => (
                  <button
                    key={tier}
                    className={`p-4 text-left border transition-all duration-300 ${selectedTier === tier ? 'border-[#c73450] bg-white ring-1 ring-[#c73450]' : 'border-[#2C2C2C]/10 bg-white hover:border-[#c73450]/30'}`}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span
                        className={`font-serif ${selectedTier === tier ? 'text-[#c73450]' : 'text-[#2C2C2C]'}`}
                      >
                        {tier}
                      </span>
                      {selectedTier === tier && (
                        <div className="w-2 h-2 rounded-full bg-[#c73450]" />
                      )}
                    </div>
                    <div className="text-sm text-[#2C2C2C]/60">
                      {tiers[tier as keyof typeof tiers].price}/mo
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <CheckoutForm />
          </div>

          {/* Sidebar */}
          <div className="lg:w-[380px] flex-shrink-0">
            <OrderSummary

            />
          </div>
        </div>
      </div>
    </main>
  )
}
