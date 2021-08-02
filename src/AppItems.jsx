import React, { Component } from "react";
import "./App.css";

class AppItems extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  counterHandler = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  following() {
    if (this.state.count < 1) {
      return "follow";
    } else {
      return "following";
    }
  }
  render() {
    return (
      <div className="col-sm-6">
        <ul className="list-group profile-card">
          <img
            className="list-group-item"
            src={this.props.img}
            alt={this.props.name}
          />
          <div className="list-group-item">
            <button
              className="btn btn-info btn-sm p-2"
              style={{
                backgroundColor: "lightBlue",
                textAlign: "center",
              }}
              onClick={this.counterHandler}
            >
              {this.following()}
            </button>
            <span
              style={{
                padding: "9px",
                marginLeft: "19px",
                backgroundColor: "lightgray",
                position: "absolute",
                top: "center",
                right: 0,
              }}
            >
              {this.state.count} followers
            </span>
          </div>
          <li
            className="list-group-item text-center"
            style={{ fontWeight: "bold" }}
          >
            {this.props.name}
          </li>
          <li className="list-group-item">
            <strong>Phone</strong> : {this.props.Phone}
          </li>
          <li className="list-group-item">
            <strong>Email</strong>: {this.props.Email}
          </li>
          <li
            className="list-group-item"
            style={{
              backgroundColor:
                this.props.gender === "female" ? "white" : "gray",
            }}
          >
            <strong>Gender</strong>: {this.props.gender}
          </li>
          <li className="list-group-item">
            <strong>website</strong>: {this.props.website}
          </li>
        </ul>
      </div>
    );
  }
}
export default AppItems;
