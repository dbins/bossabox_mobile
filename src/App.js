import React, { Component } from "react";
import CreateRouter from "./routes";
import {LogBox} from 'react-native'


export default class App extends Component {
  render() {
	LogBox.ignoreAllLogs(true)
    return (
        <CreateRouter />
    );
  }
}
