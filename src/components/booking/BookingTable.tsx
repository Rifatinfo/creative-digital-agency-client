"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { bookingColumns } from "./BookingColumn";
import { IBooking } from "@/types/bookig.interface";


interface BookingsTableProps {
  booking: IBooking[];
}

const BookingsTable = ({ booking }: BookingsTableProps) => {
  
  return (
    <>
      <ManagementTable
        data={booking}
        columns={bookingColumns}
        getRowKey={(booking) => booking.id}
        emptyMessage="No Booking found"
      />
    </>
  );
};

export default BookingsTable;