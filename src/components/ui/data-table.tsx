import {
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
    ColumnDef,
  } from "@tanstack/react-table";
  import { useState } from "react";
  import { Button } from "@/components/ui/button";
  
  interface Props<T extends Record<string, unknown>> {
    columns: ColumnDef<T>[];
    data: T[];
    pageSize?: number;
  }
  
  export function DataTable<T extends Record<string, unknown>>({
    columns,
    data,
    pageSize = 20,
  }: Props<T>) {
    const [sorting, setSorting] = useState<SortingState>([]);
  
    const table = useReactTable({
      data,
      columns,
      state: { sorting },
      onSortingChange: setSorting,
      getCoreRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      initialState: { pagination: { pageSize } },
    });
  
    return (
      <div className="border rounded-lg">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            {table.getHeaderGroups().map((hg) => (
              <tr key={hg.id}>
                {hg.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-2 py-1 cursor-pointer select-none"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    {{ asc: " ↑", desc: " ↓" }[header.column.getIsSorted() as string] || null}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="even:bg-muted/20">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-2 py-1">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
  
        {/* Pagination */}
        <div className="flex items-center justify-between p-2 text-xs">
          <div>
            Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </div>
          <div className="space-x-1">
            <Button
              variant="ghost"
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
            >
              Prev
            </Button>
            <Button
              variant="ghost"
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    );
  }