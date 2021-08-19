import React, { Component } from "react";

class SortHeadingTable extends Component {
  render() {
    const { onSort, sortHeaderItems } = this.props;
    return (
      <tr>
        {sortHeaderItems.map((itemHeader) => (
          <th key={itemHeader.path} onClick={() => onSort(itemHeader.path)}>
            {itemHeader.label}
          </th>
        ))}
      </tr>
    );
  }
}

export default SortHeadingTable;
