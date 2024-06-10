"use client";

import {
  DashboardModal,
  DashboardTable,
  facilityColumns,
  facilityService,
  TableRow,
} from "@/src/features/dashboard";
import FacilityDeleteForm from "@/src/features/dashboard/components/forms/FacilityDeleteForm";
import React, { useState } from "react";

const FacilityPage = () => {
  const { data, isLoading, mutate } = facilityService.useFacility();

  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteDataSource, setDeleteDataSource] = useState<number>(0);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const onCreate = () => {
    setCreateModalOpen(true);
  };

  const onUpdate = () => {
    setUpdateModalOpen(true);
  };

  const onDelete = (data: number) => {
    setDeleteDataSource(data);
    setDeleteModalOpen(true);
  };

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
        {({ close }) => <span>Update Modal</span>}
      </DashboardModal>

      <DashboardModal isOpen={isDeleteModalOpen} setOpen={setDeleteModalOpen}>
        {({ close }) => (
          <FacilityDeleteForm
            dataSource={deleteDataSource}
            close={close}
            mutate={mutate}
          />
        )}
      </DashboardModal>
    </>
  );
};

export default FacilityPage;
