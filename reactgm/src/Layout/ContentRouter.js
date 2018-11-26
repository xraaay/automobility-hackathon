import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Test from '../containers/Test';
import Homepage from '../containers/Homepage';
import Transaction from '../containers/Transaction';
import Shops from '../containers/Shops';

class ContentRouter extends React.Component {
    render(){
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    {/* <Route path="/test" component={Test} /> */}
                    <Route path="/transaction" component={Transaction} />
                    <Route path="/shops" component={Shops} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default ContentRouter