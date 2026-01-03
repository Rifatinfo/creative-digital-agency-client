"use client";

// import ClearFiltersButton from "@/components/shared/ClearFiltersButton";
import RefreshButton from "@/components/shared/RefreshButton";
import ClearFiltersButton from "../shared/ClearFiltersButton";
import SearchFilter from "../shared/SearchFilter";

const CampaignFilter = () => {
  return (
    <div className="flex items-center justify-start gap-2">
      {/* Row 1: Search and Refresh */}
      <div className="flex items-center gap-3">
        <SearchFilter paramName="searchTerm" placeholder="Search Campaign..." />
        <RefreshButton />
      </div>

      {/* Row 2: Filter Controls */}
      <div className="flex items-center gap-3">
        {/* Email Filter */}
        <SearchFilter paramName="title" placeholder="Title" />

        {/* Contact Number Filter */}
        {/* <SearchFilter paramName="contactNumber" placeholder="Contact" /> */}

        <ClearFiltersButton />
      </div>
    </div>
  );
};

export default CampaignFilter;