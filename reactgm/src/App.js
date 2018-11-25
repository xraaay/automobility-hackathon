import React, { Component } from "react";
import styles from "./App.module.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";

const gm = window.gm;

class App extends Component {
  state = {
    vin: "pending..."
  };

  componentDidMount() {
    const vin = gm.info.getVIN();
    this.setState({ vin });
  }

  handleClose = () => {
    gm.system.closeApp();
  };

  render() {
    return (
      <BrowserRouter>
        <div className={styles.root}>
          <div>VIN: {this.state.vin}</div>
          <button onClick={this.handleClose}>Close</button>
          <Layout />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
