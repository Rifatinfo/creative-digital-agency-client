"use client";

import { Column } from "@/components/shared/ManagementTable";
import { DateCell } from "../shared/DateCell";
import { StatusBadgeCell } from "./StatusBadgeCell";
import { IPayment } from "@/types/payment.interface";



export const PaymentColumn: Column<IPayment>[] = [
  {
    header: "Session ID",
    accessor: (payment) => <span>{payment.stripeSessionId}</span>,
  },
  {
    header: "Customer",
    accessor: (payment) => (
      <div>
        <p className="font-medium">{payment.fullName || payment.customerEmail}</p>
        {payment.company && <p className="text-sm text-gray-500">{payment.company}</p>}
      </div>
    ),
  },
  {
    header: "Amount",
    accessor: (payment) => (
      <span>{`${payment.amount} ${payment.currency.toUpperCase()}`}</span>
    ),
  },
  {
    header: "Status",
    accessor: (payment) => <StatusBadgeCell status={payment.status} />,
  },
  {
    header: "Plan ID",
    accessor: (payment) => <span>{payment.planId}</span>,
  },
  {
    header: "Created At",
    accessor: (payment) => <DateCell date={payment.createdAt} />,
  },
];
