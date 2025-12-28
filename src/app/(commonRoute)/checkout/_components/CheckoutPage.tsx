/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState, useMemo } from "react";
import { ArrowLeft } from "lucide-react";

import { CheckoutForm, CheckoutFormData } from "./CheckoutForm";
import { ServiceId, ServiceSelector } from "./ServiceSelector";
import { OrderSummary } from "./OrderSummary";

/* ===================== TYPES ===================== */

interface ServicePlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  period?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

interface ServiceItem {
  id: string; // backend id
  title: string;
  servicePlans: ServicePlan[];
}

interface CheckoutPageProps {
  initialTier?: string;
  onBack?: () => void;
  service: {
    data: ServiceItem[];
  };
}

/* ===================== SERVICE NAME (UI) ===================== */

const serviceNames: Record<ServiceId, string> = {
  content: "Content Development",
  marketing: "Digital Marketing",
  branding: "Branding & Promotion",
  web: "Web & App Development",
  event: "Event & Activation",
  creative: "Creative Production",
};

/* ===================== SERVICE ID MAP (🔥 FIX) ===================== */

const serviceIdMap: Record<ServiceId, string> = {
  content: "content-development",
  marketing: "digital-marketing",
  branding: "branding-promotion",
  web: "web-app-development",
  event: "event-activation",
  creative: "creative-production",
};

/* ===================== COMPONENT ===================== */

export function CheckoutPage({
  initialTier = "Professional",
  onBack,
  service,
}: CheckoutPageProps) {
  const [selectedService, setSelectedService] =
    useState<ServiceId>("content");

  const [selectedTier, setSelectedTier] = useState<string>(initialTier);

  const [formData, setFormData] = useState<CheckoutFormData>({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    projectDetails: "",
  });

  /* ===================== EFFECTS ===================== */

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ===================== FORM ===================== */

  const handleFormChange = (
    field: keyof CheckoutFormData,
    value: string
  ) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid =
    formData.fullName.trim() !== "" &&
    formData.email.trim() !== "";

  /* ===================== SERVICE SELECTION ( FIX) ===================== */

  const selectedServiceData = useMemo(() => {
    const backendServiceId = serviceIdMap[selectedService];

    return (
      service.data.find(
        item => item.id === backendServiceId
      ) || service.data[0]
    );
  }, [selectedService, service.data]);

  /* ===================== RESET PLAN ON SERVICE CHANGE ===================== */

  useEffect(() => {
    if (!selectedServiceData?.servicePlans?.length) return;

    const defaultPlan =
      selectedServiceData.servicePlans.find(p => p.highlighted) ||
      selectedServiceData.servicePlans[0];

    setSelectedTier(defaultPlan.name);
  }, [selectedServiceData]);

  /* ===================== PLAN MAP ===================== */

  const tierMap = useMemo(() => {
    return Object.fromEntries(
      selectedServiceData.servicePlans.map(plan => [
        plan.name,
        plan,
      ])
    );
  }, [selectedServiceData]);

  const currentTierData =
    tierMap[selectedTier] ||
    selectedServiceData.servicePlans[0];

  /* ===================== SUBMIT ===================== */

  const handleProceed = async () => {
    if (!isFormValid) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const payload = {
        ...formData,
        planId: currentTierData.id,
        customerEmail: formData.email,
      };

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/booking/create`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Booking failed");
      }

      if (result?.data?.paymentUrl) {
        window.location.href = result.data.paymentUrl;
      }
    } catch (error: any) {
      console.error(error);
      alert(error.message || "Something went wrong");
    }
  };

  /* ===================== RENDER ===================== */

  return (
    <main className="min-h-screen w-full bg-[#FAF9F6] pb-24">
      {/* HEADER */}
      <header className="bg-white border-b border-[#2C2C2C]/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-2 hover:bg-[#FAF9F6] rounded-full text-[#2C2C2C]/60 hover:text-[#c73450]"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div className="text-xl font-serif font-bold">
              EDITORIAL.
            </div>
          </div>
          <div className="text-sm uppercase tracking-widest text-[#2C2C2C]/40 hidden md:block">
            Secure Checkout
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* LEFT */}
          <div className="flex-1">
            <ServiceSelector
              selectedService={selectedService}
              onSelect={setSelectedService}
            />

            {/* PLANS */}
            <div className="my-12">
              <h3 className="text-2xl font-serif mb-6">
                Selected Plan
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {selectedServiceData.servicePlans.map(plan => (
                  <button
                    key={plan.id}
                    onClick={() => setSelectedTier(plan.name)}
                    className={`p-4 border text-left ${
                      selectedTier === plan.name
                        ? "border-[#c73450] ring-1 ring-[#c73450]"
                        : "border-[#2C2C2C]/10"
                    }`}
                  >
                    <div className="font-serif">{plan.name}</div>
                    <div className="text-sm text-[#2C2C2C]/60">
                      {plan.currency} {plan.price} {plan.period}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <CheckoutForm
              formData={formData}
              onChange={handleFormChange}
            />
          </div>

          {/* RIGHT */}
          <div className="lg:w-[380px]">
            <OrderSummary
              serviceName={serviceNames[selectedService]}
              tierName={selectedTier}
              price={`${currentTierData.currency} ${currentTierData.price}`}
              features={currentTierData.features}
              isValid={isFormValid}
              onProceed={handleProceed}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
