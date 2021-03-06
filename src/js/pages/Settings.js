import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

export default class Settings extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "Settings",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }
  
  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <h1>Settings</h1>
      </div>
    );
  }
}