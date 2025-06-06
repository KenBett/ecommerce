// @\app\(dashboard)\[storeId]\(routes)\sizes\components\columns.tsx
"use client"

import { ColumnDef } from "@tanstack/react-table"

import { CellAction } from "./cellAction"

export type SizesColumn = {
  id: string
  name: string;
  value: string;
  createdAt: string;
}

export const columns: ColumnDef<SizesColumn>[] = [
  {
    accessorKey: "name",
    header: "name",
  },
  {
    accessorKey: "value",
    header: "Value",
  },
  {
    accessorKey: "createdAt",
    header: "Date"
  },
  {
    id: "actions",
    cell: ({row}) => <CellAction data={row.original}/>
  },
];
