import React from "react";
import { usePagination, useTable } from "react-table";
import { productColumns } from "../../utils/mock-data";
import MOCK_DATA from "./MOCK_DATA.json";
import { RxCaretSort } from "react-icons/rx";
import "./Table.scss";
import { Pagination } from "../products/pagination/Pagination";

const Table = () => {
  const columns = React.useMemo(() => productColumns, []);
  const data = React.useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    { columns, data, initialState: { pageSize: 12 } },
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    pageOptions,
    gotoPage,
    pageCount,
    state,
    prepareRow,
  } = tableInstance;

  const { pageIndex } = state;

  return (
    <section className="table-container">
      <table {...getTableProps()}>
        <colgroup>
          {productColumns.map((pc, i) => {
            return <col key={i} />;
          })}
        </colgroup>

        <thead>
          {headerGroups.map((headerGrp) => {
            const { key, ...restHeaderProps } = headerGrp.getHeaderGroupProps();
            return (
              <tr key={key} {...restHeaderProps}>
                {headerGrp.headers.map((column) => {
                  const { key, restHeaderProps } = column.getHeaderProps();
                  return (
                    <th key={key} {...restHeaderProps}>
                      <section className="heading">
                        <span>{column.render("Header")}</span>
                        <RxCaretSort />
                      </section>
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>

        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            const { key, restRowProps } = row.getRowProps();
            return (
              <tr key={key} {...restRowProps}>
                {row.cells.map((cell) => {
                  const { key, restCellProps } = cell.getCellProps();
                  return (
                    <td key={key} {...restCellProps}>
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>

      <Pagination
        gotoPage={gotoPage}
        previousPage={previousPage}
        nextPage={nextPage}
        pageOptions={pageOptions}
        pageIndex={pageIndex}
        pageCount={pageCount}
      />
    </section>
  );
};

export default Table;
