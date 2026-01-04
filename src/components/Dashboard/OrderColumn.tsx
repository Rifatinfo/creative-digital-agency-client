"use client";

import { Column } from "@/components/shared/ManagementTable";
import { DateCell } from "../shared/DateCell";
import { StatusBadgeCell } from "./StatusBadgeCell";
import { IOrderHistory } from "@/types/order.interface";

export const OrderColumn: Column<IOrderHistory>[] = [
  {
    header: "Session ID",
    accessor: (order) => (
      <span>{order.payment?.stripeSessionId ?? "—"}</span>
    ),
  },
  {
    header: "Amount",
    accessor: (order) => (
      <span>
        {order.payment
          ? `${order.payment.amount} ${order.payment.currency.toUpperCase()}`
          : "—"}
      </span>
    ),
  },
  {
    header: "CTA Text",
    accessor: (order) => (
      <span>{order.plan?.ctaText}</span>
    ),
  },
  {
    header: "Service ID",
    accessor: (order) => (
      <span>{order.plan?.serviceId}</span>
    ),
  },
  {
    header: "Status",
    accessor: (order) => (
      <StatusBadgeCell status={order.status} />
    ),
  },
  {
    header: "Created At",
    accessor: (order) => (
      <DateCell date={order.createdAt} />
    ),
  },
];
