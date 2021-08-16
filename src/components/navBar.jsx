import React, { Component } from "react";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav className="nav justify-content-center">
        <h3 className="nav-brand bg-red">
          Count your Items{" "}
          <span className="badge badge-pill badge-secondary">
            {this.props.counter.filter((c) => c.value > 0).length}
          </span>
        </h3>
      </nav>
    );
  }
}

export default NavBar;
