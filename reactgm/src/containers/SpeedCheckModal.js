import React from 'react';
import { Modal } from 'react-bootstrap'; 

class SpeedCheckModal extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
        this.handleClose = this.handleClose.bind(this);
        
    }

    handleClose(){
        this.props.handleCloseModal(this.state.show);
    }

    render(){
        return(
            <React.Fragment>
                 <Modal show={this.props.speedCheck} animation={false} style={{ top: "25%"}} backdropStyle={{ opacity: 0.5 }}>
                    <Modal.Header style={{backgroundColor: "black"}}>
                        <Modal.Title style={{ textAlign: "center" }}>
                            <div>
                                <span className="glyphicon glyphicon-exclamation-sign" style={{ fontSize: "50px", color: "#F7CE3E" }} aria-hidden="true"></span>
                                <h2>Safety Alert</h2>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{backgroundColor: "black"}}>


                        <div className="container" style={{ fontWeight: "bold" }}>
                            <div className="row" style={{ color: "black" }}>

                                <p>You cannot schedule an appointment while the car is in motion.</p>
                                <div>
                                    {/* <button type="button" className="btn btn-default" onClick={e => this.carMotionCheck(e)}>Schedule Now</button> */}
                                    <button type="button" className="btn btn-default" onClick={e => this.handleClose()}>Remind me later</button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }
}

export default SpeedCheckModal;