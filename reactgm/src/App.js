import React, { Component } from "react";
import styles from "./App.module.css";
import "./App.css";
import swal from 'sweetalert2' 
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalStore from './reducers/index';
import ContentRouter from './Layout/ContentRouter'
import List from './containers/List';


const store = createStore(globalStore)

const gm = window.gm;
class App extends Component {
  state = {
    vin: "pending..."
  };

  componentDidMount() {
    const vin = gm.info.getVIN();
    this.setState({ vin });
    ngi.modal.load({
      title: 'Mistakes Were Made',
      body: 'An error has occurred, please try again later!',
      timeout: -1,
      actions: [
        {
          label: 'Retry',
          action: function() { }
        },
        {
          label: 'Cancel',
          action: function() { }
        }
      ]
    }).then(function() {
      console.log('Modal dismissed!');
    });
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
          <Layout />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
