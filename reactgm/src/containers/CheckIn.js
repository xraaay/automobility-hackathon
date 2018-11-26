import React from 'react';

const gm = window.gm

class CheckIn extends React.Component {
    constructor(props){
        super(props)
            this.state = {
                currentLocation:''
            }
    }


    componentDidMount() {
        // gm.info.getCurrentPosition(processPosition, true)
        // function processPosition(position) {
        //     let lat = position.coords.latitude;
        //     let lng = position.coords.longitude;
        // }

    gm.info.getCurrentPosition(success => {
        console.log(success)
    })
    }

    render(){
        return (
            <React.Fragment>
            <h1>Check In</h1>
            </React.Fragment>
        )
    }
}

export default CheckIn;