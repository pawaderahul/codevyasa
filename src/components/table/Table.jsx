import React from "react";
import { usePagination, useTable } from "react-table";
import { productColumns } from "../../utils/mock-data";
import MOCK_DATA from "./MOCK_DATA.json";
import { RxCaretSort } from "react-icons/rx";
import {
  RiArrowRightDoubleLine,
  RiArrowLeftDoubleLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import "./Table.scss";

const Table = () => {
  const columns = React.useMemo(() => productColumns, []);
  const data = React.useMemo(() => MOCK_DATA, []);

  const tableInstance = useTable(
    { columns, data, initialState: { pageSize: 10 } },
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

      <section className="pagination-container">
        <button onClick={() => gotoPage(0)}>
          <RiArrowLeftDoubleLine />
        </button>
        <button onClick={previousPage}>
          <RiArrowLeftSLine />
        </button>
        {pageOptions.map((opt) => {
          return opt < 3 ? (
            <button
              className={"page-index" + (pageIndex === opt ? " active" : "")}
              key={opt}
              onClick={() => gotoPage(opt)}
            >
              {opt + 1}
            </button>
          ) : null;
        })}
        {pageOptions.length > 4 && (
          <section className="last-page">
            <div>...</div>
            <button
              className={
                "page-index" + (pageIndex === pageCount - 1 ? " active" : "")
              }
              onClick={() => gotoPage(pageCount - 1)}
            >
              {pageCount}
            </button>
          </section>
        )}
        <button onClick={nextPage}>
          <RiArrowRightSLine />
        </button>
        <button onClick={() => gotoPage(pageCount - 1)}>
          <RiArrowRightDoubleLine />
        </button>
      </section>
    </section>
  );
};

export default Table;
