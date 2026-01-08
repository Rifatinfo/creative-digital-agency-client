"use client";

import { useEffect, useState } from "react";
import { ChartAreaInteractive } from "@/components/AdminDashboard/ChartAreaInteractive";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface IMetaData {
  clientCount: number;
  bookingCount: number;
  adminCount: number;
  paymentCount: number;
  totalRevenue: {
    _sum: {
      amount: number;
    };
  };
  barChartData: {
    month: string;
    count: number;
  }[];
  pieChartData: {
    status: string;
    count: number;
    percentage: number;
  }[];
}

const DashboardClient = () => {
  const [metaData, setMetaData] = useState<IMetaData | null>(null);
  console.log("metaData ----", metaData);

  useEffect(() => {
    fetch("https://creative-digital-agency-server.vercel.app/api/v1/meta")
      .then((res) => {
        if (!res.ok) throw new Error(`Failed to fetch meta data: ${res.status}`);
        return res.json();
      })
      .then((result) => {
        console.log("metaData:", result?.data); // <-- correct access
        setMetaData(result?.data); // <-- set state with actual meta data
      })
      .catch((err) => console.error(err.message));
  }, []); // fetch once on mount

  const metaCards = [
    { title: "Clients", value: metaData?.clientCount ?? 0, color: "bg-blue-500" },
    { title: "Bookings", value: metaData?.bookingCount ?? 0, color: "bg-emerald-500" },
    { title: "Admins", value: metaData?.adminCount ?? 0, color: "bg-violet-500" },
    { title: "Payments", value: metaData?.paymentCount ?? 0, color: "bg-orange-500" },
    {
      title: "Revenue",
      value: metaData?.totalRevenue?._sum.amount ?? 0,
      color: "bg-rose-500",
    },
  ];


  return (
    <div className="space-y-6 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {metaCards.map((card) => (
          <Card
            key={card.title}
            className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md"
          >
            <span className={`absolute top-0 left-0 h-full w-1 ${card.color}`} />

            <CardHeader className="p-4 pl-6 space-y-2">
              <CardTitle className="text-sm text-neutral-500">
                {card.title}
              </CardTitle>

              <CardDescription>
                <span className="text-2xl font-semibold text-neutral-900">
                  {card.value ?? 0}
                </span>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <ChartAreaInteractive
        chartData={metaData?.barChartData.map((item) => ({
          date: item.month,
          enrollments: item.count,
        })) ?? []}
        total={metaData?.paymentCount ?? 0}
      />
    </div>
  );
};

export default DashboardClient;
