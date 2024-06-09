"use client";

import React from "react";
import {
  Button,
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from "react-aria-components";
import { PiEye, PiPencil, PiTrash } from "react-icons/pi";

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
  rows: Row[];
  dataName: string;
}>;

const MyTable = ({ columns, rows, dataName }: Props) => {
  return (
    <>
      <div className="flex mb-3">
        <Button className="bg-accent-600 px-3 py-1.5 rounded-md transition-colors hover:bg-accent-700">
          + {dataName} Baru
        </Button>
      </div>
      <div className="overflow-auto rounded-md">
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
            {rows.map((row, rowId) => (
              <Row
                key={rowId}
                className="border-b-2 border-border last:border-b-0"
              >
                {columns.map((column, colId) => (
                  <Cell
                    key={colId}
                    className="p-3 bg-secondary"
                  >
                    <span className="text-nowrap overflow-hidden text-ellipsis">
                      {row[column.dataKey]}
                    </span>
                  </Cell>
                ))}
                <Cell className="p-3 bg-secondary rounded-br-md">
                  <div className="flex gap-1">
                    <Button className="hover:bg-accent-600 rounded-md transition-all p-2">
                      <PiEye />
                    </Button>
                    <Button className="hover:bg-accent-600 rounded-md transition-all p-2">
                      <PiPencil />
                    </Button>
                    <Button className="hover:bg-accent-600 rounded-md transition-all p-2">
                      <PiTrash />
                    </Button>
                  </div>
                </Cell>
              </Row>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default MyTable;
