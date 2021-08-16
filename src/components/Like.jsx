import React, { Component } from "react";
class Like extends Component {
  heart() {
    if (this.props.like.like === false) {
      return "fa fa-heart-o";
    } else {
      return "fa fa-heart";
    }
  }
  render() {
    return (
      <i
        className={this.heart()}
        onClick={() => this.props.liked(this.props.like)}
        style={{ cursor: "pointer" }}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;
