export interface IPayment {
  stripeSessionId: string;
  amount: number;
  currency: string;
  status: string;
  customerEmail: string;
  fullName?: string | null;
  company?: string | null;
  planId: string;
  createdAt: string;
}