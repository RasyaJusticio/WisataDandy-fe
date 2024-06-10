"use client";

import {
  DashboardModal,
  DashboardTable,
  facilityColumns,
  facilityService,
  TableRow,
} from "@/src/features/dashboard";
import FacilityCreateForm from "@/src/features/dashboard/components/forms/FacilityCreateForm";
import React, { useState } from "react";

const FacilityPage = () => {
  const { data, isLoading, mutate } = facilityService.useFacility();

  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

  const onCreate = () => {
    setCreateModalOpen(true);
  };

  const onUpdate = () => {
    setUpdateModalOpen(true);
  };

  const onDelete = () => {};

  return (
    <>
      <div className="flex flex-col p-5">
        <h2 className="text-xl font-semibold mb-5">Manajemen Fasilitas</h2>
        <DashboardTable
          columns={facilityColumns}
          rows={data as TableRow[]}
          dataName="Fasilitas"
          loading={isLoading}
          onCreate={onCreate}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </div>

      <DashboardModal isOpen={isCreateModalOpen} setOpen={setCreateModalOpen}>
        {({ close }) => <FacilityCreateForm close={close} mutate={mutate} />}
      </DashboardModal>

      <DashboardModal isOpen={isUpdateModalOpen} setOpen={setUpdateModalOpen}>
        {({ close }) => <span>Update Modal</span>}
      </DashboardModal>
    </>
  );
};

export default FacilityPage;
