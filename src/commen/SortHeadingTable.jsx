import React, { Component } from "react";

class SortHeadingTable extends Component {
  onSortIcon = (itemHeader) => {
    if (itemHeader.path !== this.props.sortColumn.path) return null;
    if (this.props.sortColumn.order === "asc")
      return <i className="fa fa-sort-asc" aria-hidden="true"></i>;
    return (
      <i
        className="fa fa-sort-desc"
        style={{ color: "red" }}
        aria-hidden="true"
      ></i>
    );
  };
  render() {
    const { onSort, sortHeaderItems } = this.props;
    return (
      <tr>
        {sortHeaderItems.map((itemHeader) => (
          <th
            key={itemHeader.path || itemHeader.key}
            onClick={() => onSort(itemHeader.path)}
          >
            {itemHeader.label} {this.onSortIcon(itemHeader)}
          </th>
        ))}
      </tr>
    );
  }
}

export default SortHeadingTable;
