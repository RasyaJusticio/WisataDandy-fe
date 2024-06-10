"use client";

import React from "react";
import {
  Button,
  Cell,
  Column,
  PressEvent,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "react-aria-components";
import { PiCircleNotch, PiEye, PiPencil, PiTrash } from "react-icons/pi";

export interface Column {
  label: string;
  dataKey: string;
  width?: string;
}

export type Row = {
  [key: string]: any;
};

type Props = Readonly<{
  columns: Column[];
  rows?: Row[];
  dataName: string;
  loading?: boolean;
  onCreate?: (e: PressEvent) => void;
  onRead?: (data: Row) => void;
  onUpdate?: (data: Row) => void;
  onDelete?: (data: number) => void;
}>;

const MyTable = ({
  columns,
  rows,
  dataName,
  loading = false,
  onRead,
  onCreate,
  onUpdate,
  onDelete,
}: Props) => {
  return (
    <>
      <div className="flex items-center mb-3 gap-3">
        <Button
          onPress={onCreate}
          className="bg-accent-600 px-3 py-1.5 rounded-md transition-colors hover:bg-accent-700"
        >
          + {dataName} Baru
        </Button>
        {loading && <PiCircleNotch className="text-2xl animate-spin" />}
      </div>
      <div className="overflow-auto rounded-md pb-[1px]">
        <Table className="border-collapse w-full">
          <TableHeader>
            {columns.map((column, colId) => (
              <Column
                key={colId}
                className="text-start bg-primary p-3 first:rounded-tl-md"
                isRowHeader
              >
                {column.label}
              </Column>
            ))}
            <Column
              isRowHeader
              className="text-start w-[10%] bg-primary rounded-tr-md p-3"
            ></Column>
          </TableHeader>
          <TableBody>
            {rows && rows.length > 0 ? (
              rows.map((row, rowId) => (
                <Row
                  key={rowId}
                  className="border-b-2 border-border last:border-b-0"
                >
                  {columns.map((column, colId) => (
                    <Cell key={colId} className="p-3 bg-secondary">
                      <span className="text-nowrap overflow-hidden text-ellipsis">
                        {row[column.dataKey]}
                      </span>
                    </Cell>
                  ))}
                  <Cell className="p-3 bg-secondary rounded-br-md">
                    <div className="flex gap-1">
                      <Button
                        onPress={() => onRead && onRead(row)}
                        className="hover:bg-accent-600 rounded-md transition-all p-2"
                      >
                        <PiEye />
                      </Button>
                      <Button
                        onPress={() => onUpdate && onUpdate(row)}
                        className="hover:bg-accent-600 rounded-md transition-all p-2"
                      >
                        <PiPencil />
                      </Button>
                      <Button
                        onPress={() => onDelete && onDelete(row?.id || 0)}
                        className="hover:bg-accent-600 rounded-md transition-all p-2"
                      >
                        <PiTrash />
                      </Button>
                    </div>
                  </Cell>
                </Row>
              ))
            ) : (
              <Row className="border-b-2 border-border last:border-b-0">
                {columns.map(
                  (_, index) =>
                    index <= columns.length - 1 && (
                      <Cell key={index} className="relative p-3 bg-secondary">
                        -
                      </Cell>
                    )
                )}
                <Cell className="relative p-3 bg-secondary"></Cell>
              </Row>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default MyTable;
