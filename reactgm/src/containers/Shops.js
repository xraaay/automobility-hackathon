import React from 'react'
import swal from 'sweetalert2'
import{connect} from 'react-redux'

class Shops extends React.Component {

    constructor(props){
        super(props);
        
        this.state={
            shopList:[]
        }
    }

componentDidMount(){
this.setState({
    shopList:this.props.appointmentsReducer
})
}

scrollToMyRef = () => {
    window.scrollTo({
        top:this.myRef.current.offsetTop-20, 
        behavior: "auto"
    })
}
    render() {

        const listShops = this.state.shopList.map((shop,ind) => {
            return (
                <tr key={shop.id}>
                    <td>{shop.shopName}</td>
                    <td> {shop.address} </td>
                </tr>
            )
        })
        return (
            <React.Fragment>
                <h1>check shops</h1>
                <table className="table table-inverse">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Address</th>
                        </tr>
                    </thead>

                    <tbody>{listShops}</tbody>
                </table>
            </React.Fragment>
        )
    }
}

const mapStateToProps=state=>({
    appointmentsReducer:state.appointmentsReducer
})

export default connect(mapStateToProps)(Shops)