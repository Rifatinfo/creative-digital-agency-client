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

const DashboardPage = () => {
  const [metaData, setMetaData] = useState<IMetaData | null>(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/v1/meta", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((result) => {
        setMetaData(result.data);
      })
  }, []);

  if (!metaData) return <p>Loading...</p>;

  if (!metaData) return <p className="text-center mt-10">No data found</p>;

  const metaCards = [
    { title: "Clients", value: metaData.clientCount, color: "bg-blue-500" },
    { title: "Bookings", value: metaData.bookingCount, color: "bg-emerald-500" },
    { title: "Admins", value: metaData.adminCount, color: "bg-violet-500" },
    { title: "Payments", value: metaData.paymentCount, color: "bg-orange-500" },
    { title: "Revenue", value: metaData?.totalRevenue?._sum.amount, color: "bg-rose-500" },
  ];


  return (
    <div className="space-y-6 p-6">
      {/* Meta Cards
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {metaCards.map((card) => (
          <Card key={card.title} className="p-4">
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>
                <span className="text-xl font-bold">{card.value}</span>
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div> */}
      {/* Meta Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {metaCards.map((card) => (
          <Card
            key={card.title}
            className="group relative overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md"
          >
            {/* Color bar */}
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



      {/* Chart */}
      <ChartAreaInteractive
        chartData={metaData?.barChartData?.map((item) => ({
          date: item.month,
          enrollments: item.count,
        }))}
        total={metaData.paymentCount}
      />
    </div>
  );
};

export default DashboardPage;
