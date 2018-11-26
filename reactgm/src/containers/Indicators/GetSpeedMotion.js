import React from 'react';

const gm = window.gm;
class GetSpeedMotion extends React.Component {
    state = { currentSpeed: 1 }

    componentDidMount = () => {
        const currentSpeed = gm.system.getSpeed();
        console.log(currentSpeed);
    }

    render(){
        return(
            <React.Fragment>
                
            </React.Fragment>
        )
    }
}

export default GetSpeedMotion; 