import {
  DashboardTable,
  destinationColumns,
  TableRow,
} from "@/src/features/dashboard";
import React from "react";

const rows: TableRow[] = [
  {
    id: 1,
    name: "Labuan Bajo",
    description: "Tempat wisata yang bagus bernama Labuan Bajo",
    address: "Di sini senang di sana senang di mana-mana hatiku senang.",
  },
  {
    id: 1,
    name: "Labuan Bajo",
    description: "Tempat wisata yang bagus bernama Labuan Bajo",
    address: "Di sini senang di sana senang di mana-mana hatiku senang.",
  },
  {
    id: 1,
    name: "Labuan Bajo",
    description: "Tempat wisata yang bagus bernama Labuan Bajo",
    address: "Di sini senang di sana senang di mana-mana hatiku senang.",
  },
  {
    id: 1,
    name: "Labuan Bajo",
    description: "Tempat wisata yang bagus bernama Labuan Bajo",
    address: "Di sini senang di sana senang di mana-mana hatiku senang.",
  },
  {
    id: 1,
    name: "Labuan Bajo",
    description: "Tempat wisata yang bagus bernama Labuan Bajo",
    address: "Di sini senang di sana senang di mana-mana hatiku senang.",
  },
  {
    id: 1,
    name: "Labuan Bajo",
    description: "Tempat wisata yang bagus bernama Labuan Bajo",
    address: "Di sini senang di sana senang di mana-mana hatiku senang.",
  },
  {
    id: 1,
    name: "Labuan Bajo",
    description: "Tempat wisata yang bagus bernama Labuan Bajo",
    address: "Di sini senang di sana senang di mana-mana hatiku senang.",
  },
  {
    id: 1,
    name: "Labuan Bajo",
    description: "Tempat wisata yang bagus bernama Labuan Bajo",
    address: "Di sini senang di sana senang di mana-mana hatiku senang.",
  },
  {
    id: 1,
    name: "Labuan Bajo",
    description: "Tempat wisata yang bagus bernama Labuan Bajo",
    address: "Di sini senang di sana senang di mana-mana hatiku senang.",
  },
];

const DestinationPage = () => {
  return (
    <div className="flex flex-col p-5">
      <h2 className="text-xl font-semibold mb-5">Manajemen Destinasi</h2>
      <DashboardTable
        columns={destinationColumns}
        rows={rows}
        dataName="Destinasi"
      />
    </div>
  );
};

export default DestinationPage;
