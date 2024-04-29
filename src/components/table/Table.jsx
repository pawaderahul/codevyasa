/* eslint-disable react/prop-types */
import React from "react";
import { usePagination, useTable, useRowSelect } from "react-table";
import { productColumns } from "../../utils/mock-data";
import MOCK_DATA from "./MOCK_DATA.json";
import { RxCaretSort } from "react-icons/rx";
import "./Table.scss";
import { Pagination } from "../products/pagination/Pagination";
import { Checkbox } from "../products/checkbox/Checkbox";

const Table = () => {
  const columns = React.useMemo(() => productColumns, []);
  const data = React.useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    { columns, data, initialState: { pageSize: 12 } },
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => {
        return [
          {
            id: "selection",
            // eslint-disable-next-line react/prop-types
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <Checkbox {...getToggleAllRowsSelectedProps()} />
            ),
            Cell: ({ row }) => (
              <Checkbox {...row.getToggleRowSelectedProps()} />
            ),
          },
          ...columns,
          {
            id: "button",
            Header: () => <a>...</a>,
            Cell: () => <a>...</a>,
          },
        ];
      });
    }
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
      <section className="table-wrapper">
        <table className="table" {...getTableProps()}>
          <colgroup className="column-wrapper">
            {headerGroups[0].headers.map((i) => (
              <col className="column" key={i} />
            ))}
          </colgroup>

          <thead>
            {headerGroups.map((headerGrp) => {
              const { key, ...restHeaderProps } = headerGrp.getHeaderGroupProps();
              return (
                <tr key={key} {...restHeaderProps}>
                  {headerGrp.headers.map((column) => {
                    const { key, restHeaderProps } = column.getHeaderProps();
                    return (
                      <th key={key} {...restHeaderProps} className="header">
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
                <tr key={key} {...restRowProps} className="row">
                  {row.cells.map((cell) => {
                    const { key, restCellProps } = cell.getCellProps();
                    return (
                      <td key={key} {...restCellProps} className="cell">
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>

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
