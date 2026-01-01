"use client";


import { Column } from "@/components/shared/ManagementTable";
import { IAdmin } from "@/types/admin.interface";
import { UserInfoCell } from "../shared/UserInfoCell";
import { DateCell } from "../shared/DateCell";
import { StatusBadgeCell } from "../shared/StatusBadgeCell";

export const adminsColumns: Column<IAdmin>[] = [
  {
    header: "Admin",
    accessor: (admin) => (
      <UserInfoCell
        name={admin.name}
        email={admin.email}
        photo={admin.profilePhoto}
      />
    ),
  },
  
  {
    header: "Status",
    accessor: (admin) => <StatusBadgeCell  />,
  },
  {
    header: "Joined",
    accessor: (admin) => <DateCell date={admin.createdAt} />,
  },
];