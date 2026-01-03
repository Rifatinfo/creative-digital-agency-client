"use client";

import { Column } from "@/components/shared/ManagementTable";
import { UserInfoCell } from "../shared/UserInfoCell";
import { StatusBadgeCell } from "../shared/StatusBadgeCell";
import { Campaign } from "@/types/campaign.interface";

export const campaignColumns: Column<Campaign>[] = [
  {
    header: "Campaign",
    accessor: (campaign) => (
      <UserInfoCell
        name={campaign.title}
        email={campaign.brand}
        photo={campaign.thumbnail}
      />
    ),
  },

  {
    header: "Views",
    accessor: (campaign) => (
      <span className="font-medium">{campaign.views}</span>
    ),
  },
  {
  header: "Featured",
  accessor: (campaign) => (
    <StatusBadgeCell
      isDeleted={!campaign.featured}
      activeText="Featured"
      deletedText="Standard"
    />
  ),
},
  {
    header: "Date",
    accessor: (campaign) => (
      <span className="text-sm text-muted-foreground">
        {campaign.dateLabel}
      </span>
    ),
  },
];
