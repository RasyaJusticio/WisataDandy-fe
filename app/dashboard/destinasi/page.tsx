"use client";

import {
  DashboardModal,
  DashboardTable,
  destinationColumns,
  DestinationDeleteForm,
  destinationService,
  TableRow,
} from "@/src/features/dashboard";
import React, { useState } from "react";

const DestinationPage = () => {
  const { data, isLoading, mutate } = destinationService.useDestination();

  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [isReadModalOpen, setReadModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);
  const [deleteDataSource, setDeleteDataSource] = useState<number>(0);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const onCreate = () => {
    setCreateModalOpen(true);
  };

  const onRead = () => {
    setReadModalOpen(true);
  };

  const onUpdate = () => {
    setUpdateModalOpen(true);
  };

  const onDelete = (data: number) => {
    setDeleteDataSource(data)
    setDeleteModalOpen(true);
  };

  return (
    <>
      <div className="flex flex-col p-5">
        <h2 className="text-xl font-semibold mb-5">Manajemen Destinasi</h2>
        <DashboardTable
          columns={destinationColumns}
          rows={data as TableRow[]}
          dataName="Destinasi"
          loading={isLoading}
          onCreate={onCreate}
          onRead={onRead}
          onUpdate={onUpdate}
          onDelete={onDelete}
        />
      </div>

      <DashboardModal isOpen={isCreateModalOpen} setOpen={setCreateModalOpen}>
        {({ close }) => <span>Create Modal</span>}
      </DashboardModal>

      <DashboardModal isOpen={isReadModalOpen} setOpen={setReadModalOpen}>
        {({ close }) => <span>Read Modal</span>}
      </DashboardModal>

      <DashboardModal isOpen={isUpdateModalOpen} setOpen={setUpdateModalOpen}>
        {({ close }) => <span>Update Modal</span>}
      </DashboardModal>

      <DashboardModal isOpen={isDeleteModalOpen} setOpen={setDeleteModalOpen}>
        {({ close }) => <DestinationDeleteForm mutate={mutate} dataSource={deleteDataSource} close={close} />}
      </DashboardModal>
    </>
  );
};

export default DestinationPage;
