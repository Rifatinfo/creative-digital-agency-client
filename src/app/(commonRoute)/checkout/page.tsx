"use client";

import { useRouter } from "next/navigation";
import { CheckoutPage } from "./_components/CheckoutPage";

const Checkout = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <div>
            <CheckoutPage onBack={handleBack} />
        </div>
    );
};

export default Checkout;