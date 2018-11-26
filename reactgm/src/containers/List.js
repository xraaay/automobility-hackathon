import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'

const styles = {
    color: '#fff',
    backgroundColor: '#000',
}
class List extends React.Component {

    render() {
        const apptArr = this.props.appointmentsReducer.appointmentTimes;
        const apptList = []
        apptArr.forEach( item => {
            apptList.push(<ListGroupItem style={styles}>{JSON.stringify(item)}</ListGroupItem>)
        })
        
        return (
            <React.Fragment>
                {console.log(this.props.appointmentsReducer.appointmentTimes)}
                <div style={styles} className='container'>
                    <ListGroup>
                        {apptList}
                    </ListGroup>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    appointmentsReducer: state.appointmentsReducer
})

export default connect(mapStateToProps)(List);