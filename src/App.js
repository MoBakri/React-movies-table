import React, { Component } from "react";
import Calculators from "./components/calculators";
import NavBar from "./components/navBar";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: [
        {
          id: 1,
          value: 4,
          Like: false,
        },
        {
          id: 2,
          value: 0,
          Like: false,
        },
        {
          id: 3,
          value: 0,
          Like: false,
        },
      ],
    };
  }

  handleIncrement = (count) => {
    const counters = [...this.state.counter]; // copy from the origenal array
    let index = counters.indexOf(count); //
    counters[index] = { ...count }; //
    counters[index].value++;
    this.setState({ counter: counters });
  };

  handleDescrement = (count) => {
    if (count.value > 0) {
      const counter = [...this.state.counter];
      let index = counter.indexOf(count);
      counter[index] = { ...count };
      counter[index].value--;
      this.setState({ counter });
    }
  };

  handleDelete = (countId) => {
    let counter = this.state.counter.filter((c) => c.id !== countId);
    this.setState({ counter });
  };

  handleReset = () => {
    const counter = [...this.state.counter];
    counter.map((c) => [(c.value = 0), (c.Like = false)]);
    this.setState({ counter });
  };
  onLike = (liked) => {
    let counter = [...this.state.counter];
    let index = counter.indexOf(liked);
    counter[index] = { ...liked };
    counter[index].Like = !liked.Like;
    this.setState({ counter });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar counter={this.state.counter} />
        <Calculators
          key={this.state.counter.id}
          value={this.state.value}
          onHandleincrement={this.handleIncrement}
          onHandleDescrement={this.handleDescrement}
          onHandleDel={this.handleDelete}
          onReset={this.handleReset}
          counter={this.state.counter}
          onlike={this.onLike}
        />
      </React.Fragment>
    );
  }
}
export default App;
