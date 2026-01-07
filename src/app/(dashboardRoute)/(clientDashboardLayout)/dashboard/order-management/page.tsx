export const dynamic = "force-dynamic";

import { Suspense } from "react";
// import OrderManagementClient from "./OrderManagementClient";
import { TableSkeleton } from "@/components/shared/TableSkeleton";
import OrderManagementClient from "./_components/OrderManagementClient";

export default function OrderManagementPage() {
  return (
    <Suspense fallback={<TableSkeleton columns={8} rows={10} />}>
      <OrderManagementClient />
    </Suspense>
  );
}
