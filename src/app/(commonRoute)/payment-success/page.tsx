import { Suspense } from "react";
import { PaymentSuccess } from "./_components/PaymentSuccess";

const PaymentSuccessPage = () => {
  return (
    <Suspense fallback={<div>Loading payment status...</div>}>
      <PaymentSuccess />
    </Suspense>
  );
};

export default PaymentSuccessPage;
