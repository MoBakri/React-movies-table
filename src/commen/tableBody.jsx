import React, { Component } from "react";
import _ from "lodash";
class TableBody extends Component {
  columnContent = (item, columnHead) => {
    if (columnHead.content) return columnHead.content(item);
    return _.get(item, columnHead.path);
  };

  render() {
    const { data, column, count } = this.props;
    return (
      <React.Fragment>
        {count === 0 ? <p>Current there is no movies</p> : null}
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
      </React.Fragment>
    );
  }
}

export default TableBody;
