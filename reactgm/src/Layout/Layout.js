import React from 'react';
import ContentRouter from './ContentRouter'
import { withRouter } from 'react-router-dom'
import { Modal } from 'react-bootstrap'; 
import "typeface-palanquin-dark";
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
        switch(val){
            case 1:
                this.props.history.push("/")
                break;
            case 2:
                this.props.history.push("/test")
                break;
        }
    }

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
    
    handleClose() {
        this.setState({ show: false });
    }

    render(){
        if (this.state.show == true) {
            console.log('hello')
        } 
        return (
            <React.Fragment>
                <button type="button" onClick={e => {this.redirect(1)}}>Homepage</button>
                <button type="button" onClick={e => {this.redirect(2)}}>Test</button>
                <ContentRouter />

               <Modal show={this.state.show} onHide={this.handleClose} animation={false} style={{ top: "25%" }} backdropStyle={{ opacity: 0.5 }}>
                    <Modal.Body>
                        <div className="container" style={{textAlign: "center"}}>
                            <div className="row" style={{ color: "black" }}>
                                <i class="fa fa-car"></i>
                                <h2>Car needs service</h2>

                                <p>Your mileage has reached {this.state.odometer}</p>
                                <p>Would you like to schedule an appointment?</p>
                                <div style={{textAlign: "center"}}>
                                <button type="button" className="btn btn-default" onClick={e => this.handleClose(e)}>Schedule Now</button>
                                <button type="button" className="btn btn-default" onClick={e => this.handleClose(e)}>No, remind me later</button>
                                </div>
                                {/* {select}
                                
                                <div style={{ textAlign: "left", padding: "20px", backgroundColor: "white", borderRadius: "10px" }}>
                                <h4>Timer {ms(this.state.time)}</h4>
                                {start}
                                {resume}
                                {stop}
                                {reset}
                                </div> */}
                            </div>
                        </div>
                        <button type="button" onClick={e => this.handleClose(e)}>Test</button>

                    </Modal.Body>
                </Modal>

            </React.Fragment>
        )
    }
}

export default withRouter(Layout)