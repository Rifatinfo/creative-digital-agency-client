"use client";

// import ClearFiltersButton from "@/components/shared/ClearFiltersButton";
import RefreshButton from "@/components/shared/RefreshButton";
import ClearFiltersButton from "../shared/ClearFiltersButton";
import SearchFilter from "../shared/SearchFilter";

const CustomerFilter = () => {
  return (
    <div className=" flex items-center justify-start gap-2">
      {/* Row 1: Search and Refresh */}
      <div className="flex items-center gap-3">
        <SearchFilter paramName="searchTerm" placeholder="Search Customer..." />
        <RefreshButton />
      </div>

      {/* Row 2: Filter Controls */}
      <div className="flex items-center gap-3">
        {/* Email Filter */}
        <SearchFilter paramName="email" placeholder="Customer Email" />

        {/* Contact Number Filter */}
        {/* <SearchFilter paramName="contactNumber" placeholder="Contact" /> */}

        <ClearFiltersButton />
      </div>
    </div>
  );
};

export default CustomerFilter;