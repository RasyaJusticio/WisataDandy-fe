"use client";

import {
  DashboardModal,
  DashboardTable,
  destinationColumns,
  DestinationFormData,
  DestinationReadForm,
  destinationService,
  TableRow,
} from "@/src/features/dashboard";
import React, { useState } from "react";

const DestinationPage = () => {
  const { data, isLoading } = destinationService.useDestination();

  const [isCreateModalOpen, setCreateModalOpen] = useState(false);
  const [readDataSource, setReadDataSource] = useState<DestinationFormData>();
  const [isReadModalOpen, setReadModalOpen] = useState(false);
  const [isUpdateModalOpen, setUpdateModalOpen] = useState(false);

  const onCreate = () => {
    setCreateModalOpen(true);
  };

  const onRead = (data: TableRow) => {
    setReadDataSource(data as DestinationFormData);
    setReadModalOpen(true);
  };

  const onUpdate = () => {
    setUpdateModalOpen(true);
  };

  const onDelete = () => {};

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
        {({ close }) => (
          <DestinationReadForm
            dataSource={readDataSource != null ? readDataSource : null}
            close={close}
          />
        )}
      </DashboardModal>

      <DashboardModal isOpen={isUpdateModalOpen} setOpen={setUpdateModalOpen}>
        {({ close }) => <span>Update Modal</span>}
      </DashboardModal>
    </>
  );
};

export default DestinationPage;
