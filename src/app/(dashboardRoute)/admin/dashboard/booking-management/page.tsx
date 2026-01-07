import AdminsFilter from "@/components/Admin/AdminsFilter";
import BookingManagementHeader from "@/components/booking/BookingManagementHeader";
import BookingsTable from "@/components/booking/BookingTable";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { getBookings } from "@/services/booking/bookingManagement";
import { Suspense } from "react";
export const dynamic = "force-dynamic";

const BookingManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const bookingsResult = await getBookings(queryString);
  console.log(bookingsResult?.data);

  const total = bookingsResult?.data?.meta?.total ?? 0;
  const limit = bookingsResult?.data?.meta?.limit ?? 10;
  const currentPage = Number(bookingsResult?.data?.meta?.page) || 1;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  return (
    <div className="space-y-6">
      <BookingManagementHeader />

      {/* Search, Filters */}
      <AdminsFilter />

      <Suspense fallback={<TableSkeleton columns={8} rows={10} />}>
        <BookingsTable booking={bookingsResult?.data || []} />
        <Suspense fallback={null}>
          <TablePagination currentPage={currentPage} totalPages={totalPages} />
        </Suspense>
      </Suspense>
    </div>
  );
};

export default BookingManagementPage;
