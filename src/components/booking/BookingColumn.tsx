"use client";

import { Column } from "@/components/shared/ManagementTable";
import { DateCell } from "../shared/DateCell";
import { IBooking } from "@/types/bookig.interface";
import { StatusBadgeCell } from "./StatusBadgeCell";

export const bookingColumns: Column<IBooking>[] = [
  {
    header: "Customer",
    accessor: (booking) => (
      <div>
        <p className="font-medium">{booking.fullName}</p>
        <p className="text-sm text-gray-500">{booking.customerEmail}</p>
        {booking.company && <p className="text-sm text-gray-400">{booking.company}</p>}
      </div>
    ),
  },
  {
    header: "Phone",
    accessor: (booking) => <span>{booking.phone}</span>,
  },
  {
    header: "Project",
    accessor: (booking) => <span>{booking.projectDetails}</span>,
  },
  {
    header: "Status",
    accessor: (booking) => <StatusBadgeCell status={booking.status} />,
  },
  {
    header: "Payment ID",
    accessor: (booking) => <span>{booking.paymentId}</span>,
  },
  {
    header: "Plan ID",
    accessor: (booking) => <span>{booking.planId}</span>,
  },
  {
    header: "Created At",
    accessor: (booking) => <DateCell date={booking.createdAt} />,
  },
];
