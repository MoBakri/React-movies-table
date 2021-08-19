import React, { Component } from "react";
import _ from "lodash";
class TableBody extends Component {
  columnContent = (item, columnHead) => {
    if (columnHead.content) return columnHead.content(item);
    return _.get(item, columnHead.path);
  };
  render() {
    const { data, column } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {column.map((columnHead) => (
              <td key={columnHead.path || columnHead.key}>
                {this.columnContent(item, columnHead)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
