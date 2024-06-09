import {
  DashboardTable,
  facilityColumns,
  TableRow,
} from "@/src/features/dashboard";
import React from "react";

const rows: TableRow[] = [
  {
    id: 1,
    name: "Toilet",
  },
];

const FacilityPage = () => {
  return (
    <div className="flex flex-col p-5">
      <h2 className="text-xl font-semibold mb-5">Manajemen Fasilitas</h2>
      <DashboardTable
        columns={facilityColumns}
        rows={rows}
        dataName="Fasilitas"
      />
    </div>
  );
};

export default FacilityPage;
