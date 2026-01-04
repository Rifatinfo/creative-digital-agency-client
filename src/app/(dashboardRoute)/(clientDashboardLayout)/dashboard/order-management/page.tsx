/* eslint-disable @typescript-eslint/no-explicit-any */


// import AdminsFilter from "@/components/Admin/AdminsFilter";
// import OrdersTable from "@/components/Dashboard/OrderTable";
// import PaymentsManagementHeader from "@/components/payment/PaymentManagementHeader";
// import TablePagination from "@/components/shared/TablePagination";
// import { TableSkeleton } from "@/components/shared/TableSkeleton";
// import { queryStringFormatter } from "@/lib/formatters";
// import { orderDashboard } from "@/services/dashboard/order-management";
// import { Suspense } from "react";
// import { cookies } from "next/headers"; // App Router helper for cookies
// const OrderManagementPage = async ({
//   searchParams,
// }: {
//   searchParams: { [key: string]: string | string[] | undefined };
// }) => {
//   try {
//     // Format query string
//     const queryString = queryStringFormatter(searchParams);

//     // Get cookies from Next.js App Router
//     const cookieStore = await cookies();
//     const cookieHeader = cookieStore.getAll().map(c => `${c.name}=${c.value}`).join("; ");

//     // Fetch orders from backend with cookie
//     const orderResult = await orderDashboard(cookieHeader, queryString);
//     console.log("Order Result:", orderResult);

//     const total = orderResult?.data?.meta?.total ?? 0;
//     const limit = orderResult?.data?.meta?.limit ?? 10;
//     const currentPage = Number(orderResult?.data?.meta?.page) || 1;
//     const totalPages = Math.max(1, Math.ceil(total / limit));

//     return (
//       <div className="space-y-6">
//         <PaymentsManagementHeader />

//         {/* Search, Filters */}
//         <AdminsFilter />

//         <Suspense fallback={<TableSkeleton columns={8} rows={10} />}>
//           <OrdersTable orders={orderResult?.data || []} />
//           <TablePagination currentPage={currentPage} totalPages={totalPages} />
//         </Suspense>
//       </div>
//     );
//   } catch (error: any) {
//     console.error("Failed to load orders:", error);
//     return <p className="text-red-500">Failed to load order history</p>;
//   }
// };

// export default OrderManagementPage;


// "use client";

// import { useEffect, useState } from "react";
// import AdminsFilter from "@/components/Admin/AdminsFilter";
// import OrdersTable from "@/components/Dashboard/OrderTable";
// import PaymentsManagementHeader from "@/components/payment/PaymentManagementHeader";
// import TablePagination from "@/components/shared/TablePagination";
// import { TableSkeleton } from "@/components/shared/TableSkeleton";
// import { queryStringFormatter } from "@/lib/formatters";
// import { orderDashboard } from "@/services/dashboard/order-management";

// const OrderManagementPage = () => {
//   const [orderResult, setOrderResult] = useState<any>(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [searchParamsObj, setSearchParamsObj] = useState<{ [key: string]: string | string[] }>({});

//   useEffect(() => {
//     // Read query params from URL in the client
//     const params = new URLSearchParams(window.location.search);
//     const obj: { [key: string]: string | string[] } = {};
//     params.forEach((value, key) => {
//       if (obj[key]) {
//         // Convert to array if multiple values
//         obj[key] = Array.isArray(obj[key]) ? [...obj[key], value] : [obj[key] as string, value];
//       } else {
//         obj[key] = value;
//       }
//     });
//     setSearchParamsObj(obj);
//   }, []);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       try {
//         const queryString = queryStringFormatter(searchParamsObj);
//         const result = await orderDashboard(queryString);
//         setOrderResult(result);
//       } catch (err: any) {
//         console.error("Failed to load orders:", err);
//         setError(err.message || "Failed to load order history");
//       } finally {
//         setLoading(false);
//       }
//     };

//     // Only fetch after searchParamsObj is ready
//     if (Object.keys(searchParamsObj).length > 0 || window.location.search === "") {
//       fetchOrders();
//     }
//   }, [searchParamsObj]);

//   if (loading) return <TableSkeleton columns={8} rows={10} />;
//   if (error) return <p className="text-red-500">{error}</p>;

//   const total = orderResult?.data?.meta?.total ?? 0;
//   const limit = orderResult?.data?.meta?.limit ?? 10;
//   const currentPage = Number(orderResult?.data?.meta?.page) || 1;
//   const totalPages = Math.max(1, Math.ceil(total / limit));

//   return (
//     <div className="space-y-6">
//       <PaymentsManagementHeader />
//       <AdminsFilter />
//       <OrdersTable orders={orderResult?.data || []} />
//       <TablePagination currentPage={currentPage} totalPages={totalPages} />
//     </div>
//   );
// };

// export default OrderManagementPage;


"use client";

import { useEffect, useState } from "react";
import AdminsFilter from "@/components/Admin/AdminsFilter";
import OrdersTable from "@/components/Dashboard/OrderTable";
import PaymentsManagementHeader from "@/components/payment/PaymentManagementHeader";
import TablePagination from "@/components/shared/TablePagination";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { queryStringFormatter } from "@/lib/formatters";
import { orderDashboard } from "@/services/dashboard/order-management";

const OrderManagementPage = () => {
  const [orderResult, setOrderResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchParamsObj, setSearchParamsObj] = useState<{ [key: string]: string | string[] }>({});

  useEffect(() => {
    // Read query params from URL
    const params = Object.fromEntries(new URLSearchParams(window.location.search));
    setSearchParamsObj(params);
  }, []);

  useEffect(() => {
    if (!searchParamsObj) return;

    const fetchOrders = async () => {
      try {
        const queryString = queryStringFormatter(searchParamsObj);
        const result = await orderDashboard(queryString); // cookies sent automatically
        setOrderResult(result);
      } catch (err: any) {
        console.error("Failed to load orders:", err);
        setError(err.message || "Failed to load order history");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [searchParamsObj]);

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
      <TablePagination currentPage={currentPage} totalPages={totalPages} />
    </div>
  );
};

export default OrderManagementPage;


