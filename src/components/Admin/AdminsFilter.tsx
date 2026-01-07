"use client";

// import ClearFiltersButton from "@/components/shared/ClearFiltersButton";
import RefreshButton from "@/components/shared/RefreshButton";
import ClearFiltersButton from "../shared/ClearFiltersButton";
import SearchFilter from "../shared/SearchFilter";
import { Suspense } from "react";

const AdminsFilter = () => {
  return (
    <div className=" flex items-center justify-start gap-2">
      {/* Row 1: Search and Refresh */}
      <div className="flex items-center gap-3">
        <Suspense fallback={null}>
          <SearchFilter paramName="searchTerm" placeholder="Search admins..." />
        </Suspense>
        <RefreshButton />
      </div>

      {/* Row 2: Filter Controls */}
      <div className="flex items-center gap-3">
        {/* Email Filter */}
        <Suspense fallback={null}>
          <SearchFilter paramName="email" placeholder="Email" />
        </Suspense>
        {/* Contact Number Filter */}
        {/* <SearchFilter paramName="contactNumber" placeholder="Contact" /> */}

        <Suspense fallback={null}>
          <ClearFiltersButton />
        </Suspense>
      </div>
    </div>
  );
};

export default AdminsFilter;
