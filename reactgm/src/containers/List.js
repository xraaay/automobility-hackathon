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
            apptList: [],
            icon:false
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

    closeApp = () => {
        this.props.history.push("/")
    }

    schedule = () => {
        this.setState({icon:true})
        setTimeout(function(){
            this.props.history.push("/")
        }.bind(this),1200)
    }

    render() {
        return (
            <React.Fragment>
                <div  className='container-fluid'>
                    <ListGroup onClick={()=>this.setState({show:true})}>
                        {this.state.apptList}
                    </ListGroup>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose} animation={false} style={{ top: "25%", color:'black' }} backdropStyle={{ opacity: 0.5 }}>
                    <Modal.Header>
                        <Modal.Title style={{ textAlign: "center" }}>
                            <div>
                                {this.state.icon?<span className="glyphicon glyphicon-check" style={{color:'#00e600', fontSize: "50px"}} aria-hidden="true"></span>
                                :<span className="glyphicon glyphicon-exclamation-sign" style={{ fontSize: "50px", color: "#F7CE3E" }} aria-hidden="true"></span>}
                                <h2 style={{ color: 'black' }}>Confirm Appoitment?</h2>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="container" style={{ fontWeight: "bold" }}>
                            <div className="row" style={{ color: "black" }}>
                                <p style={{ color: 'black' }}>Confirm {this.state.odometer}</p>
                                <p style={{color:'black'}}>Do Later</p>
                                <div>
                                    <button type="button" className="btn btn-default" onClick={e => this.schedule()}>Schedule Now</button>
                                    <button type="button" className="btn btn-default" onClick={e => this.closeApp()}>No, Remind Me Later</button>
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