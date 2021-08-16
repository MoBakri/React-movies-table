import React, { Component } from "react";
import Calculator from "./calculator";
import Pagination from "../commen/pagination";
class Calculators extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onReset} className="badge badge-warning">
          Reset
        </button>
        {this.props.counter.map((counter) => (
          <Calculator
            key={counter.id}
            value={this.props.value}
            onHandleincrement={this.props.onHandleincrement}
            onHandleDescrement={this.props.onHandleDescrement}
            onHandleDel={this.props.onHandleDel}
            counter={counter}
            onlike={this.props.onlike}
          />
        ))}
        <Pagination />
      </div>
    );
  }
}

export default Calculators;
