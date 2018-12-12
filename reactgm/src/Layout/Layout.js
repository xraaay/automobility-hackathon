import React from 'react';
import ContentRouter from './ContentRouter'
import { withRouter } from 'react-router-dom'
import { Modal } from 'react-bootstrap'; 
import SpeedCheckModal from '../containers/SpeedCheckModal';
import { connect } from 'react-redux'

const gm = window.gm;
class Layout extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            checkin: false,
            odometer: null, 
            show: null,
            isCarMoving: false,
            alert:true
        }
        this.handleClose = this.handleClose.bind(this); 
        this.carMotionCheck = this.carMotionCheck.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.handleCloseCheckin = this.handleCloseCheckin.bind(this)
    }

    redirect = val => {
        switch (val) {
            case 1:
                this.props.history.push("/shops")
                this.setState({ show: false })
                break;
            case 2:
                this.props.history.push("/list")
                break;
            case 3:
                this.props.history.push("/transaction")
                // default:
                break;
            case 4:
                this.props.history.push("/recalls")
                this.setState({ show: false })
                break;
            case 4:
                this.props.history.push("/check-in")
                break;
            default:
                break;

        }
    }
    closeApp = () => {
        gm.system.closeApp();
        //this.props.history.push("/")
    };

    componentDidMount() {
        console.log(this.props.shopReducer)
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

        gm.info.watchVehicleData(data => {
            if (data.tire_ind === 1) {
                this.props.history.push("/recalls")
            }
            console.log(data)
        }, ['tire_ind']);
        // gm.info.getCurrent
    }

    componentDidUpdate(prevProps){
        if(prevProps.shopReducer !== this.props.shopReducer){
            // gm.info.getCurrentPosition(data => {
            //     console.log(data)
            // })
            gm.info.watchVehicleData (data => {
                if(data.gps_lat > 152458800){
                    console.log(this.props.shopReducer)
                    this.setState({
                        checkin: true
                    })
                }
            })
        }
    }
    
    // so if car is in motion, another modal saying that you cannot schedule while car is in motion
    // --> remind me later 

    handleClose(val) {
        this.setState({ show: false });
        if(val){
            this.props.history.push("/")
        }
    }

    handleCloseCheckin(val){
        this.setState({
            checkin: false
        })
        if(val){
            this.props.history.push("/transaction")
        }
    }

    handleCloseModal (closeModal) {
        console.log(closeModal + ' parent close')
        this.setState({ isCarMoving: closeModal,alert:closeModal })
    }

    carMotionCheck() {
        const speed = gm.system.getSpeed();

        if (speed === 0) {
            this.setState({ isCarMoving: false,alert: true })
            this.props.history.push('/shops')
            this.handleClose()    
        }
        else {
            this.setState({
                isCarMoving: true,
                alert: false
            })
            console.log("yes it's in the parent")
            this.handleClose();
        }
    }

    render() {
        return (
            <React.Fragment>
                {/* <div className='button_div'>
                <button type="button" className="btn button" onClick={() => this.closeApp()}>Back</button>
                <button type="button" className="btn button" onClick={e => this.redirect(1)}>Shops</button>
                <button type="button" className="btn button" onClick={e => this.redirect(2)}>Appointments</button>
                <button type="button" className="btn button" onClick={e => this.redirect(3)}>Wallet</button>
                <button type="button" className="btn button" onClick={e => this.redirect(4)}>Recalls</button>
                </div> */}

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

                
                {this.props.shopReducer.shop && 
                <Modal show={this.state.checkin} onHide={this.handleCloseCheckin} animation={false} style={{ top: "18%", backgroundColor: "black", overflow: "hidden"}} backdropStyle={{opacity: 0}}>
                    <Modal.Header style={{backgroundColor: "black"}}>
                        <Modal.Title style={{ textAlign: "center" }}>
                            <div>
                                <span className="glyphicon glyphicon-question-mark" style={{ fontSize: "50px"}} aria-hidden="true"></span>
                                <h2>Checking In?</h2>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{backgroundColor: "black"}}>

                        <div className="container" style={{ fontWeight: "bold" }}>
                            <div className="row" style={{ color: "white", fontSize: "12px" }}>
                                <p>Are you checking into {this.props.shopReducer.shop.name}</p>
                                <p>Address: {this.props.shopReducer.shop.address}</p>
                                <div>
                                    <button type="button" className="btn btn-default" onClick={e => this.handleCloseCheckin(true)}>Check In</button>
                                    {/* <button type="button" className="btn btn-default" onClick={e => this.carMotionCheck(e)}>Schedule Now</button> */}
                                    <button type="button" className="btn btn-default" onClick={e => this.handleCloseCheckin(false)}>No</button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>}
                </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    shopReducer: state.shopReducer
})

export default withRouter(connect(mapStateToProps)(Layout))