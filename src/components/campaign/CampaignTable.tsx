"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import DeleteConfirmationDialog from "../shared/DeleteConfirmationDialog";
import { Campaign } from "@/types/campaign.interface";
import CampaignViewDetailDialog from "./CampaignViewDetailDialog";
import { campaignColumns } from "./CampaignColumn";
import { deleteCampaign } from "@/services/campaign/campaignmanagement";
import CampaignFormDialog from "./CampaignFormDialog";


interface CampaignTableProps {
  campaign: Campaign[];
}

const CampaignTable = ({ campaign }: CampaignTableProps) => {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [deletingAdmin, setDeletingAdmin] = useState<Campaign | null>(null);
  const [viewingAdmin, setViewingAdmin] = useState<Campaign | null>(null);
  const [editingAdmin, setEditingAdmin] = useState<Campaign | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleView = (campaign: Campaign) => {
    setViewingAdmin(campaign);
  };

  const handleEdit = (campaign: Campaign) => {
    setEditingAdmin(campaign);
  };

  const handleDelete = (campaign: Campaign) => {
    setDeletingAdmin(campaign);
  };

  const confirmDelete = async () => {
    if (!deletingAdmin) return;

    setIsDeleting(true);
    const result = await deleteCampaign(deletingAdmin.id!);
    setIsDeleting(false);

    if (result.success) {
      toast.success(result.message || "Campaign deleted successfully");
      setDeletingAdmin(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete campaign");
    }
  };

  return (
    <>
      <ManagementTable
        data={campaign}
        columns={campaignColumns}
        // onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        getRowKey={(campaign) => campaign.id!}
        emptyMessage="No Campaign found"
      />

      {/* Edit Admin Form Dialog */}
      <CampaignFormDialog
        open={!!editingAdmin}
        onClose={() => setEditingAdmin(null)}
        campaign={editingAdmin!}
        onSuccess={() => {
          setEditingAdmin(null);
          handleRefresh();
        }}
      />

      {/* View Admin Detail Dialog */}
      <CampaignViewDetailDialog
        open={!!viewingAdmin}
        onClose={() => setViewingAdmin(null)}
        campaign={viewingAdmin}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={!!deletingAdmin}
        onOpenChange={(open) => !open && setDeletingAdmin(null)}
        onConfirm={confirmDelete}
        title="Delete Campaign"
        description={`Are you sure you want to delete ${deletingAdmin?.title}? This action cannot be undone.`}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default CampaignTable;