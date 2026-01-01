"use client";


import { Column } from "@/components/shared/ManagementTable";
import { UserInfoCell } from "../shared/UserInfoCell";
import { DateCell } from "../shared/DateCell";
import { ICustomer } from "@/types/customer.interface";
import { updateCustomerStatus } from "@/services/customer/customerManagement";
import { toast } from "sonner";
import { useRouter } from "next/navigation";


export const customerColumns = (router: ReturnType<typeof useRouter>): Column<ICustomer>[] => [
  {
    header: "Customer",
    accessor: (customer) => (
      <UserInfoCell
        name={customer.name}
        email={customer.email}
        photo={customer.profilePhoto}
      />
    ),
  },

  {
    header: "Actions",
    accessor: (customer) => (
      <button
        className={`px-2 py-1 rounded text-white ${
          customer.status === "ACTIVE" ? "bg-green-500" : "bg-red-500"
        }`}
        onClick={async () => {
          const newStatus = customer.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
          const result = await updateCustomerStatus(customer.id!, newStatus);

          if (result.success) {
            toast.success(`Customer status changed to ${newStatus}`);
            router.refresh(); // ✅ now router exists
          } else {
            toast.error(result.message || "Failed to update status");
          }
        }}
      >
        {customer.status === "ACTIVE" ? "Deactivate" : "Activate"}
      </button>
    ),
  },

  {
    header: "Joined",
    accessor: (customer) => <DateCell date={customer.createdAt} />,
  },
];
