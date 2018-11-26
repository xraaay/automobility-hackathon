import React from 'react'
import { Table } from 'react-bootstrap'
import { connect } from 'react-redux'

class List extends React.Component {

    render() {
        const apptList = this.props.appointmentsReducer ? 
            this.props.appointmentsReducer.map( item => {
                return (
                    <React.Fragment>
                        <td key={item.id}>
                        {/* <td>{item.appointmentTime}</td> */}
                        <td>{item.shopName}</td>
                        <td>{item.address}</td>
                        </td>
                    </React.Fragment>
                )
            })
            :null
        return (
            <React.Fragment>
                {console.log(this.props.appointmentsReducer)}
                <Table >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                            <th>Table heading</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        {apptList}
                            <td>1</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                            <td>Table cell</td>
                        </tr>
                    </tbody>
                </Table>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    appointmentsReducer: state.appointmentsReducer
})

export default connect(mapStateToProps)(List);