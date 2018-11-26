import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import moment from 'moment-timezone'

const styles = {
    color: '#fff',
    backgroundColor: '#000',
    paddingTop: '15px',
    fontSize: '25px',
    margin: 0
}
class List extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            apptList: []
        }
    }
    componentDidMount(){
        const apptArr = this.props.appointmentsReducer.appointmentTimes;
        const apptList = []
        apptArr.forEach( item => {
            apptList.push(<ListGroupItem style={styles}>{moment(JSON.stringify(item))}</ListGroupItem>)
        })
        this.setState({
            apptList: apptList
        })
    }
    render() {
        return (
            <React.Fragment>
                <div  className='container-fluid'>
                    <ListGroup>
                        {this.state.apptList}
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