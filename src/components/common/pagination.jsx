import React from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize } = props;
  const pagesCount = itemsCount / pageSize;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <span className="page-link">{page}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
