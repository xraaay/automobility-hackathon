import React from 'react';
import { Route, Link, Switch } from "react-router-dom";
import Homepage from '../containers/Homepage';
import List from '../containers/List';
import Recalls from '../containers/Recalls';
import Shops from '../containers/Shops';
import Transaction from '../containers/Transaction';

class ContentRouter extends React.Component {
    render(){
        console.log("Switch")
        return (
            <React.Fragment>
                <Switch>
                    <Route path="/" exact component={Homepage} />
                    <Route path="/list" component={List} />
                    <Route path="/recalls" component={Recalls} />
                    <Route path="/shops" component={Shops} />
                    <Route path="/transaction" component={Transaction} />
                </Switch>
            </React.Fragment>
        )
    }
}

export default ContentRouter