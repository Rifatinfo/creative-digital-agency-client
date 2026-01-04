/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState, useEffect } from "react";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import { orderDashboard } from "@/services/dashboard/order-management";
import { format } from "date-fns"; // optional: to format dates nicely
import { CreditCard, CheckCircle, XCircle } from "lucide-react";

const MyProfilePage = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const result = await orderDashboard();
        if (result.success) {
          setOrders(result.data || []);
        } else {
          setError(result.message || "Failed to fetch orders");
        }
      } catch (err: any) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <TableSkeleton columns={8} rows={5} />;
  if (error)
    return (
      <p className="text-red-500 text-center mt-10 font-medium">{error}</p>
    );

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">My Orders</h1>
      {orders.length === 0 ? (
        <p className="text-gray-600 text-center">No orders found.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {orders.map((order: any) => (
            <div
              key={order.id}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col justify-between hover:shadow-lg transition"
            >
              {/* Header */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-800">
                  {order.fullName}
                </h2>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === "CONFIRMED"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status}
                </span>
              </div>

              {/* Company & Project */}
              <p className="text-gray-600 text-sm mb-2">
                <span className="font-medium">Company:</span> {order.company}
              </p>
              <p className="text-gray-600 text-sm mb-2">
                <span className="font-medium">Project:</span>{" "}
                {order.projectDetails}
              </p>

              {/* Plan info */}
              <div className="mb-4">
                <h3 className="text-gray-700 font-medium mb-1">
                  Plan: {order.plan.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  Price: {order.plan.price.toLocaleString()} {order.plan.currency}{" "}
                  {order.plan.period}
                </p>
                <ul className="text-gray-500 text-sm mt-2 list-disc list-inside space-y-1">
                  {order.plan.features.map((feature: string, idx: number) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>

              {/* Payment info */}
              {order.payment ? (
                <div className="flex items-center gap-2 text-sm font-medium">
                  {order.payment.status === "PAID" ? (
                    <CheckCircle className="text-green-500" size={18} />
                  ) : (
                    <XCircle className="text-red-500" size={18} />
                  )}
                  <span>
                    Payment: {order.payment.status} -{" "}
                    {order.payment.amount
                      ? order.payment.amount.toLocaleString()
                      : 0}{" "}
                    {order.payment.currency}
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                  <CreditCard size={18} />
                  <span>Payment not completed</span>
                </div>
              )}

              {/* Footer */}
              <p className="text-gray-400 text-xs mt-4">
                Created at:{" "}
                {format(new Date(order.createdAt), "MMM dd, yyyy HH:mm")}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyProfilePage;
