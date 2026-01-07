import CustomerFilter from "@/components/customer/CustomerFilter";
import CustomerManagementHeader from "@/components/customer/CustomerManagementHeader";
import CustomerTable from "@/components/customer/CustomerTable";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { getCustomer } from "@/services/customer/customerManagement";
import { Suspense } from "react";
export const dynamic = "force-dynamic";

const CustomerManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const customerResult = await getCustomer(queryString);
  console.log(customerResult);

  const total = customerResult?.data?.meta?.total ?? 0;
  const limit = customerResult?.data?.meta?.limit ?? 10;
  const currentPage = Number(customerResult?.data?.meta?.page) || 1;

  const totalPages = Math.max(1, Math.ceil(total / limit));

  return (
    <div className="space-y-6">
      <CustomerManagementHeader />

      {/* Search, Filters */}
      <CustomerFilter />

      <Suspense fallback={<TableSkeleton columns={8} rows={10} />}>
        <CustomerTable customer={customerResult?.data?.data || []} />

        <Suspense fallback={null}>
          <TablePagination currentPage={currentPage} totalPages={totalPages} />
        </Suspense>
      </Suspense>
    </div>
  );
};

export default CustomerManagementPage;
