import React from 'react';
import { Modal, Button } from 'react-bootstrap';


class ServiceModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            show: false
        }

        this.handleClose = this.handleClose.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        this.handleShow = this.handleShow.bind(this);
    }

    handleClose() {
        this.setState({ show: true })
    }

    handleShow() {
        this.setState({ show: true })
    }

    // onSubmit() {

    // }

    render() {
        const modalStyle = {
            position: 'fixed',
            zIndex: 1040,
            top: 0, bottom: 0, left: 0, right: 0
        };

        const backdropStyle = {
            ...modalStyle,
            zIndex: 'auto',
            backgroundColor: '#000',
            opacity: 0.5
        };

        return (
            <React.Fragments>
                <Button type="button" class="btn btn-primary" type="submit" onClick={this.handleShow}>
                    Launch demo modal       
                </Button>
                <Modal show={this.state.show} animation={false} backdropStyle={backdropStyle}>
                    <Modal.Header>
                        <Modal.Title>Vehicle Maintenance</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <span style={{ color: 'white' }}>Testing</span> 1, 2, 3
    
                </Modal.Body>
                </Modal>

            </React.Fragments>
        )
    }
}

export default ServiceModal;