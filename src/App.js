import React, { Component } from "react";
import Main from "./Main";

import { createStore } from "redux";
import reducer from "./reducers";
const initialState = { title: "Hi", name: "Sam" };
const store = createStore(reducer, initialState);

class App extends Component {

  render() {
    return <Main title={store.getState().title} name={store.getState().name} />;
  }
}

export default App;
