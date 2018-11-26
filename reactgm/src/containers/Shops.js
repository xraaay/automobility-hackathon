import React from 'react'
import swal from 'sweetalert2'
import { connect } from 'react-redux'

class Shops extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            shopList: []
        }

    }
    scrollToContent(content) {
        switch(content) {
          case 1:
            this.section1.current.scrollIntoView({behavior: 'smooth'});
            break;
          case 2:
            this.section2.current.scrollIntoView({behavior: 'smooth'});
        }
      }
      schedule = () => {
        const swalWithBootstrapButtons = swal.mixin({
          confirmButtonClass: 'btn btn-success',
          cancelButtonClass: 'btn btn-danger',
          buttonsStyling: false,
        })
        
        swalWithBootstrapButtons({
          title: this.state.shopList[0].shopName,
          text: this.state.shopList[0].address,
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, schedule appointment',
          cancelButtonText: 'No, schedule later',
          reverseButtons: true
        }).then((result) => {
          if (result.value) {
            swalWithBootstrapButtons(
              'Scheduled!',
              `your next appointment date is on ${this.state.shopList.appoitnemtTimes}`,
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
        this.setState({
            shopList: this.props.appointmentsReducer
        })
        debugger
    }

    render() {

        const listShops = this.state.shopList.shops.map((shop,index) => {
            debugger
            return (
                <tr onClick={()=>this.schedule()} key={index}>
                    <td>{shop.shopName}</td>
                    <td>{shop.distance}Mi</td>
                    {/* <td> {shop.address} </td> */}
                </tr>
            )
        })
        return (
            <React.Fragment>
                <div ref={this.props.refProp} />
                <h1>check shops</h1>
                <button type="button" onClick={() => this.props.history.push("/")}>Homepage</button>
                <table className="table table-inverse">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>distance</th>
                        </tr>
                    </thead>

                    <tbody>{listShops}</tbody>
                </table>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    appointmentsReducer: state.appointmentsReducer
})

export default connect(mapStateToProps)(Shops)