import React, { Component } from "react";
import axios from "axios";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  //   Lifecycle method
  async componentDidMount() {
    const res = await axios.get(
      "https://api.aladhan.com/timingsByAddress/20-08-2020?address=jakarta&method=5"
    );
    this.setState({ timePrayer: res.data });
    console.log(this.state);
  }

  render() {
    return <div>{console.log(this.state.timePrayer.data)}</div>;
  }
}
