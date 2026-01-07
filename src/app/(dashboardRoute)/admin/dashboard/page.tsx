export const dynamic = "force-dynamic";

import { Suspense } from "react";
import DashboardClient from "./_components/DashboardClient";
// import DashboardClient from "./DashboardClient";

export default function DashboardPage() {
  return (
    <Suspense fallback={<p>Loading dashboard...</p>}>
      <DashboardClient />
    </Suspense>
  );
}
