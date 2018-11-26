import React from 'react'
import swal from 'sweetalert2'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
// import map from '../image.png';

class Shops extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shopList: []
        }
    }

    scrollToContent(content) {
        switch (content) {
            case 1:
                this.section1.current.scrollIntoView({ behavior: 'smooth' });
                break;
            case 2:
                this.section2.current.scrollIntoView({ behavior: 'smooth' });
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

export default connect(mapStateToProps)(Shops)