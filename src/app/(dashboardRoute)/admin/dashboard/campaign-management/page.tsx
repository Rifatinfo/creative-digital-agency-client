
import CampaignFilter from "@/components/campaign/CampaignFilter";
import CampaignManagementHeader from "@/components/campaign/CampaignManagementHeader";
import CampaignTable from "@/components/campaign/CampaignTable";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { getCampaigns } from "@/services/campaign/campaignmanagement";
import { Suspense } from "react";

const CampaignManagementPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  const searchParamsObj = await searchParams;
  const queryString = queryStringFormatter(searchParamsObj);
  const campaignsResult = await getCampaigns(queryString);

  const total = campaignsResult?.data?.meta?.total ?? 0;
  const limit = campaignsResult?.data?.meta?.limit ?? 10;
  const currentPage = Number(campaignsResult?.data?.meta?.page) || 1;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  return (
    <div className="space-y-6">
      <CampaignManagementHeader />

      {/* Search, Filters */}
      <CampaignFilter />

      <Suspense fallback={<TableSkeleton columns={8} rows={10} />}>
        <CampaignTable campaign={campaignsResult?.data?.data || []} />
        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Suspense>
    </div>
  );
};

export default CampaignManagementPage;
