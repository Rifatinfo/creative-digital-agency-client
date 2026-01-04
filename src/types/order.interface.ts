export interface IOrderHistory {
  id: string;
  createdAt: string;
  status: string;
  plan: {
    serviceId: string;
    ctaText: string;
  };
  payment?: {
    stripeSessionId: string;
    amount: number;
    currency: string;
  };
}
