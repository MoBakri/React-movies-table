import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";
class TableBody extends Component {
  columnContent = (item, columnHead) => {
    if (columnHead.content) return columnHead.content(item);
    return _.get(item, columnHead.path);
  };
  linkTitle = (item, columnHead) => {
    if (columnHead.path === "title")
      return (
        <Link to={`/movies/${item._id}`}>
          {this.columnContent(item, columnHead)}
        </Link>
      );
    return <span>{this.columnContent(item, columnHead)}</span>;
  };
  render() {
    const { data, column } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {column.map((columnHead) => (
              <td key={columnHead.path || columnHead.key}>
                {this.linkTitle(item, columnHead)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
