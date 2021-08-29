import React, { Component } from "react";
class Like extends Component {
  heart() {
    if (this.props.like.like) {
      return "fa fa-heart";
    } else {
      return "fa fa-heart-o";
    }
  }
  render() {
    const bgHeard = "rgb(214, 0, 0)";
    const { like, liked } = this.props;
    return (
      <i
        className={this.heart()}
        onClick={() => liked(this.props.like)}
        style={{
          cursor: "pointer",
          color: like.like === true ? bgHeard : null,
        }}
        aria-hidden="true"
      ></i>
    );
  }
}

export default Like;
