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
      <React.Component>
        <button className="btn btn-xl btn-outline-light">Find Me A Drill</button>

        <Modal>
          <Modal.Body>
            <div className={styles.root}>
              <div>VIN: {this.state.vin}</div>
              <button onClick={this.handleClose}>Close</button>
            </div>
          </Modal.Body>
        </Modal>
      </React.Component>
    );
  }
}

export default App;
