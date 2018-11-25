import React from 'react';
import ContentRouter from './ContentRouter'
import { withRouter } from 'react-router-dom'

class Layout extends React.Component {
    redirect = val => {
        switch(val){
            case 1:
                this.props.history.push("/")
                break;
            case 2:
                this.props.history.push("/test")
                break;
        }
    }

    render(){
        return (
            <React.Fragment>
                <button type="button" onClick={e => {this.redirect(1)}}>Homepage</button>
                <button type="button" onClick={e => {this.redirect(2)}}>Test</button>
                <ContentRouter />
            </React.Fragment>
        )
    }
}

export default withRouter(Layout)