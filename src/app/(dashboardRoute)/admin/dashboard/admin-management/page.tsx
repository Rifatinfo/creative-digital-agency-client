import AdminsFilter from "@/components/Admin/AdminsFilter";
import AdminsManagementHeader from "@/components/Admin/AdminsManagementHeader";
import AdminsTable from "@/components/Admin/AdminsTable";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { getAdmins } from "@/services/admin/adminsManagement";
import { Suspense } from "react";
export const dynamic = "force-dynamic";

const AdminAdminsManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const adminsResult = await getAdmins(queryString);

  const total = adminsResult?.data?.meta?.total ?? 0;
  const limit = adminsResult?.data?.meta?.limit ?? 10;
  const currentPage = Number(adminsResult?.data?.meta?.page) || 1;

  const totalPages = Math.max(1, Math.ceil(total / limit));

  return (
    <div className="space-y-6">
      <AdminsManagementHeader />

      {/* Search, Filters */}
      <AdminsFilter />

      <Suspense fallback={<TableSkeleton columns={8} rows={10} />}>
        <AdminsTable admins={adminsResult?.data?.data || []} />
        <Suspense fallback={null}>
          <TablePagination currentPage={currentPage} totalPages={totalPages} />
        </Suspense>
      </Suspense>
    </div>
  );
};

export default AdminAdminsManagementPage;
