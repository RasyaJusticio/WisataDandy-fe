"use client";

import {
  DashboardTable,
  facilityColumns,
  facilityService,
  TableRow,
} from "@/src/features/dashboard";
import React from "react";

const FacilityPage = () => {
  const { data, isLoading } = facilityService.useFacility();

  return (
    <div className="flex flex-col p-5">
      <h2 className="text-xl font-semibold mb-5">Manajemen Fasilitas</h2>
      <DashboardTable
        columns={facilityColumns}
        rows={data as TableRow[]}
        dataName="Fasilitas"
        loading={isLoading}
      />
    </div>
  );
};

export default FacilityPage;
