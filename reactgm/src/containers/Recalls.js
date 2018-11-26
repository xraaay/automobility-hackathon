import React from 'react'
import { connect } from 'react-redux'

class Recalls extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shopList: []
        }
    }

    componentDidMount() {
        // console.log("check cdm")
        this.setState({
            shopList: this.props.appointmentsReducer
        })
        console.log(this.props.appointmentsReducer);
    }

    render() {
        const listShops = this.props.appointmentsReducer.shops.map((shop, index) => {
            return (
                <tr scope="row" onClick={() => this.props.history.push('/list')} style={{ color: 'white' }} key={index}>
                    <td>{shop.name}</td>
                    <td>{shop.distance}Mi.</td>
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
                            <th scope="col" style={{ color: 'white' }} className="col-sm-11">Recall No.</th>
                            <th scope="col" style={{ color: 'white' }} className="col-sm-1">Recall Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listShops}
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