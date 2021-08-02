import React, { Component } from "react";
import AppItems from "./AppItems";
import { info } from "./info";
class App extends Component {
  constructor() {
    super();
    this.state = { info: info, members: [], count: 0 };
  }

  clickHander = () => {
    if (this.state.count < this.state.info.length) {
      this.state.members.push(this.state.info[this.state.count]);
      this.setState({
        count: this.state.count + 1,
      });

      this.newMember = this.state.members.map((member) => (
        <AppItems
          name={member.name}
          key={member.id}
          img={member.img}
          Phone={member.Phone}
          gender={member.gender}
          website={member.website}
        />
      ));
    }
  };
  visb() {
    if (this.state.info.length > this.state.count) {
      return "visible";
    } else {
      return "hidden";
    }
  }
  render() {
    return (
      <div className="container">
        <button
          className="btn btn-success"
          style={{ visibility: this.visb() }}
          onClick={this.clickHander}
        >
          Add Profile
        </button>
        <div className="row">{this.newMember}</div>
      </div>
    );
  }
}
export default App;
