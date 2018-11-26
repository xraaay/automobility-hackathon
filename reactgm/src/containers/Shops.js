import React from 'react'
import swal from 'sweetalert2'

export default class Shops extends React.Component {

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
debugger
}

    render() {

        const listShops = this.state.shopList.map((shop,ind) => {
            return (
                <tr key={ind}>
                    <td>{shop.name}</td>
                    <td> {shop.distance} </td>
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
                            <th>Distance</th>
                        </tr>
                    </thead>

                    <tbody>{listShops}</tbody>
                </table>
            </React.Fragment>
        )
    }
}