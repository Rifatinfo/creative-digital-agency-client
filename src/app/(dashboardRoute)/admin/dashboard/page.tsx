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
    { title: "Clients", value: metaData.clientCount },
    { title: "Bookings", value: metaData.bookingCount },
    { title: "Admins", value: metaData.adminCount },
    { title: "Payments", value: metaData.paymentCount },
    { title: "Revenue", value: metaData?.totalRevenue?._sum.amount },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Meta Cards */}
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
