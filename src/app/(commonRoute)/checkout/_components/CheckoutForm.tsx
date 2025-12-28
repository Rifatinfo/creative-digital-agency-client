"use client";
import { useState } from "react";
import { z } from "zod";

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

const checkoutFormSchema = z.object({
  fullName: z.string().min(2, "Full Name must be at least 2 characters"),
  email: z.email("Invalid email address"),
  company: z.string().optional(),
  phone: z
    .string()
    // .regex(/^\+?\d{7,15}$/, "Invalid phone number")
    .optional(),
  projectDetails: z.string().optional()
});

export function CheckoutForm({ formData, onChange }: CheckoutFormProps) {
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutFormData, string>>>({});

  const handleFieldChange = (field : keyof CheckoutFormData, value : string) => {
    onChange(field, value);
    const result = checkoutFormSchema.safeParse({...formData, [field] : value});
    if(!result.success){
      const fieldErrors : Partial<Record<keyof CheckoutFormData, string>> = {};
      result.error.issues.forEach((err) => {
        const key = err.path[0] as keyof CheckoutFormData;
        fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors)
    }else{
      setErrors({});
    }
  }

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
              onChange={(e) => handleFieldChange('fullName', e.target.value)}
              className={inputClasses}
              placeholder="John Doe"
              required
            />
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>
          <div>
            <label htmlFor="email" className={labelClasses}>
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={(e) => handleFieldChange('email', e.target.value)}
              className={inputClasses}
              placeholder="Your Email"
              required
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
              onChange={(e) => handleFieldChange('company', e.target.value)}
              className={inputClasses}
              placeholder="Company Name"
            />
            {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
          </div>
          <div>
            <label htmlFor="phone" className={labelClasses}>
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={(e) => handleFieldChange('phone', e.target.value)}
              className={inputClasses}
              placeholder="Phone Number"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="projectDetails" className={labelClasses}>
            Project Details
          </label>
          <textarea
            id="projectDetails"
            value={formData.projectDetails}
            onChange={(e) => handleFieldChange('projectDetails', e.target.value)}
            className={`${inputClasses} min-h-[120px] resize-y`}
            placeholder="Tell us a bit about your goals and requirements..."
          />
          {errors.projectDetails && <p className="text-red-500 text-sm mt-1">{errors.projectDetails}</p>}
        </div>
      </div>
    </div>
  )
}
