// types/booking.interface.ts
export interface IBooking {
  id: string;
  fullName: string;
  customerEmail: string;
  company: string | null;
  phone: string;
  projectDetails: string;
  status: string; // e.g., CONFIRMED, PENDING, CANCELLED
  planId: string;
  paymentId: string;
  createdAt: string; // ISO date string
}
