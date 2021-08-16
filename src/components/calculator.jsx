import React, { Component } from "react";
import Like from "./Like";
class Calculator extends Component {
  render() {
    let formatColor = `badge badge-${this.formatColor()} p-2 m-2`;
    return (
      <div>
        <div style={{ display: "inline", maxWidth: "59px" }}>
          <span className={formatColor} style={{ color: "white" }}>
            {this.props.counter.value === 0 ? "Zero" : this.props.counter.value}
          </span>
        </div>
        <div className="col-sm-11">
          <button
            onClick={() => this.props.onHandleincrement(this.props.counter)}
            className="btn btn-primary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => this.props.onHandleDescrement(this.props.counter)}
            className="btn btn-primary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <Like like={this.props.counter} onlike={this.props.onlike} />
          <button
            onClick={() => this.props.onHandleDel(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
  formatColor() {
    if (this.props.counter.value === 0) {
      return "warning";
    } else {
      return "secondary";
    }
  }
}
export default Calculator;
