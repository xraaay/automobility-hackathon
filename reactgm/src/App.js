import React, { Component } from "react";
import styles from "./App.module.css";
import { Modal } from 'react-bootstrap';

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
      <div className={styles.root}>
        <div>VIN: {this.state.vin}</div>
        <div>VIN: {this.state.vin}</div>
        <button onClick={this.handleClose}>Close</button>

        <Modal show={true} close>
        <Modal.Body>
          <span style={{ color: 'white', backgroundColor: 'white'}}>sdskjfksdl</span>
        </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default App;
