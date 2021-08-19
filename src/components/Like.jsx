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
    const bgHeard = "rgb(214, 0, 0)";
    const { like } = this.props;
    return (
      <i
        className={this.heart()}
        onClick={() => this.props.liked(this.props.like)}
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
