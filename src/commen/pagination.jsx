import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

const Pagination = (props) => {
  const { pageItemCount, pageNum, currentPage, onSelectNum } = props;
  const pages = Math.ceil(pageItemCount / pageNum + 1);
  let page = _.range(1, pages);
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {page.map((p) => (
          <li
            key={p}
            onClick={() => onSelectNum(p)}
            className={currentPage === p ? "page-item active" : "page-item"}
          >
            {/* eslint-disable-next-line*/}
            <a className="page-link">{p}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  pageItemCount: PropTypes.number.isRequired,
  pageNum: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onSelectNum: PropTypes.func.isRequired,
};
export default Pagination;
