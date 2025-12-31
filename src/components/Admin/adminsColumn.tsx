"use client";

// import { DateCell } from "@/components/shared/cell/DateCell";
// import { StatusBadgeCell } from "@/components/shared/cell/StatusBadgeCell";
// import { UserInfoCell } from "@/components/shared/cell/UserInfoCell";
import { Column } from "@/components/shared/ManagementTable";
import { IAdmin } from "@/types/admin.interface";
import { UserInfoCell } from "../shared/UserInfoCell";
// import { StatusBadgeCell } from "../shared/StatusBadgeCell";
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
    // sortKey: "name",
  },
  
  {
    header: "Status",
    accessor: (admin) => <StatusBadgeCell  />,
  },
  {
    header: "Joined",
    accessor: (admin) => <DateCell date={admin.createdAt} />,
    // sortKey: "createdAt",
  },
];