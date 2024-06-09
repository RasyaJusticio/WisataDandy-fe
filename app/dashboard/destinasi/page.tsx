"use client";

import {
  DashboardTable,
  destinationColumns,
  destinationService,
  TableRow,
} from "@/src/features/dashboard";
import React from "react";

const DestinationPage = () => {
  const { data, isLoading } = destinationService.useDestination();

  return (
    <div className="flex flex-col p-5">
      <h2 className="text-xl font-semibold mb-5">Manajemen Destinasi</h2>
      <DashboardTable
        columns={destinationColumns}
        rows={data as TableRow[]}
        dataName="Destinasi"
        loading={isLoading}
      />
    </div>
  );
};

export default DestinationPage;
