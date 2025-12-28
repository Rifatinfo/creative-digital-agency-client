/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { easeInOut } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface PaymentResult {
  booking: any;
  payment: any;
}

const Confetti = dynamic(
  () => import("./Confetti").then((mod) => mod.Confetti),
  { ssr: false }
);
export function PaymentSuccess() {
  const searchParams = useSearchParams();
  const bookingId = searchParams.get("bookingId");
  const paymentId = searchParams.get("paymentId");

  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<PaymentResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!bookingId || !paymentId) {
      return;
    }

    const makePaymentDone = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_API_URL}/payment/payment-done`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ bookingId, paymentId }),
          }
        );

        const text = await res.text(); 

        let data;
        try {
          data = JSON.parse(text);
        } catch {
          throw new Error("Server error occurred");
        }

        if (!res.ok) {
          throw new Error(data.message || "Payment failed");
        }

        setResult(data.data);
        console.log("Payment Completed and Booking Confirmed");
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    makePaymentDone();
  }, [paymentId, bookingId]);

  if (loading)
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white">
        <div className="h-14 w-14 animate-spin rounded-full border-4 border-gray-200 border-t-[#c73450]"></div>

        <h2 className="mt-6 text-xl font-semibold text-gray-800">
          Processing your payment
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Please wait while we confirm your booking
        </p>
      </div>
    );

  if (error)
    return (
      <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white text-center px-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-100">
          <svg
            className="h-7 w-7 text-[#c73450]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h2 className="mt-6 text-xl font-semibold text-gray-800">
          Payment Failed
        </h2>

        <p className="mt-2 text-sm text-gray-500 max-w-md">{error}</p>

        <button
          onClick={() => (window.location.href = "/")}
          className="mt-6 rounded-lg bg-[#c73450] px-6 py-2 text-sm font-medium text-white hover:bg-red-700 transition"
        >
          Go Back Home
        </button>
      </div>
    );

  const hasError = !bookingId || !paymentId;
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 20,
      },
    },
  };
  const checkVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easeInOut,
        delay: 0.2,
      },
    },
  };
  const circleVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 20,
      },
    },
  };
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 relative overflow-hidden">
      {hasError && (
        <div className="text-center text-[#c73450]">
          <p>{error || "Missing bookingId or paymentId"}</p>
        </div>
      )}
      {!hasError && (
        <>
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#c73450]/5 to-transparent pointer-events-none" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#c73450]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

          <Confetti />
          <motion.div
            className="w-full max-w-2xl z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="text-center mb-10">
              {/* Animated Checkmark */}
              <div className="flex justify-center mb-6">
                <motion.div
                  className="w-24 h-24 rounded-full bg-[#c73450] flex items-center justify-center shadow-xl shadow-[#c73450]/30"
                  variants={circleVariants}
                >
                  <svg
                    className="w-12 h-12 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <motion.path d="M20 6L9 17l-5-5" variants={checkVariants} />
                  </svg>
                </motion.div>
              </div>

              <motion.h1
                className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
                variants={itemVariants}
              >
                Payment Successful!
              </motion.h1>

              <motion.p
                className="text-lg text-gray-500 max-w-md mx-auto"
                variants={itemVariants}
              >
                Thank you for your purchase. Your order has been confirmed and
                is being processed.
              </motion.p>
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <Button size="lg" className="w-full sm:w-auto group">
                View Dashboard
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="w-full sm:w-auto"
              >
                <Download className="mr-2 w-4 h-4" />
                Download Receipt
              </Button>
            </motion.div>
          </motion.div>
        </>
      )}
    </div>
  );
}
