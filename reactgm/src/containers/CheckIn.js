import React from 'react';

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

        const currentPosition = gm.info.getCurrentPosition()

        // function processPosition(position) {
        //     let lat = '34.016241889667015'
        //     let lng = '-118.0535888671875'
        // }
        this.setState({
            currentLocation: currentPosition
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