import React from 'react';
import ContentRouter from './ContentRouter'
import { withRouter } from 'react-router-dom'
import { Modal } from 'react-bootstrap'; 

const gm = window.gm;
class Layout extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            odometer: null, 
            show: null
        }
        this.handleClose = this.handleClose.bind(this); 
    }

    redirect = val => {
        switch (val) {
            case 1:
                this.props.history.push("/shops")
                break;
            case 2:
                this.props.history.push("/list")
                break;
            case 3:
                this.props.history.push("/transaction")
                break;
            default:
                break;
        }
    }
    closeApp = () => {
        // gm.system.closeApp();
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

    render() {
        return (
            <React.Fragment>
                <button type="button" className="btn btn-secondary" onClick={()=>this.closeApp()}>Back</button>
                <button type="button" className="btn btn-secondary text-right" onClick={e => {this.redirect(1)}}>Shops</button>
                <button type="button" className="btn btn-secondary" onClick={e => { this.redirect(2)}}>List</button>
                <button type="button" className="btn btn-secondary" onClick={e => {this.redirect(3)}}>Transactions</button>

                <ContentRouter />

                <Modal show={this.state.show} onHide={this.handleClose} animation={false} style={{ top: "25%" }} backdropStyle={{ opacity: 0.5 }}>
                    <Modal.Header>
                        <Modal.Title style={{ textAlign: "center" }}>
                            <div>
                                <span className="glyphicon glyphicon-exclamation-sign" style={{ fontSize: "50px", color: "#F7CE3E" }} aria-hidden="true"></span>
                                <h2>Car needs service</h2>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        <div className="container" style={{ fontWeight: "bold" }}>
                            <div className="row" style={{ color: "black" }}>

                                <p>Your mileage has reached {this.state.odometer}</p>
                                <p>Would you like to schedule an appointment?</p>
                                <div>
                                    <button type="button" className="btn btn-default" onClick={e => {this.handleClose(true)}}>Schedule Now</button>
                                    <button type="button" className="btn btn-default" onClick={e => {this.handleClose(false)}}>No, remind me later</button>
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