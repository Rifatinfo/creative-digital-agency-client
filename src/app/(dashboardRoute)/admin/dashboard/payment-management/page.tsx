import AdminsFilter from "@/components/Admin/AdminsFilter";
import PaymentsManagementHeader from "@/components/payment/PaymentManagementHeader";
import PaymentsTable from "@/components/payment/PaymentTable";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { getPayments } from "@/services/payment/paymentManagement";
import { Suspense } from "react";

const PaymentManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const paymentsResult = await getPayments(queryString);
  console.log(paymentsResult?.data);
  
  const total = paymentsResult?.data?.meta?.total ?? 0;
  const limit = paymentsResult?.data?.meta?.limit ?? 10;
  const currentPage = Number(paymentsResult?.data?.meta?.page) || 1;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  return (
    <div className="space-y-6">
      <PaymentsManagementHeader />

      {/* Search, Filters */}
      <AdminsFilter />

      <Suspense fallback={<TableSkeleton columns={8} rows={10} />}>
        <PaymentsTable payment={paymentsResult?.data || []} />
        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Suspense>
    </div>
  );
};

export default PaymentManagementPage;
