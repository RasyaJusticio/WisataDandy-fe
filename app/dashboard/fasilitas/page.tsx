"use client";

import {
  DashboardModal,
  DashboardTable,
  facilityColumns,
  FacilityObject,
  facilityService,
  TableRow,
} from "@/src/features/dashboard";
import FacilityUpdateForm from "@/src/features/dashboard/components/forms/FacilityUpdateForm";
import React, { useState } from "react";

const FacilityPage = () => {
  const { data, isLoading, mutate } = facilityService.useFacility();

  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [updateDataSource, setUpdateDataSource] = useState<FacilityObject>();
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

  const onCreate = () => {
    setCreateModalOpen(true);
  };

  const onUpdate = (data: TableRow) => {
    setUpdateDataSource(data as FacilityObject);
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
        {({ close }) => <span>Create Modal</span>}
      </DashboardModal>

      <DashboardModal isOpen={isUpdateModalOpen} setOpen={setUpdateModalOpen}>
        {({ close }) => (
          <FacilityUpdateForm
            dataSource={updateDataSource}
            close={close}
            mutate={mutate}
          />
        )}
      </DashboardModal>
    </>
  );
};

export default FacilityPage;
