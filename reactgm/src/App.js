import React, { Component } from "react";
import styles from "./App.module.css";
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalStore from './reducers/index';


const store = createStore(globalStore)

const gm = window.gm;

const onSuccess = (data) => {
  console.log('DATA TESTING ' + data.change_oil_ind)
}

const onFailure = () => {
  console.log('faileddddd')
}

class App extends Component {
  state = {
    vin: "pending...",
    vehicle: {}
  };

  componentDidMount() {
    const vin = gm.info.getVIN();
    this.setState({ vin });
    const vehicleData = gm.info.getVehicleData(onSuccess, onFailure, ["change_oil_ind"])
    this.setState({ vehicle: vehicleData })
  }

  handleClose = () => {
    gm.system.closeApp();
  };

  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className={styles.root}>
          <div>VIN: {this.state.vin}</div>
          <button onClick={this.handleClose}>Close</button>
          <div>Vehicle Light: {JSON.stringify(this.state.vehicle)}</div>
          <Layout />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
