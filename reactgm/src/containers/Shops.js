import React from 'react'
import swal from 'sweetalert2'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
import map from '../image.png';

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
                    `your next appointment date is on ${this.props.appointmentsReducer.appointmentTimes[0]}`,
                    'success'
                )
            } else if (
                // Read more about handling dismissals
                result.dismiss === swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons(
                    'Cancelled',
                    'drive safe',
                    'error'
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
            if (index === 0) {
                return (
                        <tr onClick={() => this.schedule()} style={{ fontSize: '45px', color: 'white', borderBlockStartColor: 'white', backgroundColor: "gray" }} key={index}>
                            <td>{shop.name}</td>
                            <td><span>&nbsp;&nbsp;</span></td>
                            <td>{shop.distance}Mi.</td>
                            <span className="glyphicon glyphicon-star-empty"></span>
                        </tr>
                )
            } else {
            return (
                <tr onClick={() => this.schedule()} style={{fontSize:'45px', color: 'white', backgroundColor:"gray"}} key={index}>
                    <td>{shop.name}</td>
                    <td><span>&nbsp;&nbsp;</span></td>
                    <td>{shop.distance}Mi.</td>
                </tr>
            )
            }
        })
        return (
            <React.Fragment>
                <div style={{backgroundColor:'black'}}/>
                <h1 style={{ color: 'white', margin:'auto',align:'center',textAlign:'center',alignSelf: 'center'}} >check shops</h1>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 offset-2">
                            <table>
                                <thead>
                                    <tr style={{ color: 'white', margin:'auto',align:'center',textAlign:'center',alignSelf: 'center'}}>
                                        <th style={{ color: 'white', margin:'auto',align:'center',textAlign:'center',alignSelf: 'center'}}>Shops</th>
                                        <th><span>&nbsp;&nbsp;</span></th>
                                        <th>Distance</th>
                                    </tr>
                                </thead>
                                <tbody>{listShops}</tbody>
                            </table>
                        </div>
                        <div className="col-sm-6">
                            <img src={map} style={{ maxWidth: '90%',maxHeight: '90%'}}/>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    appointmentsReducer: state.appointmentsReducer
})

export default connect(mapStateToProps)(Shops)