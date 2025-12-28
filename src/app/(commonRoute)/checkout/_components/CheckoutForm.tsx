"use client";

import React from 'react'
export interface CheckoutFormData {
  fullName: string
  email: string
  company: string
  phone: string
  projectDetails: string
}
interface CheckoutFormProps {
  formData: CheckoutFormData
  onChange: (field: keyof CheckoutFormData, value: string) => void
}
export function CheckoutForm({ formData, onChange }: CheckoutFormProps) {
  const inputClasses =
    'w-full bg-white border border-[#2C2C2C]/10 px-4 py-3 text-[#2C2C2C] focus:outline-none focus:border-[#c73450] focus:ring-1 focus:ring-[#c73450] transition-all duration-300 placeholder:text-[#2C2C2C]/30'
  const labelClasses =
    'block text-xs uppercase tracking-widest text-[#2C2C2C]/60 mb-2 font-medium'
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-serif text-[#2C2C2C] mb-6">
        Client Details
      </h3>
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className={labelClasses}>
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={(e) => onChange('fullName', e.target.value)}
              className={inputClasses}
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => onChange('email', e.target.value)}
              className={inputClasses}
              placeholder="john@example.com"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className={labelClasses}>
              Company Name
            </label>
            <input
              type="text"
              id="company"
              value={formData.company}
              onChange={(e) => onChange('company', e.target.value)}
              className={inputClasses}
              placeholder="Acme Inc."
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => onChange('phone', e.target.value)}
              className={inputClasses}
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>

        <div>
          <label htmlFor="projectDetails" className={labelClasses}>
            Project Details
          </label>
          <textarea
            id="projectDetails"
            value={formData.projectDetails}
            onChange={(e) => onChange('projectDetails', e.target.value)}
            className={`${inputClasses} min-h-[120px] resize-y`}
            placeholder="Tell us a bit about your goals and requirements..."
          />
        </div>
      </div>
    </div>
  )
}
