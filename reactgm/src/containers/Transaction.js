import React from 'react';

class Transaction extends React.Component {
    onVisaCheckoutReady = () => {
        window.V.init({
            apikey: "UXB7MD9SB5HMH8SJOAQT21wQ6Boc6eYFatkzm7qSkniHpLnE0",
            paymentRequest: {
                currencyCode: "USD",
                subtotal: "11.00"
            }
        });
        window.V.on("payment.success", function (payment) {
            alert(JSON.stringify(payment));
        });
        window.V.on("payment.cancel", function (payment) {
            alert(JSON.stringify(payment));
        });
        window.V.on("payment.error", function (payment, error) {
            alert(JSON.stringify(error));
        });
    }

    render() {
        return (
            <React.Fragment >
                <img onClick={this.onVisaCheckoutReady}
                    alt="Visa Checkout"
                    class="v-button"
                    role="button"
                    src="https://sandbox.secure.checkout.visa.com/wallet-services-web/xo/button.png" 
                />
            </React.Fragment>
        )
    }
}
    
export default Transaction