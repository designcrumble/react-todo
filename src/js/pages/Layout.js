import React from "react";

import Footer from "../components/Footer";
import Header from "../components/Header";

import { Link } from "react-router";
export default class Layout extends React.Component {

  constructor() {
    super();
    this.state = {
      title: "Welcome Kshitij",
    };
  }

  changeTitle(title) {
    this.setState({title});
  }

  render() {
    return (
      <div>
        <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
        <Link to="settings">Settings</Link>
        <h1>FigmaFreebies.net</h1>
      </div>
    );
  }
}