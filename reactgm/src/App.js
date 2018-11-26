import React, { Component } from "react";
import styles from "./App.module.css";
import swal from 'sweetalert2' 
import { BrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import globalStore from './reducers/index';


const store = createStore(globalStore)

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

  schedule = () => {
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: false,
    })
    
    swalWithBootstrapButtons({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        swalWithBootstrapButtons(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        // Read more about handling dismissals
        result.dismiss === swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className={styles.root}>
          <div>VIN: {this.state.vin}</div>
          <button onClick={this.handleClose}>Close</button>
          {/* <button onClick={this.schedule}>Schedule</button> */}
          <Layout />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
