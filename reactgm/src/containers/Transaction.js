import React from 'react';
import { Modal } from 'react-bootstrap'; 
class Transaction extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            show: true
        }
    }
    onVisaCheckoutReady = () => {
        window.V.init({
            apikey: "UXB7MD9SB5HMH8SJOAQT21wQ6Boc6eYFatkzm7qSkniHpLnE0",
            paymentRequest: {
                currencyCode: "USD",
                subtotal: "39.99"
            }
        });
        window.V.on("payment.success", () => {
            this.setState({
                show: false
            });
            this.props.history.push('/')
        });
        window.V.on("payment.cancel", function (payment) {
            alert(JSON.stringify(payment));
        });
        window.V.on("payment.error", function (payment, error) {
            alert(JSON.stringify(error));
        });
    }

    closeModal = () => {
        this.setState({
            show: false
        })
    }

    render() {
        return (
            <React.Fragment >
                <Modal show={this.state.show} onHide={this.closeModal} animation={false} style={{ top: "18%", backgroundColor: "black", overflow: "hidden"}} backdropStyle={{opacity: 0}}>
                    <Modal.Header style={{backgroundColor: "black"}}>
                        <Modal.Title style={{ textAlign: "center" }}>
                            <div>
                                <span className="glyphicon glyphicon-exclamation-point" style={{ fontSize: "50px"}} aria-hidden="true"></span>
                                <h2>Total Cost: $39.99</h2>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{backgroundColor: "black"}}>
                        <img onClick={this.onVisaCheckoutReady}
                            alt="Visa Checkout"
                            class="v-button"
                            role="button"
                            src="https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png" 
                        />
                    </Modal.Body>
                </Modal>
            </React.Fragment>
                // {/* <div className="container" style={{ fontWeight: "bold", textAlign: 'center' }}>
                //     <div className="row" style={{ color: "white" }}>
                //         <h1>Total Cost: $39.99</h1>
                //         <img onClick={this.onVisaCheckoutReady}
                //             alt="Visa Checkout"
                //             class="v-button"
                //             role="button"
                //             src="https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png" 
                //         />
                //         <div>
                //             {/* <button type="button" className="btn btn-default" onClick={e => this.redirect(1)}>Schedule Now</button> */}
                //             {/* <button type="button" className="btn btn-default" onClick={e => this.carMotionCheck(e)}>Schedule Now</button>
                //             <button type="button" className="btn btn-default" onClick={e => this.handleClose(e)}>No, remind me later</button> */}
                //         </div>
                //     </div>
                // </div> */}
        )
    }
}
    
export default Transaction
