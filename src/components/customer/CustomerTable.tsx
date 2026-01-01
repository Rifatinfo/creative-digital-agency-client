"use client";

import ManagementTable from "@/components/shared/ManagementTable";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { toast } from "sonner";

import DeleteConfirmationDialog from "../shared/DeleteConfirmationDialog";
import { ICustomer } from "@/types/customer.interface";
import CustomerFormDialog from "./CustomerFormDialog";
import CustomerViewDetailDialog from "./CustomerViewDetailDialog";
import { customerColumns } from "./CustomerColumn";
import { deleteCustomer } from "@/services/customer/customerManagement";
// import { deleteCustomer } from "@/services/customer/customerManagement";


interface CustomerTableProps {
  customer: ICustomer[];
}

const CustomerTable = ({ customer }: CustomerTableProps) => {

  const router = useRouter();
  const [, startTransition] = useTransition();
  const [deletingAdmin, setDeletingAdmin] = useState<ICustomer | null>(null);
  const [viewingAdmin, setViewingAdmin] = useState<ICustomer | null>(null);
  const [editingAdmin, setEditingAdmin] = useState<ICustomer | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const handleView = (admin: ICustomer) => {
    setViewingAdmin(admin);
  };

  const handleEdit = (admin: ICustomer) => {
    setEditingAdmin(admin);
  };

  const handleDelete = (admin: ICustomer) => {
    setDeletingAdmin(admin);
  };

  const confirmDelete = async () => {
    if (!deletingAdmin) return;

    setIsDeleting(true);
    const result = await deleteCustomer(deletingAdmin.id!);
    setIsDeleting(false);

    if (result.success) {
      toast.success(result.message || "Customer deleted successfully");
      setDeletingAdmin(null);
      handleRefresh();
    } else {
      toast.error(result.message || "Failed to delete Customer");
    }
  };

  return (
    <>
      <ManagementTable
        data={customer}
        columns={customerColumns(router)}
        onView={handleView}
        onEdit={handleEdit}
        onDelete={handleDelete}
        getRowKey={(customer) => customer.id!}
        emptyMessage="No customer found"

      />

      {/* Edit Admin Form Dialog */}
      <CustomerFormDialog
        open={!!editingAdmin}
        onClose={() => setEditingAdmin(null)}
        customer={editingAdmin!}
        onSuccess={() => {
          setEditingAdmin(null);
          handleRefresh();
        }}
      />

      {/* View Admin Detail Dialog */}
      <CustomerViewDetailDialog
        open={!!viewingAdmin}
        onClose={() => setViewingAdmin(null)}
        customer={viewingAdmin}
      />

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmationDialog
        open={!!deletingAdmin}
        onOpenChange={(open) => !open && setDeletingAdmin(null)}
        onConfirm={confirmDelete}
        title="Delete Admin"
        description={`Are you sure you want to delete ${deletingAdmin?.name}? This action cannot be undone.`}
        isDeleting={isDeleting}
      />
    </>
  );
};

export default CustomerTable;