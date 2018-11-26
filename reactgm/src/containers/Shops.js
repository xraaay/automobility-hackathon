import React from 'react'
import { connect } from 'react-redux'
import { selectShop } from '../actions'
import { withRouter } from 'react-router-dom'
// import map from '../image.png';

class Shops extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shopList: []
        }
    }

    selectShop(shop){
        this.props.selectedShop(this.state.shopList.shops[0])
        this.props.history.push("/list")
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
                <tr scope="row" onClick={() => {this.selectShop(shop)}} style={{ color: 'white' }} key={index}>
                    <td>{shop.name}</td>
                    <td>{shop.distance}Mi.</td>
                </tr>
            )
        })

        return (
            <React.Fragment>
                <div>
                <div ref={this.props.refProp} />
                <h1 style={{ color: 'white' }} >Nearby Shops</h1>
                {/* <table style={{position:'center', margin:'auto'}}> */}
                <table className="table table-dark table-lg" style={{ fontSize: '20px' }}>
                    <thead>
                        <tr>
                            <th scope="col" style={{ color: 'white' }} className="col-sm-11">Shops</th>
                            <th scope="col" style={{ color: 'white' }} className="col-sm-1">Distance</th>
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

const mapDispatchToProps = dispatch => ({
    selectedShop: shop => dispatch(selectShop(shop))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Shops))