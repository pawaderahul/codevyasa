import PropTypes from "prop-types";
import {
  RiArrowRightDoubleLine,
  RiArrowLeftDoubleLine,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import "./Pagination.scss";

export const Pagination = (props) => {
  const {
    gotoPage,
    previousPage,
    nextPage,
    pageOptions,
    pageIndex,
    pageCount,
  } = props;

  return (
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
  );
};

Pagination.propTypes = {
  gotoPage: PropTypes.func,
  previousPage: PropTypes.func,
  nextPage: PropTypes.func,
  pageOptions: PropTypes.array,
  pageIndex: PropTypes.number,
  pageCount: PropTypes.number,
};
