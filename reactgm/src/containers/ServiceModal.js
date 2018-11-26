import React from 'react';
import { Modal, Button } from 'react-bootstrap';


class ServiceModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: true
        }

        this.handleClose = this.handleClose.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }
    
    handleClose() {
        this.setState({ show: true})
    }

    // onSubmit() {

    // }


    render() {
        return (
            <React.Fragments>
            <Modal show={this.state.show}>
                <Modal.Header>
                    <Modal.Title>Vehicle Maintenance</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span style={{color: 'white'}}>Testing</span> 1, 2, 3

                </Modal.Body>
            </Modal>

            </React.Fragments>
        )
    }
}

export default ServiceModal;