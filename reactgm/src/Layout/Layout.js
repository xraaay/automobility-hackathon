import React from 'react';
import ContentRouter from './ContentRouter'
import { withRouter } from 'react-router-dom'
import { Modal } from 'react-bootstrap'; 
import SpeedCheckModal from '../containers/SpeedCheckModal';

const gm = window.gm;
class Layout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            odometer: null, 
            show: null,
            isCarMoving: false
        }
        this.handleClose = this.handleClose.bind(this); 
        this.carMotionCheck = this.carMotionCheck.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    redirect = val => {
        switch (val) {
            case 1:
                this.props.history.push("/shops")
                this.setState({show:false})
                break;
            case 2:
                this.props.history.push("/list")
                break;
            case 3:
                this.props.history.push("/transaction")
                break;
            case 4:
                this.props.history.push("/check-in")
                break;
            default:
                break;

        }
    }
    closeApp = () => {
        //gm.system.closeApp();
        this.props.history.push("/")
    };

    componentDidMount() {
        console.log('calling getVehicleData')
        gm.info.getVehicleData((data) => {
            console.log('vehicle data', data);
            this.setState({
                odometer: data.odometer
            })
        }, ['odometer']);

        gm.info.watchVehicleData((data) => {
            if (data.odometer == 25) {
                this.setState({
                    show: true
                })
            }
            console.log(data)
        }, ['odometer']);
    }
    // so if car is in motion, another modal saying that you cannot schedule while car is in motion
    // --> remind me later 

    handleClose(val) {
        this.setState({ show: false });
        if(val){
            this.props.history.push("/shops")
        }
    }

    handleCloseModal (closeModal) {
        console.log(closeModal + ' parent close')
        this.setState({ isCarMoving: closeModal })
    }

    carMotionCheck() {
        const speed = gm.system.getSpeed();

        if (speed === 0) {
            this.setState({ isCarMoving: false })
        }
        else {
            this.setState({ isCarMoving: true })
            console.log("yes it's in the parent")
            this.handleClose();
        }
    }

    render() {
        return (
            <React.Fragment>
                <br/>
                <button type="button" className="btn btn-secondary" onClick={() => this.closeApp()}>Back</button>
                <button type="button" className="btn btn-secondary" onClick={e => this.redirect(1)}>Shops</button>
                <button type="button" className="btn btn-secondary" onClick={e => this.redirect(2)}>List</button>
                <button type="button" className="btn btn-secondary" onClick={e => this.redirect(3)}>Transactions</button>

                <ContentRouter />
                <SpeedCheckModal speedCheck = {this.state.isCarMoving} handleCloseModal = {this.handleCloseModal}/>

                <Modal show={this.state.show} onHide={this.handleClose} animation={false} style={{ top: "18%", backgroundColor: "black", overflow: "hidden" }} backdropStyle={{ opacity: 0 }}>
                    <Modal.Header style={{backgroundColor: "black"}}>
                        <Modal.Title style={{ textAlign: "center" }}>
                            <div>
                                <span className="glyphicon glyphicon-exclamation-sign" style={{ fontSize: "50px"}} aria-hidden="true"></span>
                                <h2>Oil Maintenance Notice</h2>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{backgroundColor: "black"}}>

                        <div className="container" style={{ fontWeight: "bold" }}>
                            <div className="row" style={{ color: "white", fontSize: "12px" }}>
                                <p>Your mileage has reached {this.state.odometer}</p>
                                <p>Would you like to schedule an appointment for oil change?</p>
                                <div>
                                    {/* <button type="button" className="btn btn-default" onClick={e => this.redirect(1)}>Schedule Now</button> */}
                                    <button type="button" className="btn btn-default" onClick={e => this.carMotionCheck(e)}>Schedule Now</button>
                                    <button type="button" className="btn btn-default" onClick={e => this.handleClose(e)}>No, remind me later</button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }
}

export default withRouter(Layout)