import React from 'react'
import swal from 'sweetalert2'
import { connect } from 'react-redux'
// import map from '../image.png';

class Shops extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shopList: []
        }
    }

    schedule = () => {
        const swalWithBootstrapButtons = swal.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: false,
        })

        swalWithBootstrapButtons({
            title: this.state.shopList.shops[0].shopName,
            text: this.state.shopList.shops[0].address,
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, schedule appointment',
            cancelButtonText: 'No, schedule later',
            reverseButtons: true
        }).then((result) => {
          if (result.value) {
            swalWithBootstrapButtons(
              'Scheduled!',
              `Your next appointment date is on ${this.props.appointmentsReducer.appointmentTimes[0]}`,
              'Success'
            )
          } else if (
            // Read more about handling dismissals
            result.dismiss === swal.DismissReason.cancel
          ) {
            swalWithBootstrapButtons(
              'Cancelled',
              'Drive safe',
              'Error'
            )
          }
        })
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
                    <td className='table_padding'>{shop.name}</td>
                    <td className='table_padding'>{shop.address}</td>
                    <td className='table_padding'>{shop.distance}Mi.</td>
                </tr>
            )
        })

        return (
            <React.Fragment>
                <div className='container_'>
                <div ref={this.props.refProp} />
                {/* <h1 style={{ color: 'white' }} >Nearby Shops</h1> */}
                {/* <table style={{position:'center', margin:'auto'}}> */}
                <table className="table table-dark table-lg table_font">
                    <thead>
                        <tr>
                            <th scope="col" style={{ color: 'white' }} className="col-sm-3">Nearby Shops</th>
                            <th scope="col" style={{ color: 'white' }} className="col-sm-5"></th>
                            <th scope="col" style={{ color: 'white' }} className="col-sm-2">Distance</th>
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

export default connect(mapStateToProps)(Shops)