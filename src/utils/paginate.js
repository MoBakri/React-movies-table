import _ from "lodash";

export const Paginate = (items, currentPage, pageSize) => {
  return _(items)
    .slice((currentPage - 1) * pageSize)
    .take(pageSize)
    .value();
};
