import React from 'react'
import { connect } from 'react-redux'

class Recalls extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            recallList: []
        }
    }

    componentDidMount() {
        // console.log("check cdm")
        this.setState({
            recallList: this.props.appointmentsReducer
        })
        console.log(this.props.appointmentsReducer);
    }

    render() {
        const listRecall = this.props.appointmentsReducer.vehicalData.map((item, index) => {
            return (
                <tr scope="row" onClick={() => this.props.history.push('/list')} style={{ color: 'white' }} key={index}>
                    <td>{item.recall.number}</td>
                    <td>{item.recall.reason}</td>
                    <td>{item.recall.startDate}</td>
                </tr>
            )
        })

        return (
            <React.Fragment>
                <div>
                <div ref={this.props.refProp} />
                <h1 style={{ color: 'white' }} >Recalls</h1>
                {/* <table style={{position:'center', margin:'auto'}}> */}
                <table className="table table-dark table-lg" style={{ fontSize: '20px' }}>
                    <thead>
                        <tr>
                            <th scope="col" style={{ color: 'white' }} className="col-sm-2">Recall No.</th>
                            <th scope="col" style={{ color: 'white' }} className="col-sm-8">Reason</th>
                            <th scope="col" style={{ color: 'white' }} className="col-sm-2">Recall Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listRecall}
                    </tbody>
                </table>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    appointmentsReducer: state.appointmentsReducer
})

export default connect(mapStateToProps)(Recalls)