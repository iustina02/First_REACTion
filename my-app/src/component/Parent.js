import React, { Component } from "react";

import { FirstPage } from "./Pages/FirstPage";
import { SecondPage } from "./Pages/SecondPage";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThirdPage } from "./Pages/ThirdPage";

export class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0 };
    this.handleClick = this.handleClick.bind(this);
    console.log("Constructor");
  }

  handleClick() {
    this.setState({
      likes: this.state.likes + 1,
    });
  }
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/home">
              <FirstPage nume={this.handleClick} likes={this.state.likes} />
            </Route>
            <Route path="/secondPage">
              <SecondPage nume={this.handleClick} likes={this.state.likes} />
            </Route>
            <Route path="/thirdPage">
              <ThirdPage nume={this.handleClick} likes={this.state.likes} />
            </Route>
          </Switch>
        </Router>
      </>
    );
  }
}
