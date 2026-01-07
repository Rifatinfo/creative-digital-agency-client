/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Suspense, useEffect, useState } from "react";
import AdminsFilter from "@/components/Admin/AdminsFilter";
import OrdersTable from "@/components/Dashboard/OrderTable";
import PaymentsManagementHeader from "@/components/payment/PaymentManagementHeader";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { orderDashboard } from "@/services/dashboard/order-management";
import { useSearchParams } from "next/navigation";

const OrderManagementClient = () => {
  const [orderResult, setOrderResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const searchParams = useSearchParams();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const paramsObj = Object.fromEntries(searchParams.entries());
        const queryString = queryStringFormatter(paramsObj);
        const result = await orderDashboard(queryString);
        setOrderResult(result);
      } catch (err: any) {
        console.error("Failed to load orders:", err);
        setError(err.message || "Failed to load order history");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [searchParams]);

  if (loading) return <TableSkeleton columns={8} rows={10} />;
  if (error) return <p className="text-red-500">{error}</p>;

  const total = orderResult?.data?.meta?.total ?? 0;
  const limit = orderResult?.data?.meta?.limit ?? 10;
  const currentPage = Number(orderResult?.data?.meta?.page) || 1;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  return (
    <div className="space-y-6">
      <PaymentsManagementHeader />
      <AdminsFilter />
      <OrdersTable orders={orderResult?.data || []} />
      <Suspense fallback={null}>
        <TablePagination
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Suspense>
    </div>
  );
};

export default OrderManagementClient;
