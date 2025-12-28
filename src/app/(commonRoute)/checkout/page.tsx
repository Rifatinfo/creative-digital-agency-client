// "use client";

// import { useRouter } from "next/navigation";
import { CheckoutPage } from "./_components/CheckoutPage";
import { getContentService } from "./_components/getContentService";

const Checkout = async () => {
  const service = await getContentService();
    return (
        <div>
            <CheckoutPage service={service} />
        </div>
    );
};

export default Checkout;