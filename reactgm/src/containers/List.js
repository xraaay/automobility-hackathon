import React from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import moment from 'moment'
import { Modal } from 'react-bootstrap'

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
            let date = moment(item).format('MMMM Do YYYY, h:mm:ss a')
            apptList.push(<ListGroupItem style={styles}>{date}</ListGroupItem>)
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
                <Modal show={this.state.show} onHide={this.handleClose} animation={false} style={{ top: "25%" }} backdropStyle={{ opacity: 0.5 }}>
                    <Modal.Header>
                        <Modal.Title style={{ textAlign: "center" }}>
                            <div>
                                <span className="glyphicon glyphicon-exclamation-sign" style={{ fontSize: "50px", color: "#F7CE3E" }} aria-hidden="true"></span>
                                <h2>Confirm Appoitment?</h2>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <div className="container" style={{ fontWeight: "bold" }}>
                            <div className="row" style={{ color: "black" }}>
                                <p>Confirm {this.state.odometer}</p>
                                <p>Do Later</p>
                                <div>
                                    <button type="button" className="btn btn-default" onClick={e => this.redirect(1)}>Schedule Now</button>
                                    <button type="button" className="btn btn-default" onClick={e => this.handleClose(e)}>No, remind me later</button>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    appointmentsReducer: state.appointmentsReducer
})

export default connect(mapStateToProps)(List);