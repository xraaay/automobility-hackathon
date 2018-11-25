import React, { Component } from "react";
import styles from "./App.module.css";
import {Table} from 'react-bootstrap'''

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
      <React.Fragment>
        <div className={styles.root}>
          <div>VIN: {this.state.vin}</div>
          <button onClick={this.handleClose}>Close</button>
          
        </div>
      </React.Fragment>
    );
  }
}

export default App;
